// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QuickTixEvent is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {

    error Error_TransferringFees();
    error Error_EventNotActive();

    uint256 private _nextTokenId;

    struct Event {
        string title;
        string symbol;
        string uri;
        string desciption;
        string genre;
        string date;
        string timezone;
        string location;
        uint256 start;
        uint256 length;
        uint256 price;
        address owner;
    }

    Event private event_info;

    constructor(Event memory _event_info)
        ERC721(_event_info.title, _event_info.symbol)
        Ownable(_event_info.owner)
    {
        event_info = _event_info;
    }

    function bookTickets(uint256 numberOfTickets) public payable {
        require(msg.value >= event_info.price * numberOfTickets, "Insufficient funds");
        require(isActive(), "Event not active");

        for (uint256 i = 0; i < numberOfTickets; ++i) {
            uint256 tokenId = _nextTokenId++;
            _safeMint(msg.sender, tokenId);
            _setTokenURI(tokenId, event_info.uri);
        }
    }

    function claimTicket(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not approved to claim");
        require(isActive(), "Event not active");

        burn(tokenId);
    }

    function transferFees() public onlyOwner {
        (bool success, ) = payable(owner()).call{value: address(this).balance}("");
        if (!success) revert Error_TransferringFees(); 
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function getEventInfo() public view returns(Event memory) {
        return event_info;
    }

    function isActive() public view returns (bool) {
        return block.timestamp >= event_info.start && block.timestamp <= event_info.start + event_info.length;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

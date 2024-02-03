// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;
import {QuickTixEvent} from "./Event.sol";

contract Factory {
    event EventCreated(address indexed creator, address indexed eventContract);

    mapping(address => address[]) public events;

    function createEvent(QuickTixEvent.Event memory eventParams) public {
        QuickTixEvent newEvent = new QuickTixEvent(eventParams);

        events[msg.sender].push(address(newEvent));

        emit EventCreated(msg.sender, address(newEvent));
    }

    function getEventCreator(address creator) public view returns (address[] memory) {
        return events[creator];
    }
}

const provider = window.ethereum;

export const onConnectLightlink = async (connected) => {
  const _chainId = await provider.request({ method: 'eth_chainId' });
  if (_chainId.toString() !== '0x763') {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x763' }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x763',
                chainName: 'Lightlink Pegasus Testnet',
                rpcUrls: ['https://replicator.pegasus.lightlink.io/rpc/v1'],
              },
            ],
          });
        } catch (addError) {
          console.log(addError);
        }
      }
    }
  }
  if (!connected) {
    const res = await provider.request({ method: 'eth_requestAccounts' });
    if (res) {
      return { res: res[0], conn: true };
    } else {
      return { res: '', conn: false };
    }
  }
};

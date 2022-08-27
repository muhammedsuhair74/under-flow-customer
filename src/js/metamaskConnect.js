import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import axios from 'axios';
import contractJson from './TicketNFT.json';

let provider;
let currentAccount;

export async function connectWallet() {
  provider = await detectEthereumProvider();

  if (provider) {
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    currentAccount = accounts[0];
    return currentAccount;
  }
  return 'Please install MetaMask!';
}

async function convertAmount(price) {
  const { data } = await axios.get(
    'http://192.168.1.218:1337/priceconversion',
    {
      params: {
        amount: price,
        symbol: 'USD',
        convert: 'ETH'
      }
    }
  );
  return data.data[0].quote.ETH.price * 1.02;
}

export async function bookNow(
  event = {
    contractAddress: '0x48cd314084fea3fd9522e749c64f447ce825d39f',
    fiatPrice: 'fiatPrice'
  }, count
) {
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(
    contractJson.abi,
    event.contractAddress
  );
  const cryptoPrice = await convertAmount(event.fiatPrice);
  const txn = {
    to: event.contractAddress,
    from: currentAccount,
    data: contract.methods.buyTicket(count).encodeABI(),
    value: web3.utils.toHex(web3.utils.toWei(`${cryptoPrice}`.slice(0, 18)))
  };
  const txHash = await provider.request({
    method: 'eth_sendTransaction',
    params: [txn]
  });
  console.log(txHash, ' being mined');
}

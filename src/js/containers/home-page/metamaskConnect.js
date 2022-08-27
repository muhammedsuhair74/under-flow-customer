import detectEthereumProvider from "@metamask/detect-provider";
import contractJson from "../../TicketNFT.json";
import Web3 from "web3";
import axios from "axios";

let provider;
let currentAccount;

export async function connectWallet() {
  provider = await detectEthereumProvider();

  if (provider) {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    currentAccount = accounts[0];
    return currentAccount;
  } else {
    return "Please install MetaMask!";
  }
}

async function convertAmount(price) {
  const { data } = await axios.get(
    "http://192.168.1.218:1337/priceconversion",
    {
      params: {
        amount: price,
        symbol: "USD",
        convert: "ETH",
      },
    }
  );
  return data.data[0].quote.ETH.price;
}

export async function bookNow(
  event = {
    contractAddress: "0x48cd314084fea3fd9522e749c64f447ce825d39f",
    price: "50",
  }
) {
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(
    contractJson.abi,
    event.contractAddress
  );
  const cryptoPrice = await convertAmount(event.price)
  const txn = {
    to: event.contractAddress,
    from: currentAccount,
    data: contract.methods.BuyTicket().encodeABI(),
    value: web3.utils.toHex(web3.utils.toWei(`${cryptoPrice}`)),
  };
  const txHash = await provider.request({
    method: "eth_sendTransaction",
    params: [txn],
  });
  console.log(txHash, " being mined");
}

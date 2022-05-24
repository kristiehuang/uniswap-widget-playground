import logo from './logo.svg';
import './App.css';
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
const { ethers } = require("ethers");

// provider
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)
console.log("jello")
console.log(provider)
// // MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

// // The MetaMask plugin also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, you need the account signer...
const signer = provider.getSigner()

// json rpc endpoint
const network = 'rinkeby'
const infuraProjectId = '424ca83ef1c64ec794b2b064cd07ad0f'
const jsonRpcEndpoint = 'https://' + network + '.infura.io/v3/' + infuraProjectId

function App() {
  return (
    <div className="Uniswap">
      <SwapWidget
        provider={provider}
        jsonRpcEndpoint={jsonRpcEndpoint}
      />
    </div>
    
  );
}

export default App;

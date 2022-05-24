import './App.css';
import { lightTheme as defaultLightTheme, darkTheme as defaultDarkTheme, Theme, SwapWidget, lightTheme } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
const { ethers } = require("ethers");

// provider
const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()

// json rpc endpoint
const network = 'rinkeby'
const infuraProjectId = '424ca83ef1c64ec794b2b064cd07ad0f'
const jsonRpcEndpoint = 'https://' + network + '.infura.io/v3/' + infuraProjectId

let darkMode = false
const myLightTheme = {
  ...lightTheme,
  tokenColorExtraction: true,
  // primary: '#000',
  // secondary: '#A9A9A9',
  // interactive: '#1E4D3C',
  container: '#98D747',
  // module: '#FFF',
  // accent: '#FD5B00',
  // outline: '#1E4D3C',
  // dialog: '#000',
  // fontFamily: 'Inter',
  // borderRadius: 0.2,
}

const CMC_TOKEN_LIST = 'https://api.coinmarketcap.com/data-api/v3/uniswap/all.json'
console.log("token list", CMC_TOKEN_LIST)

const MY_TOKEN_LIST = [
  {
  "name": "Dai Stablecoin",
  "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "symbol": "DAI",
  "decimals": 18,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
},
  {
  "name": "Tether USD",
  "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "symbol": "USDT",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
},
{
  "name": "USD Coin",
  "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "symbol": "USDC",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
},
]

// Use the native token of the connected chain as the default input token
const NATIVE = 'NATIVE' // Special address for native token

// DAI as the default output token
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F'


function App() {
  return (
    <div className="Uniswap">
      <SwapWidget
        provider={provider}
        jsonRpcEndpoint={jsonRpcEndpoint}
        width={720}
        theme={darkMode ? defaultDarkTheme : myLightTheme}
        tokenList={MY_TOKEN_LIST}
        defaultInputTokenAddress={DAI}
        defaultOutputTokenAddress={NATIVE}
      />
    </div>
    
  );
}

export default App;

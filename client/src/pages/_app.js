import '../styles/globals.css';
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { Navbar ,Footer} from "../components";
import { NftMarketPlaceProvider } from 'src/Context/NftMarketPlaceContext';
import { Config } from 'src/config/WalletConfig';

const App=({ Component, pageProps })=> {
  return <div>
    <WagmiConfig client={Config.client}>
    <RainbowKitProvider
      appInfo={Config.appInfo}
      chains={Config.supportedChains}
      modalSize="compact"
      theme={Config.theme}
    >
    <NftMarketPlaceProvider>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </NftMarketPlaceProvider>
    </RainbowKitProvider>
    </WagmiConfig>
  </div>
}

export default App;

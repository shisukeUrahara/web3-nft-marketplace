import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets, darkTheme } from "@rainbow-me/rainbowkit";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";

import { allChains, appChains } from "../utils/Chains/index";
import { getRecommendedWallets, getOtherWallets } from "../utils/wallets/index";

let supportedChains;

const walletConfig = {
  walletEnv: process.env.NEXT_PUBLIC_ENVIRONMENT || "testnet",
};

// console.log("**@ walletConfig is , ",walletConfig);

if (
  walletConfig.walletEnv &&
  walletConfig.walletEnv.toLowerCase() == "mainnet"
) {
  supportedChains = appChains.mainnetChains;
} else {
  supportedChains = appChains.testnetChains;
}

const { chains, provider } = configureChains(supportedChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL }),
  infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_RPC_URL }),
]);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: getRecommendedWallets(chains),
  },
  {
    groupName: "Others",
    wallets: getOtherWallets(chains),
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const appInfo = {
  appName: "Web3 nft card game",
};

export const Config = {
  client: wagmiClient,
  appInfo: appInfo,
  supportedChains: chains,
  theme: darkTheme(),
};

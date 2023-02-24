import {
  coinbaseWallet,
  metaMaskWallet,
  trustWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

export const getRecommendedWallets = (chains) => {
  return [
    injectedWallet({ chains }),
    rainbowWallet({ chains }),
    walletConnectWallet({ chains }),
  ];
};

export const getOtherWallets = (chains) => {
  return [
    coinbaseWallet({ chains, appName: "User Wallet" }),
    metaMaskWallet({ chains }),
    trustWallet({ chains }),
  ];
};

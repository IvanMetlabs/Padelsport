import { WEB3AUTH_NETWORK, CHAIN_NAMESPACES, type Web3AuthOptions } from "@web3auth/modal";
import type { Web3AuthContextConfig } from "@web3auth/modal/react";

const clientId = import.meta.env.VITE_WEB3AUTH_CLIENT_ID as string;
const network = import.meta.env.VITE_WEB3AUTH_NETWORK as string;
const chainId = (import.meta.env.VITE_BSC_CHAIN_ID as string) || "0x61";

if (!clientId) {
  throw new Error("Missing VITE_WEB3AUTH_CLIENT_ID env var");
}

// Determine if testnet or mainnet based on chainId
const isTestnet = chainId === "0x61";

const web3AuthNetwork =
  network === "sapphire_mainnet"
    ? WEB3AUTH_NETWORK.SAPPHIRE_MAINNET
    : WEB3AUTH_NETWORK.SAPPHIRE_DEVNET;

export const web3AuthOptions: Web3AuthOptions = {
  clientId,
  web3AuthNetwork,
  chains: [
    {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId,
      rpcTarget: isTestnet
        ? "https://data-seed-prebsc-1-s1.binance.org:8545"
        : "https://bsc-dataseed.binance.org",
      displayName: isTestnet ? "BNB Smart Chain Testnet" : "BNB Smart Chain",
      blockExplorerUrl: isTestnet
        ? "https://testnet.bscscan.com"
        : "https://bscscan.com",
      ticker: "BNB",
      tickerName: "BNB",
      logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    },
  ],
  uiConfig: {
    appName: "Padel Sport Club",
    mode: "dark",
    theme: {
      primary: "#01ffe7",
    },
    defaultLanguage: "es",
  },
  walletServicesConfig: {
    whiteLabel: {
      showWidgetButton: false,
    },
  },
};

export const web3AuthContextConfig: Web3AuthContextConfig = {
  web3AuthOptions,
};

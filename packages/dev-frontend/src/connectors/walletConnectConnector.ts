import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const walletConnectConnector = new WalletConnectConnector({
  rpc: {
    42: "https://kovan.infura.io/v3/ad9cef41c9c844a7b54d10be24d416e5",
  },
});

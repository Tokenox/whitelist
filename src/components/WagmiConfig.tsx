import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, http, WagmiProvider } from "wagmi";
import { polygon } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        trustWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: "foodsply",
    projectId: "2450b902b9ef8adca399c05f7f68134c",
  }
);

export const config = createConfig({
  chains: [polygon],
  ssr: true,
  connectors,
  transports: {
    [polygon.id]: http(),
  },
});

const WagmiConfig = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiConfig;

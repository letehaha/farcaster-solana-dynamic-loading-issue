"use client";

// Importing "@farcaster/mini-app-solana" causes side-effect, so it should ONLY be
// imported inside the miniapp context
import { FarcasterSolanaProvider } from "@farcaster/mini-app-solana";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import type { ReactNode } from "react";

export function FarcasterSolanaProviders({
  children,
  endpoint,
}: {
  children: ReactNode;
  endpoint: string;
}) {
  return (
    <FarcasterSolanaProvider endpoint={endpoint}>
      <WalletModalProvider>{children}</WalletModalProvider>
    </FarcasterSolanaProvider>
  );
}

"use client";

import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import dynamic from "next/dynamic";
import { type ReactNode, useMemo } from "react";

import "../../styles/globals.css";

import { useFarcasterMiniappContext } from "@src/hooks/farcaster-miniapp-context";

const FarcasterSolanaProviders = dynamic(() =>
  import("./farcaster-solana-provider").then((m) => m.FarcasterSolanaProviders),
);

export function SolanaProviders({ children }: { children: ReactNode }) {
  const { isFarcasterMiniApp, sdk } = useFarcasterMiniappContext();
  const wallets = useMemo(
    () => [
      // Alawys include adapters even if they support wallet standard
      // Otherwise, they would ocassionally be missing on the wallet selection
      // popup.
      new BackpackWalletAdapter(),
      new SolflareWalletAdapter(),
      new PhantomWalletAdapter(),
    ],
    [],
  );

  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC as string;

  if (isFarcasterMiniApp && sdk) {
    return (
      <FarcasterSolanaProviders endpoint={endpoint}>
        {children}
      </FarcasterSolanaProviders>
    );
  }

  return (
    <ConnectionProvider
      config={{
        commitment: "processed",
        confirmTransactionInitialTimeout: 15 * 1_000,
      }}
      endpoint={endpoint}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

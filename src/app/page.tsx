"use client";

import { useWallet } from "@solana/wallet-adapter-react";

import { Button } from "@src/components/common/button";
import { ConnectWalletBtn } from "@src/components/common/connect-wallet";
import { useFarcasterMiniappContext } from "@src/hooks/farcaster-miniapp-context";

export default function HomePage() {
  const { publicKey, disconnect } = useWallet();
  const { isFarcasterMiniApp } = useFarcasterMiniappContext();

  return (
    <main className="overflow-clip">
      <div className="h-screen max-w-[1440px] p-10">
        {publicKey ? (
          <div>
            {publicKey.toBase58()}

            {!isFarcasterMiniApp && (
              <Button onClick={disconnect}>Disconnect</Button>
            )}
          </div>
        ) : (
          <ConnectWalletBtn>Connect</ConnectWalletBtn>
        )}
      </div>
    </main>
  );
}

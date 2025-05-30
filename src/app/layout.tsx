import { ReactNode } from "react";

import { FarcasterMiniappProvider } from "@src/context/farcaster-miniapp";
import { SolanaProviders } from "@src/context/solana";
import "@src/styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className="bg-[#081328]">
        <FarcasterMiniappProvider>
          <SolanaProviders>{children}</SolanaProviders>
        </FarcasterMiniappProvider>
      </body>
    </html>
  );
}

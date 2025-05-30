import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ComponentPropsWithRef, memo } from "react";

import { useFarcasterMiniappContext } from "@src/hooks/farcaster-miniapp-context";

import { Button } from "./button";

export const ConnectWalletBtn = memo(function ConnectWalletBtn({
  onClick,
  children,
  ...props
}: ComponentPropsWithRef<typeof Button>) {
  const { isFarcasterMiniApp } = useFarcasterMiniappContext();
  const { setVisible } = useWalletModal();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVisible(true);
    if (onClick) onClick(e);
  };

  return (
    <Button variant="primary" onClick={handleClick} {...props}>
      {isFarcasterMiniApp ? <span>Connecting...</span> : children}
    </Button>
  );
});

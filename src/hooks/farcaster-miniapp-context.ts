"use client";

import { useContext } from "react";

import { FarcasterMiniappContext } from "@src/context/farcaster-miniapp";

export const useFarcasterMiniappContext = () => {
  const context = useContext(FarcasterMiniappContext);
  if (!context) {
    throw new Error("Missing FarcasterMiniapp context");
  }
  return context;
};

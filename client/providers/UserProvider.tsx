"use client";
import React from "react";
import { UserContextProvider } from "../context/userContext";
import { ReclamsProvider } from "../context/reclamContext";

interface Props {
  children: React.ReactNode;
}

function UserProvider({ children }: Props) {
  return (
    <UserContextProvider>
      <ReclamsProvider>{children}</ReclamsProvider>
    </UserContextProvider>
  );
}

export default UserProvider;

"use client";

import * as React from "react";
import { signIn, signOut } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      type="button"
      onClick={() => {
        signIn("google", { callbackUrl: "/dashboard" });
      }}
    >
      Login
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => {
        signOut({ callbackUrl: "/" });
      }}
    >
      Sign out
    </button>
  );
}

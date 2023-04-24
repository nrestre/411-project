"use client";

import { signIn, signOut } from "next-auth/react";

import "./Auth.css";

export function LoginButton() {
  return (
    <button
      className="login-button"
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
      className="signout-button"
      type="button"
      onClick={() => {
        signOut({ callbackUrl: "/" });
      }}
    >
      Sign out
    </button>
  );
}

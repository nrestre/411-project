"use client";

import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { ClipLoader } from "react-spinners";

import styles from "./Auth.module.css";

export function LoginButton() {
    const [loading, setLoading] = useState(false);
    return (
        <button
            className={styles.loginButton}
            type="button"
            onClick={() => {
                setLoading(true);
                signIn("google", { callbackUrl: "/dashboard" });
            }}
        >
            {loading ? <ClipLoader speedMultiplier={1.5} /> : "Login"}
        </button>
    );
}

export function SignOutButton() {
    const [loading, setLoading] = useState(false);
    return (
        <button
            className={styles.signoutButton}
            type="button"
            onClick={() => {
                setLoading(true);
                signOut({ callbackUrl: "/" });
            }}
        >
            {loading ? <ClipLoader speedMultiplier={1.5} /> : "Sign out"}
        </button>
    );
}

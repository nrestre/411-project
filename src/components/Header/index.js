"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";
import { SignOutButton } from "@/components/Auth";

const Header = () => {
    const [ratio, setRatio] = useState(16 / 9);
    return (
        <header className={styles.headerContainer}>
            <div className={styles.titleLogo}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={100 / ratio}
                    className={styles.logoImg}
                    onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                        setRatio(naturalWidth / naturalHeight)
                    }
                />
                <Link href="/dashboard">
                    <h1 className={styles.title}>Study Buddy</h1>
                </Link>
            </div>
            <SignOutButton />
        </header>
    );
};

export default Header;

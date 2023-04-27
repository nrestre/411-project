"use client";

import { useState } from "react";
import Image from "next/image";

import "./header.css";
import { SignOutButton } from "@/components/Auth";
import "./header.css";
import Image from 'next/image';

const Header = () => {
  const [ratio, setRatio] = useState(16 / 9);
  return (
    <header className="header">
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100 / ratio}
        className="logo-img"
        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
          setRatio(naturalWidth / naturalHeight)
        }
      />
      <h1 className="title">Study Buddy</h1>
      <SignOutButton />
    </header>
  );
};

export default Header;

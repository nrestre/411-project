import React from 'react';
import { SignOutButton } from "@/components/Auth";
import "./header.css";
import Image from 'next/image';

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "16px",
      }}
    >
      <Image
        src={Image[0]} // replace with your logo image source
        alt="Logo"
        width={40}
        height={40}
        className="logo-img"
      />
      <h1 className="top-header">Study Buddy</h1>
      <SignOutButton />
    </header>
  );
};

export default Header;

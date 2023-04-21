import Image from "next/image";
import { SignOutButton } from "@/components/Auth";

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
        //src={logo} // replace with your logo image source
        alt="Logo"
        width={40}
        height={40}
      />
      <h1>Study Buddy</h1>
      <SignOutButton />
    </header>
  );
};

export default Header;

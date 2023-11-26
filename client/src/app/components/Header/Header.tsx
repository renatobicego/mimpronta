"use client";
import Image from "next/image";
import MenuBtn from "./MenuBtn";
import useScrollPosition from "@/utils/hooks/useScrollPosition";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { y: scrollY } = useScrollPosition();

  const opacity = Math.min(Math.round(scrollY / 1.5), 100);
  const pathname = usePathname();

  const headerStyle = {
    backgroundColor: `rgba(255, 255, 255, ${
      pathname === "/" ? opacity : 100
    }%)`,
    // backgroundColor: `rgba(255, 255, 255, ${opacity}%)`,
  };

  return (
    <header
      style={headerStyle}
      className={`fixed top-0 flex-between left-0 z-50
        w-screen px-[5%] lg:px-[8.335%] h-14 py-[5vh] lg:py-[6.5vh]  font-text
        bg-white`}
    >
      <a
        href={"/#inicio"}
        className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 2xl:w-[14%]"
      >
        <Image
          src={"/logo-02.png"}
          alt="logo"
          className="w-full"
          width={200}
          height={200}
        />
      </a>
      <MenuBtn />
    </header>
  );
};

export default Header;

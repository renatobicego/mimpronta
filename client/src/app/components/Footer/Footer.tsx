import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";

const links = [
  {
    href: "/sobreMimpronta",
    text: "Sobre mimpronta",
  },
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/#servicios",
    text: "Servicios",
  },
  {
    href: "/#contacto",
    text: "Contacto",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-negro text-white py-16 space-section flex flex-col font-text">
      <section className="w-full flex justify-between flex-wrap-reverse gap-6 items-start md:flex-nowrap md:items-end">
        <div className="flex flex-col items-start gap-6 w-full sm:w-3/4 md:w-3/5">
          <nav
            className="flex flex-col gap-6 xsm:gap-3 xsm:justify-between xsm:flex-row sm:gap-12 sm:justify-start w-full
                              text-sm md:text-base"
          >
            <ul className="flex flex-col gap-3">
              {links.map((link, i) => (
                <a key={i} href={link.href}>
                  <li>{link.text}</li>
                </a>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              <PrivacyPolicy />
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/mimpronta/"
              target="_blank"
            >
              <Image
                src={"/icons/linkedin.png"}
                alt="link profile linkedin"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.instagram.com/mimpronta_" target="_blank">
              <Image
                src={"/icons/ig.png"}
                alt="link profile instagram"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>

        <Image
          src={"/logoBlanco.png"}
          alt="logo footer"
          width={150}
          height={150}
        />
      </section>
      <hr className="mt-8" />
      <div>
        <p className="text-xs mt-4">
          Diseño por{" "}
          <a className="text-[#D2DA54]" target="_blank" href="https://lolabahamondemosso.myportfolio.com/">
            Lola Bahamonde
          </a>{" "}
          - Desarrollo por{" "}
          <a className="text-[#D2DA54]" target="_blank" href="https://renatobicego.vercel.app/">
            Renato Bicego
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

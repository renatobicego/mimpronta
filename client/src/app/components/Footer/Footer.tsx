import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/sobreMimpronta",
    text: "Sobre Mimpronta",
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

const legalLinks = [
  {
    href: "",
    text: "Términos y condiciones",
  },
  {
    href: "",
    text: "Política de privacidad",
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full bg-negro text-white py-16 space-section flex flex-col font-text"
    >
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
              {legalLinks.map((link, i) => (
                <li key={i}>{link.text}</li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">

              <a href="https://www.linkedin.com/company/mimpronta/" target="_blank">
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
      <hr />
      <div>

      </div>
    </footer>
  );
};

export default Footer;

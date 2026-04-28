import Image from "next/image";
import React from "react";
import ManageCookiesBtn from "../CookieBanner/ManageCookiesBtn";

const links = [
  {
    href: "/sobremi",
    text: "Sobre Mi",
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
  {
    href: "/consultoria-sostenibilidad-empresas-madrid",
    text: "Consultoría de sostenibilidad para empresas en Madrid",
  },
  {
    href: "/asesoria-innovacion-social-organizaciones-madrid",
    text: "Asesoría de innovación social para organizaciones en Madrid",
  },
];

const Footer = () => {
  return (
    <footer className="z-10 relative flex flex-col bg-negro py-16 w-full font-text text-white space-section">
      <section className="flex flex-wrap-reverse md:flex-nowrap justify-between items-start md:items-end gap-6 w-full">
        <div className="flex flex-col items-start gap-6 w-full sm:w-3/4 md:w-3/5">
          <nav className="flex xsm:flex-row flex-col xsm:justify-between sm:justify-start gap-6 xsm:gap-3 sm:gap-12 w-full text-sm md:text-base">
            <ul className="flex flex-col gap-3">
              {links.map((link, i) => (
                <a key={i} href={link.href}>
                  <li>{link.text}</li>
                </a>
              ))}
              {/* <PrivacyPolicy /> */}
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
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
        <a
          href="/aviso-legal"
          className="text-gray-400 hover:text-white text-xs transition-colors"
        >
          Aviso Legal
        </a>
        <a
          href="/politica-privacidad"
          className="text-gray-400 hover:text-white text-xs transition-colors"
        >
          Política de Privacidad
        </a>
        <a
          href="/politica-cookies"
          className="text-gray-400 hover:text-white text-xs transition-colors"
        >
          Política de Cookies
        </a>
        <ManageCookiesBtn />
      </div>
      <hr className="mt-8" />

      <div>
        <p className="mt-2 text-xs">
          Diseño por{" "}
          <a
            className="text-[#D2DA54]"
            target="_blank"
            href="https://lolabahamondemosso.myportfolio.com/"
          >
            Lola Bahamonde
          </a>{" "}
          - Desarrollo por{" "}
          <a
            className="text-[#D2DA54]"
            target="_blank"
            href="https://renatobicego.vercel.app/"
          >
            Renato Bicego
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

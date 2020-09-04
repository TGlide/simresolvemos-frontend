import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    name: "Enviar Tarefa",
    to: "/tasks",
  },
  {
    name: "Trabalhe conosco",
    to: "/about",
  },
  {
    name: "Sobre nós",
    to: "/about",
  },
  {
    name: "Recursos",
    to: "/about",
  },
  {
    name: "Login",
    to: "/about",
  },
];

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const router = useRouter();

  const extraLinksClass = () => {
    return navbarOpen ? "flex fixed top-0 left-0 bg-white" : "hidden lg:flex";
  };

  const logo = (): string => {
    return router.pathname === "/"
      ? "/images/logo_inverted.png"
      : "/images/logo.png";
  };

  // Handlers
  const handleNavbarOpen = () => {
    setNavbarOpen(true);
  };

  const handleNavbarClose = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div className="relative flex lg:flex-row items-center px-4 lg:px-0 py-4 z-10">
        <Link href="/">
          <a>
            <img src={logo()} alt="SimResolvemos" className="h-12" />
          </a>
        </Link>

        <button className="lg:hidden ml-auto mt-3" onClick={handleNavbarOpen}>
          <img src="/vectors/menu.svg" alt="Menu" />
        </button>

        <div
          className={`${extraLinksClass()} lg:relative flex-row flex-no-wrap w-full lg:w-auto h-screen lg:h-auto pt-6 lg:pt-3 px-6 lg:px-0 ml-auto`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:ml-auto font-body font-bold text-study-black">
            {links.map((link, index) => {
              return (
                <Link href={link.to} key={index}>
                  <a className="border-b-2 border-sea-blue hover:border-opacity-50 mr-8">
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </div>
          <button
            className="lg:hidden ml-auto w-8 h-8"
            onClick={handleNavbarClose}
          >
            <img src="/vectors/times.svg" alt="Close" />
          </button>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useStoreState, useStoreActions } from "../store";

const links = [
  {
    name: "Enviar Tarefa",
    to: "/tasks",
  },
  {
    name: "Trabalhe conosco",
    to: "/hiring",
  },
  {
    name: "Sobre nós",
    to: "/about",
  },
  {
    name: "Recursos",
    to: "/blog",
  },
];

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const router = useRouter();
  const logged = useStoreState((state) => state.user.logged);
  const dispatchLogout = useStoreActions((actions) => actions.user.logout);

  const extraLinksClass = () => {
    return navbarOpen ? "flex fixed top-0 left-0 bg-white" : "hidden lg:flex";
  };

  const logo = (): string => {
    return router.pathname === "/"
      ? "/images/logo_inverted.png"
      : "/images/logo.png";
  };

  const menuColor = (): string => {
    return router.pathname === "/" ? "white" : "#222f3e";
  };

  // Handlers
  const handleNavbarOpen = () => {
    setNavbarOpen(true);
  };

  const handleNavbarClose = () => {
    setNavbarOpen(false);
  };

  const handleLogout = () => {
    dispatchLogout();
  };

  // const handleLogin = () => {
  //   dispatchLogin({
  //     type: login ? LoginActions.LOGOUT : LoginActions.LOGIN,
  //   });
  // };

  return (
    <>
      <div className="relative flex lg:flex-row items-center px-4 lg:px-0 py-4 z-10">
        <Link href="/">
          <a>
            <img src={logo()} alt="SimResolvemos" className="h-12" />
          </a>
        </Link>

        <button className="lg:hidden ml-auto mt-3" onClick={handleNavbarOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={menuColor()}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
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

            {logged ? (
              <button
                className="font-bold border-b-2 border-sea-blue hover:border-opacity-50"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link href="/auth/login">
                <a className="border-b-2 border-sea-blue hover:border-opacity-50">
                  Login
                </a>
              </Link>
            )}
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

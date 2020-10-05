import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useStoreState, useStoreActions } from "../store";
import { toast } from "react-toastify";

//CSS
import styles from "../styles/Navbar.module.css";

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
  const [openMenu, setOpenMenu] = useState(false);
  const [_document, _setDocument] = useState(null);
  const menuResponsiveEdit = useRef();

  if (process.browser && _document !== null) {
    console.log(document);
    _setDocument(document);
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const fixedMenu = document.getElementById("fixedMenu");
      const fixedMenuLogo = document.getElementById("fixedMenuLogo");
      const stickyMenu = document.getElementById("stickyMenu");
      // document.getElementById("bigginingLogo").style.display = "none"
      if (window.scrollY > 0) {
        fixedMenu.style.transition = "0.2s";
        fixedMenu.style.opacity = "0";
        stickyMenu.style.transition = "0.5s";
        stickyMenu.style.visibility = "visible";
        stickyMenu.style.backgroundColor = "white";
      } else {
        fixedMenu.style.transition = "2s";
        fixedMenu.style.opacity = "1";
        stickyMenu.style.transition = "0s";
        stickyMenu.style.visibility = "hidden";
        fixedMenuLogo.style.visibility = "visible";
        stickyMenu.style.backgroundColor = "transparent";
      }

      // header.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

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
    setNavbarOpen(false);
    toast.success("Logout feito com sucesso!");
    router.push("/");
  };

  // const handleLogin = () => {
  //   dispatchLogin({
  //     type: login ? LoginActions.LOGOUT : LoginActions.LOGIN,
  //   });
  // };

  const visibilityMenuResponsive = () => {
    console.log(menuResponsiveEdit.current);

    if (menuResponsiveEdit.current === null) return;
    const menuOption = menuResponsiveEdit.current || null;

    if (openMenu && menuOption !== null) {
      setOpenMenu(false);
      menuOption.style.opacity = 0;
      menuOption.style.transition = "0.3s ease-in";
      setTimeout(() => {
        menuOption.style.display = "none";
      }, 300);
    } else if (menuOption !== null) {
      setOpenMenu(true);
      menuOption.style.display = "flex";
      menuOption.style.opacity = 0;
      setTimeout(() => {
        menuOption.style.opacity = 1;
        menuOption.style.transition = "0.3s ease-in";
      }, 10);
    } else {
      console.log("Error in navbar");
    }
  };

  const redirectLogin = () => {
    return (window.location.href = "/auth/login");
  };

  return (
    <>
      <header className={styles.menuMainWrapper}>
        <div id="fixedMenu" className={styles.menuWrapperLogoWhite}>
          <a href="/" className={`${styles.headerLogoWrapperWhite}`}>
            <img
              id="fixedMenuLogo"
              alt="SimResolvemos"
              className={`${styles.headerLogoWhite} h-12`}
            />
          </a>
        </div>
        <div id="stickyMenu" className={styles.menuWrapper}>
          <div className={styles.buttonMenu}>
            <button onClick={() => visibilityMenuResponsive()}>
              <img src="/vectors/hamburger-menu.svg" alt="" />
            </button>
          </div>
          <a href="/" className={`${styles.headerLogoWrapper}`}>
            <img alt="SimResolvemos" className={`${styles.headerLogo} h-12`} />
          </a>
          <div
            id="menuResponsive"
            ref={menuResponsiveEdit}
            className={styles.menuResponsive}
            style={{ opacity: 0, display: "none" }}
          >
            {openMenu ? (
              <>
                <ul className={styles.optionsHeaderMenu2}>
                  <li>
                    <a
                      className="border-b-2 border-blue-300 hover:border-blue-600 mr-8 mb-2 lg:mt-0"
                      href="/tasks"
                    >
                      Enviar Tarefa
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-b-2 border-blue-300 hover:border-blue-700 mr-8 mb-2 lg:mt-0"
                      href="/hiring"
                    >
                      Trabalhe conosco
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-b-2 border-blue-300 hover:border-blue-700 mr-8 mb-2 lg:mt-0"
                      href="/about"
                    >
                      Sobre nós
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-b-2 border-blue-300 hover:border-blue-700 mr-8 mb-2 lg:mt-0"
                      href="/blog"
                    >
                      Recursos
                    </a>
                  </li>
                </ul>
                <ul className={styles.loginHeaderMenu2}>
                  <li>
                    <Link href="/auth/login">Login</Link>
                  </li>
                  <p style={{ textAlign: "center", marginLeft: "10px" }}>|</p>
                  <li>
                    <Link href="/auth/register">Cadastro</Link>
                  </li>
                </ul>
              </>
            ) : null}
          </div>

          <ul className={styles.optionsHeaderMenu}>
            <li>
              <a
                className="border-b-2 border-blue-300 hover:border-blue-600 mr-8 mb-2 lg:mt-0"
                href="/tasks"
              >
                Enviar Tarefa
              </a>
            </li>
            <li>
              <a
                className="border-b-2 border-blue-300 hover:border-blue-700 mr-8 mb-2 lg:mt-0"
                href="/hiring"
              >
                Trabalhe conosco
              </a>
            </li>
            <li>
              <a
                className="border-b-2 border-blue-300 hover:border-blue-700 mr-8 mb-2 lg:mt-0"
                href="/about"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                className="border-b-2 border-blue-300 hover:border-blue-700 mr-8 mb-2 lg:mt-0"
                href="/blog"
              >
                Recursos
              </a>
            </li>
          </ul>
          <ul className={styles.loginHeaderMenu}>
            <li>
              <button
                onClick={() => redirectLogin()}
                className={styles.buttonLogin}
              >
                <p style={{ padding: "10px", color: "white" }}>Login</p>
              </button>
            </li>
            <p style={{ textAlign: "center", marginLeft: "10px" }}>|</p>
            <li>
              <a href="/auth/register">Cadastro</a>
            </li>
          </ul>
        </div>
      </header>

      {/* <div className="relative flex lg:flex-row items-center px-4 lg:px-0 py-4 z-10">
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
                  <a
                    className="border-b-2 border-sea-blue hover:border-opacity-50 mr-8 mb-2 lg:mt-0"
                    onClick={handleNavbarClose}
                  >
                    {link.name}
                  </a>
                </Link>
              );
            })}

            {logged ? (
              <button
                className="font-bold border-b-2 border-sea-blue hover:border-opacity-50 mb-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link href="/auth/login">
                <a
                  className="border-b-2 border-sea-blue hover:border-opacity-50 mb-2"
                  onClick={handleNavbarClose}
                >
                  Login
                </a>
              </Link>
            )}
          </div>
          <button
            className="lg:hidden ml-auto w-8 h-8"
            onClick={handleNavbarClose}
            aria-label="Fechar"
          >
            <img src="/vectors/times.svg" alt="Close" />
          </button>
        </div>
      </div> */}
    </>
  );
}

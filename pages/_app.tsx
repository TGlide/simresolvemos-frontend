import { StoreProvider } from "easy-peasy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { NavbarOld } from "../components/NavbarOld";
import store from "../store";
import "../styles/index.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import MainPixel from "../components/pixel/MainPixel";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);

  const [locationPath, setLocationPath] = useState("");

  useEffect(() => {
    setLocationPath(document.location.pathname);
  }, []);

  return (
    <StoreProvider store={store}>
      <Head>
        <title>SimResolvemos</title>
        <meta
          name="description"
          content="A SimResolvemos busca auxiliar os alunos em seus estudos por
      meio de resoluções e vídeos explicativos,trazendo praticidade à todos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="SimResolvemos" />
        <meta
          property="og:description"
          content="Auxiliando seus estudos,
      trazendo praticidade à todos."
        />
        <meta property="og:image" content="images/logo_icon.png " />
        <link rel="shortcut icon" href="images/favicon.ico " />
        <MainPixel />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* <div className="relative lg:container lg:px-12 flex-grow"> */}
        {locationPath === "/" ? <Navbar /> : <NavbarOld />}

        {/* <div className="h-full"> */}
        <Component {...pageProps} style={{ position: "relative" }} />
        {/* </div>
        </div> */}
        <Footer />
      </div>
      <ToastContainer />
    </StoreProvider>
  );
}

export default MyApp;

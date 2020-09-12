import { StoreProvider } from "easy-peasy";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import store from "../store";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <div className="min-h-screen flex flex-col">
        <div className="relative lg:container lg:px-12 flex-grow">
          <Navbar />
          <div className="h-full">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </StoreProvider>
  );
}

export default MyApp;

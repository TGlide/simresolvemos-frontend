import "../styles/index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LoginProvider } from "../components/context/Login";

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <div className="min-h-screen flex flex-col">
        <div className="relative lg:container lg:px-12 flex-grow">
          <Navbar />
          <div className="h-full">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
    </LoginProvider>
  );
}

export default MyApp;

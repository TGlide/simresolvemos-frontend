import "../styles/index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="relative lg:container lg:px-12">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;

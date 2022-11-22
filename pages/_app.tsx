import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
const App = ({ Component, pageProps }: AppProps) => {
  // server side rendering
  const [isSSR, setSSR] = useState(true);
  // defining  whent it isn't rendering
  useEffect(() => {
    setSSR(false);
  }, []);

  if (isSSR) return null; // if we are server side rendering we don't wanna show our component
  return (
    <div>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] flex-1 videos">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default App;

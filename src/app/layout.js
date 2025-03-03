"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import "./mediaquery.css";
import "./fonts.css";
import "./vb-font.css";
import HeadComponent from "./components/HeadComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingVideo from "./components/LoadingVideo";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <html lang="en">
      <HeadComponent />
      <body>
        {/* DECOMMENT IF YOU WANT TO PLAY A VIDEO BEFORE THE WEBSITE RENDER */}
        {/* {loading ? (
          <LoadingVideo onLoaded={handleLoaded} />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )} */}
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}

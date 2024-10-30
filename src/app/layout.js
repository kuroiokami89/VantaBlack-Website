"use client";

import { useState, useEffect } from "react";
import "./globals.css"; // Ensure this contains your base styles
import "./mediaquery.css"; // Add any responsive styles
import "./fonts.css"; // Include your font styles
import HeadComponent from "./components/HeadComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingVideo from "./components/LoadingVideo";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust this value as needed

    return () => clearTimeout(timeout);
  }, []);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <html lang="en">
      <HeadComponent />
      <body>
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

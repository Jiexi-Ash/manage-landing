import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Manage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;

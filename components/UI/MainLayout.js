import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Manage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="relative max-w-8xl container mx-auto overflow-hidden">
        <div className="absolute top-[-160px] right-[-200px] md:hidden">
          <div className="relative h-[500px] w-[500px]">
            <Image src="/images/bg-tablet-pattern.svg" alt="" layout="fill" />
          </div>
        </div>
        <div className="hidden absolute md:block md:top-[-160px] md:right-[-240px] lg:hidden ">
          <div className="relative h-[600px] w-[600px]">
            <Image src="/images/bg-tablet-pattern.svg" alt="" layout="fill" />
          </div>
        </div>
        <div className="hidden absolute lg:block lg:top-[-160px] lg:right-[-120px] ">
          <div className="relative h-[800px] w-[800px]">
            <Image src="/images/bg-tablet-pattern.svg" alt="" layout="fill" />
          </div>
        </div>
        {children}
      </main>
    </>
  );
}

export default MainLayout;

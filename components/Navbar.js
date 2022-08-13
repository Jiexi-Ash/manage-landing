import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="container max-w-8xl mx-auto pt-11 px-6">
      <nav className="z-30 flex justify-between items-center">
        <div className="relative w-28 h-5">
          <Image src="/images/logo.svg" alt="Manage" layout="fill" />
        </div>
        {isOpen ? (
          <div className="relative w-5 h-5 md:hidden z-30" onClick={handleNav}>
            <Image src="/images/icon-close.svg" alt="Menu" layout="fill" />
          </div>
        ) : (
          <div className="relative w-6 h-4 md:hidden z-30" onClick={handleNav}>
            <Image src="/images/icon-hamburger.svg" alt="Menu" layout="fill" />
          </div>
        )}

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute z-10 right-0 left-0 top-0 bottom-0 bg-gradient-to-b from-transparent to-black/50`}
        >
          <div className="max-w-lg bg-white my-28 mx-6 flex justify-center items-center py-10 rounded-lg">
            <ul className="flex flex-col space-y-4 items-center">
              <li>
                <Link href="/">
                  <a className="text-[16px] font-bold tracking-[-0.29px]">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-[16px] font-bold tracking-[-0.29px]">
                    Product
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-[16px] font-bold tracking-[-0.29px]">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-[16px] font-bold tracking-[-0.29px]">
                    Careers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-[16px] font-bold tracking-[-0.29px]">
                    Community
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <Link href="/">
              <a className="link">Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="link">Product</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="link">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="link">Careers</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="link">Community</a>
            </Link>
          </li>
        </ul>

        <button className="hidden md:block py-3 px-8 bg-primaryRed rounded-full shadow-sm text-sm text-white hover:bg-[#F98F75]">
          Get Started
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

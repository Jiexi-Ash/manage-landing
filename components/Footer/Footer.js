import { useState } from "react";
import Link from "next/link";
import FooterIcons from "./FooterIcons";

function Footer() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please insert a valid email");
    } else {
      setError(null);
    }
  };
  return (
    <footer className="bg-[#1D1E25] container max-w-8xl mx-auto">
      <div className="flex flex-col justify-center   py-14 px-6 md:flex-row-reverse md:justify-between xl:px-[186px]">
        <div className="max-w-[327px] mx-auto md:max-w-8xl md:mx-0">
          <form className="flex space-x-2 items-center" onSubmit={handleClick}>
            <div>
              <input
                type="text"
                placeholder="Updates in your inbox…"
                className={`${
                  error ? "bg-darkGrayishBlue text-primaryRed" : "bg-white"
                } text-sm pl-6  py-3 rounded-full w-full flex-1 border-none focus:ring-0 `}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="py-3 px-8 bg-primaryRed rounded-full shadow-sm text-sm text-white hover:bg-[#F98F75] font-be-vietnam-pro">
              Go
            </button>
          </form>
          {error && (
            <p className="text-primaryRed italic text-[10px] pt-1 pl-4">
              {error}
            </p>
          )}
          <p className="text-right text-sm text-darkGrayishBlue pt-14 hidden md:block">
            Copyright 2020. All Rights Reserved
          </p>
        </div>

        <div className="flex justify-around items-start w-full md:max-w-[180px] lg:max-w-[300px] xl:max-w-sm  pt-14 md:justify-between md:pt-0">
          <div className="flex flex-col">
            <div className="flex flex-col space-y-2">
              <Link href="/">
                <a className="link text-white hover:text-primaryRed">Home</a>
              </Link>
              <Link href="/">
                <a className="link text-white hover:text-primaryRed">Pricing</a>
              </Link>
              <Link href="/">
                <a className="link text-white hover:text-primaryRed">Product</a>
              </Link>
              <Link href="/">
                <a className="link text-white hover:text-primaryRed">
                  About Us
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col space-y-2">
              <Link href="/">
                <a className="link text-white hover:text-primaryRed">Careers</a>
              </Link>
              <Link href="/">
                <a className="link text-white hover:text-primaryRed">
                  Community
                </a>
              </Link>
              <Link href="/">
                <a className="link text-white hover:text-primaryRed">
                  Privacy Policy
                </a>
              </Link>
            </div>
          </div>
        </div>

        <FooterIcons />

        <p className="text-center text-sm text-darkGrayishBlue pt-14 md:hidden">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

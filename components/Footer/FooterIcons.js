import React from "react";
import Image from "next/image";
import FooterLogo from "./FooterLogo";
import FooterSocials from "./FooterSocials";
<FooterLogo />;

function FooterIcons() {
  return (
    <div className="flex flex-col pt-10 px-4 items-center md:items-start md:pt-0 md:justify-between md:flex-col-reverse">
      <FooterSocials />
      <FooterLogo />
    </div>
  );
}

export default FooterIcons;

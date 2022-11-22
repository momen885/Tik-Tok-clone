import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../utils/tiktik-logo.png";
const index = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer "
            src={Logo}
            alt="tiktik"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
};

export default index;

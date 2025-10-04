"use client";

import { HorizontalLogoImg } from "@/assets";
import Image from "next/image";
import HeaderOption from "./HeaderOption";
import { useState } from "react";
import colors from "@/global/colors";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("Home");

  const changeOption = (option: string) => {
    if (option === selectedOption) {
      return alert("Scroll" + option);
    }

    return setSelectedOption(option);
  };

  return (
    <div
      className="w-full px-9 py-8 justify-between flex items-center"
      style={{ backgroundColor: colors.primary[100] }}
    >
      <Image
        src={HorizontalLogoImg}
        alt="HorizontalLogo"
        style={{ width: "10%" }}
      />
      <div className="flex gap-5">
        <HeaderOption
          label="Home"
          onPress={() => changeOption("Home")}
          selected={selectedOption === "Home"}
        />
        <HeaderOption
          label="Catálogo de Brinquedos"
          onPress={() => changeOption("ToysList")}
          selected={selectedOption === "ToysList"}
        />
        <HeaderOption
          label="Administração"
          onPress={() => changeOption("Admin")}
          selected={selectedOption === "Admin"}
        />
        <HeaderOption
          label="Sobre nós"
          onPress={() => changeOption("AboutUs")}
          selected={selectedOption === "AboutUs"}
        />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import LoginMenu from "./Navigation/LoginMenu";

function Header() {
  return (
    <header className="borber-b p-2 flex justify-between items-stretch text-white bg-black h-10">
      <div className="flex flex-no-wrap font-bold">
        <img className="h-8 w-9 mr-5" src="logoicon.png" alt="Logo"></img>
        RESERVE TO DINE
      </div>
      <div className="flex flex-no-wrap">
        <LoginMenu />
      </div>
      <div className="flex ml-10 p-10"></div>
    </header>
  );
}

export default Header;

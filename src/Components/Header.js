import React from "react";
import LoginMenu from "./Navigation/LoginMenu";
//added links in header to about page and table of reservations
function Header() {
  return (
    <header className="borber-b p-2 flex justify-between items-stretch text-white bg-black h-10">
      <div className="flex flex-no-wrap text-left font-bold">
        <img className="h-8 w-9 mr-5" src="logoicon.png" alt="Logo"></img>
        <a href="/">RESERVE TO DINE</a>
      </div>
      <div className="flex text-right flex-no-wrap">
      <a className="mr-4" href="/reservation-table">Reservations Table</a>
        <a className="mr-4" href="/about">About Page</a>
        <LoginMenu />
        
      </div>
    </header>
  );
}

export default Header;

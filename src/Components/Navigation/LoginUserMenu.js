import React from "react";
import LoginRestaurantForm from "./LoginRestaurantForm";
import LoginUserForm from "./LoginUserForm";

// This is the element for displaying the user menu itself.
function LoginUserMenu() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <ul
        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
        role="tablist"
      >
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 1
                ? "text-white bg-teal-600"
                : "text-teal-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            User Login
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 2
                ? "text-white bg-teal-600"
                : "text-teal-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            Restaurant Login
          </a>
        </li>
      </ul>

      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
        <LoginUserForm />
      </div>
      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
        <LoginRestaurantForm />
      </div>
    </div>
  );
}

export default LoginUserMenu;

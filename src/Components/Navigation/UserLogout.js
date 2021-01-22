import React, { useContext } from "react";
import { AppContext } from "../AppContext";

// Logs user out of app by setting value to empty
export default function UserLogout() {
  const { loginUser, setLoginUser } = useContext(AppContext);
  let userName;
  switch (loginUser.Type) {
    case "User":
      userName = loginUser.FirstName + " " + loginUser.LastName;
      break;
    case "Restaurant":
      userName = loginUser.RestaurantName;
      break;
    default:
      setLoginUser(null);
  }
  return (
    <div className="flex flex-no-wrap">
      <p className="mr-2">Welcome {userName}</p>
      <p
        className="no-underline hover:underline text-indigo-700 cursor-pointer mr-10"
        onClick={() => setLoginUser(null)}
      >
        Logout
      </p>
    </div>
  );
}

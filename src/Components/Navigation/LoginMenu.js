import React, { useState, useRef, useEffect, useMemo, useContext } from "react";
import { useTransition, animated } from "react-spring";
import LoginUserMenu from "./LoginUserMenu";
import { AppContext, CloseLoginMenu } from "../AppContext";
import UserLogout from "./UserLogout";

// Handles the login menu that appears upon clicking the Login button
function LoginMenu() {
  const { loginUser } = useContext(AppContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const wrapperRef = useRef(null);
  const closeMenuValue = useMemo(() => ({ showUserMenu, setShowUserMenu }), [
    showUserMenu,
    setShowUserMenu,
  ]);

  // Handle clicking outside menu to close it.
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  // Grabs clicking outside the box event
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowUserMenu(false);
    }
  };

  // Creating transition effects for user and restaurant login
  const userMenuTransition = useTransition(showUserMenu, null, {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
  });

  return (
    <div ref={wrapperRef}>
      {loginUser ? (
        <UserLogout />
      ) : (
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 
                      text-white py-0 px-2 rounded mr-10"
          type="button"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          LOGIN
        </button>
      )}

      {userMenuTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-white top-0 right-0 z-50 shadow p-1 "
            >
              <CloseLoginMenu.Provider value={closeMenuValue}>
                <LoginUserMenu />
              </CloseLoginMenu.Provider>
            </animated.div>
          )
      )}
    </div>
  );
}

export default LoginMenu;

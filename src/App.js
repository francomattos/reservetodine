import React, { useState, useMemo } from "react";
import { AppContext } from "./Components/AppContext";
import Header from "./Components/Header";
import Main from "./Pages/Main";

// Hali - added the white overlay transparent background so it would appear on all pages consistantly
function App() {
  // Hooks to track page state for logged in user
  const [loginUser, setLoginUser] = useState(null);
  const loginUserValue = useMemo(() => ({ loginUser, setLoginUser }), [
    loginUser,
    setLoginUser,
  ]);

  return (
    <div
      className="bg-scroll bg-no-repeat bg-cover bg-center w-screen h-screen"
      style={{
        backgroundImage: "url('bgimg.jpg')",
      }}
    >
      <div
        className="bg-scroll bg-no-repeat bg-cover bg-center w-screen h-screen"
        style={{
          backgroundImage: "url('bgpage.png')",
        }}
      >
        {/* Sets header and main based on state of logged in user */}
        <AppContext.Provider value={loginUserValue}>
          <Header />
          <Main />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;

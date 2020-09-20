import React, { useState, useMemo } from "react";
import { AppContext } from "./Components/AppContext";
import Header from "./Components/Header";
import Main from "./Pages/Main";

function App() {
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
      <AppContext.Provider value={loginUserValue}>
        <Header />
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;

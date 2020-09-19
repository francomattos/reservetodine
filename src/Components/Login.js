export const Login = async (loginParam) => {
  return {
    Type: loginParam.type,
    FirstName: "Franco",
    LastName: "Mattos",
    RestaurantName: "",
  };
};

/*
------ Showing how to stringify and use the login ---

<pre>{JSON.stringify(loginUser, null, 2)}</pre>
{loginUser ? (
    <button className="mr-6" onClick={() => setLoginUser(null)}>
      Logout
    </button>
  ) : (
    <button
      className="mr-6"
      onClick={async () => {
        const loginUser = await Login(loginParam);
        setLoginUser(loginUser);
      }}
    >
      Login
    </button>
  )}
  */

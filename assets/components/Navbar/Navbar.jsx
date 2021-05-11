import React from "react";

const Navbar = () => {
  const userIsLoggedIn = false;
  return (
    <div>
      <div>Logo</div>
      {userIsLoggedIn && <input />}
      <button>{userIsLoggedIn ? "Login" : "Logout"}</button>
    </div>
  );
};

export default Navbar;

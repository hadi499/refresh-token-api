import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  let { user } = useContext(AuthContext);
  const kata = "kamu sedang logging..";
  return (
    <div className="flex justify-center h-screen mt-12">
      <h1>Hello {user?.username}</h1>
    </div>
  );
};

export default HomePage;

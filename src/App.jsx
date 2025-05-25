import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Login from "./assets/Components/Login";
import SignUp from "./assets/Components/SignUp";
import User from "./assets/Components/User";

const App = () => {

  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState([]);
  

  return (
    <div className="bg-emerald-800 flex h-full w-screen justify-between">
      {toggle ? (
        <SignUp toggle={toggle}  setToggle={setToggle} user={user} setUser={setUser} />
      ) : (
        <Login toggle={toggle}  setToggle={setToggle} user={user} setUser={setUser} />
      )}

    <User  user={user} setUser={setUser}/>
    <ToastContainer position="top-center"/>
    </div>

  );
};

export default App;

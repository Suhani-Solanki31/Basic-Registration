import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import {nanoid }from 'nanoid';



const SignUp = (props) => {
  //Catch the user and setUser by props from App

  const { toggle, setToggle ,user,setUser} = props;

  const { register, 
    handleSubmit,
    reset,
    formState: { errors }
     } = useForm();

     const SubmitHandler = (data) => {

        let CopyUser = [...user]
        data.id = nanoid();
        CopyUser.push(data);
        setUser(CopyUser);

        reset();
        toast.success("Registration is Done ");   // toastify is used here
     }


  return (
    <>
      <div className="h-screen w-[60%] py-10 px-20 pb-2 ">
        <form 
        onSubmit={handleSubmit(SubmitHandler)}
        className=" px-10 py-8  bg-white text-black rounded shadow-lg">

          <input
            type="text"
            placeholder="Enter username"
            className="block p-2 w-80 outline-0 text-black text-xl mb-4 hover:border-b"
            {...register("Username",{required:true})}
          />
            {errors.Username && <p className="text-red-800">Username is required</p>}


          <input
            type="email"
            placeholder="Enter email"
            className="block p-2 w-80 outline-0 text-black text-xl mb-4  hover:border-b "
            {...register("Email",{required:true})}
          />
        {errors.Email && <p className="text-red-800">Email is required</p>}


          <input
            type="password"
            placeholder="Enter password"
            className="block p-2 w-80 outline-0 text-black text-xl mb-4 hover:border-b"
            {...register("Password",{required:true})}
          />
        {errors.Password && <p className="text-red-800">Password is required</p>}


          <button className="  rounded font-bold bg-emerald-600 px-2 py-1 active:scale-95">
            Register
          </button>
          <p className="mt-3 ">
            Already have an Account !
            <span
              className="text-blue-950 font-bold   
              cursor-pointer active:scale-95"
              type="button"
              onClick={() => setToggle(!toggle)}
            >
              login
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;

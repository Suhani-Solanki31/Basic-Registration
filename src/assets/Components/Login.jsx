import React from 'react'

const Login = (props) => {

    const{toggle,setToggle} = props;

  return (
    <>
    
     <div className="h-screen w-full py-10 px-20 pb-2 ">
        <form className=" px-10 py-8 w-[60%] bg-white text-black rounded shadow-lg">
          <input
            type="text"
            placeholder="Enter username"
            className="block p-2 w-80 outline-0 text-black text-xl mb-4 hover:border-b transition duration-"
            />
          <input
            type="password"
            placeholder="Enter password"
            className="block p-2 w-80 outline-0 text-black text-xl mb-4 hover:border-b"
            />
          <button className="  rounded font-bold bg-emerald-600 px-2 py-1 active:scale-95">
            Sign in
          </button>
          <p className="mt-3 ">
            Don't have an Account! 
            <span
              className="text-blue-950 font-bold   
              cursor-pointer active:scale-95 ml-1"
              type="button"
              onClick={()=>setToggle(!toggle)}
              >
              Register here
            </span>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login

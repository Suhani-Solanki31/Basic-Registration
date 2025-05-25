import React from "react";
import { ToastContainer, toast } from 'react-toastify';


const User = (props) => {
    
    const{user,setUser} = props;
    // console.log(props)
    
const DeleteHandler = (id)=>{
  const FilterUser = user.filter((val)=> val.id != id );
  setUser(FilterUser);
  toast.warning("User is deleted");

}


   const userRender =user.map((elem)=>{
    return(
        <div className="rounded p-2 text-white " key={elem.id}>
      
        <li className="flex items-center  justify-between rounded bg-gray-700 font-thin " >
          <p className="p-2">
            <span className="block text-3xl">{elem.Username}</span>
            <small className="text-lg">{elem.Email}</small>
          </p>
          <button className="hover:cursor-pointer active:scale-95 font-normal p-2  text-red-500 "
          onClick={()=>DeleteHandler(elem.id)}>
            Delete
          </button>
        </li>
      
    </div>
    )
   })

        return(
            <ul className="w-[30%] mt-10">
              <h1 className="text-3xl mb-2 text-center  font-Bold">
                  List Of Registered Users
              </h1>
              {user.length > 0 ? userRender: <h1 className="text-4xl m-10 text-red-500">Data not Found!</h1>}
  </ul>
)
};

export default User;

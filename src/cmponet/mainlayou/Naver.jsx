
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



function Naver() {
  

   const { user, logOut } = useContext(AuthContext);
   
   const handleLogOut = () => {
      logOut()
         .then(() => {
            alert("You Logged out successfully");
         }).catch((error) => {
         console.log(error);
         
      })
   }

   
   return (
      <>
         <div className="container mx-auto py-5">
            <div className="flex items-center justify-between p-5 ">
               <div className="">{user?.email} </div>
               <div className="space-x-8">
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to={"/"}> About</NavLink>
                  <NavLink to={"/"}> Career</NavLink>
               </div>

               <div className="flex items-center gap-4">
                  <img
                     src={user?.photoURL ? user.photoURL : "/image/user.png"}
                     alt="User Profile"
                     className="w-10 h-10 rounded-full"
                  />


                  {
                     user
                        ? <button onClick={handleLogOut} className="btn px-6 bg-red-600 text-white">Logout</button>
                        : <Link to="/auth/login" className="btn px-6 bg-red-600 text-white">Login</Link>
                  }

                  
               </div>

            </div>
         </div>
         
      </>
   );
}

export default Naver;
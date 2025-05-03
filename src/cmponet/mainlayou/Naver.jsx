import { Link, NavLink } from "react-router-dom";


function Naver() {
   return (
      <>
         <div className="container mx-auto py-5">
            <div className="flex items-center justify-between p-5 ">
               <div className=""></div>
               <div className="space-x-8">
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to={"/"}> About</NavLink>
                  <NavLink to={"/"}> Career</NavLink>
               </div>

               <div className="flex items-center gap-4">
                  <img src="/image/user.png" alt="" />
                  <Link to={"/auth/login"} className="btn px-6 bg-red-600 text-white">Login</Link>
               </div>

            </div>
         </div>
         
      </>
   );
}

export default Naver;
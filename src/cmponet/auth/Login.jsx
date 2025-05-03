import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
   
   const [shwo, setShwo] = useState(false);

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
            <form className="space-y-4">
            
               
               <div>
                  <label className="block font-medium mb-1">Email</label>
                  <input
                     type="email"
                     placeholder="Enter your email address"
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
               </div>
               <div>
                  <label className="block font-medium mb-1">Password</label>
                  <input
                     type="password"
                     placeholder="Enter your password"
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
               </div>

               <p className='text-[10px] font-bold'>Dont’t Have An Account ? <Link className='text-red-500' to={"/auth/register"}>Register</Link></p>
               
               <button
                  type="submit"
                  
                  className='btn w-full '
               >
                  Login
               </button>
            </form>
         </div>
      </div>
   );
}

export default Login;
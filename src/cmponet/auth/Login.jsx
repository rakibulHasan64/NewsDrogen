import React, {  useContext, useState } from 'react';
import { BiSolidShow } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

function Login() {
   const [show, setShow] = useState(false);
   const { siginIn } = useContext(AuthContext);
   const location = useLocation();

   const navget = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();


      const formElements = e.target.elements;
      const email = formElements.email.value;
      const password = formElements.password.value;



      siginIn(email, password)
         .then(result => {
            const user = result.user;
            
            e.target.reset();

            navget(`${location.state ? location.state :"/"}`)


         }).catch((error) => {
            const errorcode = error.code;
            const errorMassage = error.message;

            alert(errorMassage)
         });
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Login to your account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

               <div>
                  <label className="block font-medium mb-1">Email</label>
                  <input
                     type="email"
                     name='email'
                     placeholder="Enter your email address"
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
               </div>

               <div className="relative">
                  <label className="block font-medium mb-1">Password</label>
                  <input
                     type={show ? "text" : "password"}
                     name="password"
                     placeholder="Enter your password"
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button type="button" onClick={() => setShow(!show)} className="absolute right-2 top-10 text-2xl">
                     <BiSolidShow />
                  </button>
               </div>

               <p className='text-[10px] font-bold'>
                  Don’t Have An Account?
                  <Link className='text-red-500' to={"/auth/register"}> Register</Link>
               </p>

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

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";


function LaftSite() { 
   return (
      <>
         
         <div className="">
            <h4 className="text-md font-bold mb-5">Login with</h4>
            <button className="btn btn-outline w-full mb-5"><FcGoogle size={24} />Login google
            </button>
            <button className="btn btn-outline w-full"><SiGithub size={24} /> Login GitHub</button>



            <h3 className="text-2xl font-medium mt-7">Find Us On</h3>
            <div className="join join-vertical w-full justify-center mt-4 space-y-2">
               <button className="btn join-item justify-center bg-blue-600 text-white hover:bg-blue-700">
                  <FaFacebook className="mr-2" /> Facebook
               </button>
               <button className="btn join-item justify-center bg-sky-500 text-white hover:bg-sky-600">
                  <FaTwitter className="mr-2" /> Twitter
               </button>
               <button className="btn join-item justify-center bg-pink-500 text-white hover:bg-pink-600">
                  <FaInstagram className="mr-2" /> Instagram
               </button>
            </div>


            <div className="bg-[#F3F3F3] mt-4 mb-4 py-4">
               <h2 className="text-2xl p-3">Q-Zone</h2>

               <div className="flex flex-col justify-center items-center ">
                  <img src="/image/playground.png" alt="" />
                  <img src="/image/playground.png" alt="" />
                  <img src="/image/playground.png" alt="" />
               </div>
            </div>

         </div>
         
      </>
   );
}

export default LaftSite;
import { Suspense } from "react";
import Categories from "./Categories";
import { CiCalendarDate } from "react-icons/ci";


function RightSite() {
   return (
      <>
         
         <div className="">
            <Suspense fallback={
               <div>
                  <span className="loading loading-dots loading-xl"></span>
               </div>


            }>
               <Categories />
            </Suspense>


            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg shadow-md">
               <div className="w-full">
                  <img
                     src="/image/Rectangle 3986.png"
                     alt="Bayern News"
                     className="w-full h-56 object-cover rounded-md"
                  />

                  <p className="text-lg font-semibold py-4 text-gray-800 leading-snug">
                     Bayern Slams Authorities<br />
                     Over Flight Delay to Club<br />
                     World Cup
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                     <h2 className="font-medium text-blue-600">Sports</h2>
                     <CiCalendarDate className="text-lg" />
                     <p>Jan 4, 2022</p>
                  </div>
               </div>

               <div className="w-full">
                  <img
                     src="/image/Rectangle 3986.png"
                     alt="Bayern News"
                     className="w-full h-56 object-cover rounded-md"
                  />

                  <p className="text-lg font-semibold py-4 text-gray-800 leading-snug">
                     Bayern Slams Authorities<br />
                     Over Flight Delay to Club<br />
                     World Cup
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                     <h2 className="font-medium text-blue-600">Sports</h2>
                     <CiCalendarDate className="text-lg" />
                     <p>Jan 4, 2022</p>
                  </div>
               </div>


               <div className="w-full">
                  <img
                     src="/image/Rectangle 3986.png"
                     alt="Bayern News"
                     className="w-full h-56 object-cover rounded-md"
                  />

                  <p className="text-lg font-semibold py-4 text-gray-800 leading-snug">
                     Bayern Slams Authorities<br />
                     Over Flight Delay to Club<br />
                     World Cup
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                     <h2 className="font-medium text-blue-600">Sports</h2>
                     <CiCalendarDate className="text-lg" />
                     <p>Jan 4, 2022</p>
                  </div>
               </div>
            </div>

         </div>
         
      </>
   );
}

export default RightSite;
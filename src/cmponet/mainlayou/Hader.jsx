import { format } from "date-fns";
import Marquee from "react-fast-marquee";


function Hader() {
   return (
      <>
         
         <div className="container mx-auto pt-5">
            <img className="mx-auto mt-6" src="/image/logo.png" alt="" />

            <h3 className="text-2xl text-center py-3">Journalism Without Fear or Favour</h3>
            <p className="text-center text-xl">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>

            <div className="flex items-center gap-6 p-3 bg-gray-100 mt-4">
               <p className="text-base-100 bg-secondary px-4 py-2">Latest</p>
               <Marquee pauseOnHover={true} speed={50}>
                  <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                  <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
               </Marquee>
           </div>

         </div>
         
         
         
      </>
   );
}

export default Hader;
import { Outlet, useNavigation } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";
import Hader from "./Hader";
import RightSite from "../home/RightSite";
import LaftSite from "../home/LaftSite";
import Lodding from "../auth/Loddinge";


function MaineLayou() {

   const {state} =useNavigation();
   return (
      <>
         <Hader />
         <Naver />
         <main className="container mx-auto py-5 grid grid-cols-12 gap-4">
            <aside className="col-span-3  sticky top-3 h-screen overflow-y-auto">
               <RightSite />
            </aside> 

            <section className="col-span-6">

               {
                  state == "loading" ? <Lodding /> : <Outlet />
               }
               
            </section>
            <aside className="col-span-3  sticky top-3 h-screen overflow-y-auto">
               <LaftSite />
            </aside>
            
         </main>
         <Footer />
      
         
      </>
   );
}

export default MaineLayou;
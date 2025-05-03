import { Outlet } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";
import Hader from "./Hader";
import RightSite from "../home/RightSite";
import LaftSite from "../home/LaftSite";


function MaineLayou() {
   return (
      <>
         <Hader />
         <Naver />
         <main className="container mx-auto py-5 grid grid-cols-12 gap-4">
            <aside className="col-span-3  sticky top-3 h-screen overflow-y-auto">
               <RightSite />
            </aside> 

            <section className="col-span-6">
               <Outlet />
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
import { Outlet } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";
import Hader from "./Hader";


function MaineLayou() {
   return (
      <>
         <Hader />
         <Naver />
         <Outlet />
         <Footer />
      
         
      </>
   );
}

export default MaineLayou;
import { Outlet } from "react-router-dom";
import Naver from "../mainlayou/Naver";


function AuthLayout() {
   return (
      <>
         <div className="">
            <Naver />
            <Outlet />
         </div>
         
      </>
   );
}

export default AuthLayout;
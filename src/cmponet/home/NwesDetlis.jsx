import { useLoaderData, useParams} from "react-router-dom";
import Naver from "../mainlayou/Naver";
import LaftSite from "./LaftSite";
import { useEffect, useState } from "react";
import NewsDetlisCard from "./NewsDetlisCard";


function NwesDetlis() {
   const { id } = useParams();
   const data = useLoaderData();

   const [news, setNews] = useState({});


   useEffect(() => {
      const newss = data.find(item => item.id === id);
      setNews(newss)

   },[data, id])


   

   return (
      <>
         
         <div className="">

            <Naver />

            <div className="grid grid-cols-12 gap-5 container mx-auto py-3">
               <div className="col-span-9">
                  <NewsDetlisCard news={news} />
               </div>  

               <div className="col-span-3">
                  <LaftSite />
               </div>
            </div>
            
         </div>
         
      </>
   );
}

export default NwesDetlis;
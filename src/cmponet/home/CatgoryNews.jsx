import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

function CatgoryNews() {
   const { id } = useParams();
   const data = useLoaderData();
   const [datas, setDatas] = useState([]);

   useEffect(() => {
      if (id === "0") {
         setDatas(data);
      } else if (id === "1") {
         const category = data.filter(news => news.others?.is_today_pick === true);
         setDatas(category);
      } else {
         const category = data.filter(news => news.category_id === Number(id));
         setDatas(category);
      }
   }, [data, id]);

   return (
      <div className="p-4 grid grid-cols-1 gap-4">
         {
            datas.map(item => <NewsCard key={item.id} news={item} />)
         }
      </div>
   );
}

export default CatgoryNews;

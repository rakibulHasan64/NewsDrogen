import { BiArrowBack } from "react-icons/bi";


function NewsDetlisCard({ news }) {

   
   
   return (


   
      <>
         <h3 className="text-2xl mb-4 text-start font-semibold">Dragon News</h3>
         <div className="flex flex-col items-start justify-start gap-8 ">

            
            <img className="w-full  object-cover" src={
               news?.image_url
            } alt="" />
            <h4 className="text-2xl font-bold">{news.title}</h4>
            <h3>{news?.details}</h3>

            <button className="btn btn-primary px-8"><BiArrowBack />All news in this category</button>
       </div>
         
         
         
      </>
   );
}

export default NewsDetlisCard;
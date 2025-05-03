import { FaStar, FaRegEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
   const {
      title,
      author = {},
      published_date,
      image_url,
      details,
      rating = {},
      total_view
   } = news;

   const validDate = (dateStr) => {
      const date = new Date(dateStr);
      return !isNaN(date) ? format(date, "yyyy-MM-dd") : "Date not available";
   };

   return (
      <div className="border rounded-md shadow-sm p-4 space-y-3 bg-white">
         {/* Header */}
         <div className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center gap-3">
               <img
                  src={author.img || "https://via.placeholder.com/40"}
                  alt={author.name || "Unknown"}
                  className="w-10 h-10 rounded-full object-cover"
               />
               <div>
                  <p className="font-semibold text-gray-700">{author.name || "Unknown Author"}</p>
                  <p className="text-sm text-gray-500">
                     {validDate(author.published_date || published_date)}
                  </p>
               </div>
            </div>
            <div className="flex items-center gap-3 text-gray-500 text-lg">
               <FaBookmark className="cursor-pointer" />
               <FaShareAlt className="cursor-pointer" />
            </div>
         </div>

         {/* Title */}
         <h2 className="text-lg font-bold text-gray-800">{title}</h2>

         {/* Image */}
         <img
            src={image_url}
            alt="news"
            className="w-full h-60 object-cover rounded-md"
         />

         {/* Details */}
         <p className="text-gray-600 text-sm">
            {details?.slice(0, 200)}...
            <span className="text-red-600 font-medium cursor-pointer"> Read More</span>
         </p>

         {/* Footer */}
         <div className="flex justify-between items-center border-t pt-2">
            {/* Rating */}
            <div className="flex items-center gap-1 text-orange-500">
               {[...Array(5)].map((_, i) => (
                  <FaStar
                     key={i}
                     className={i < Math.round(rating.number) ? "" : "text-gray-300"}
                  />
               ))}
               <span className="text-gray-700 ml-1 font-semibold">{rating.number || 0}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1 text-gray-500">
               <FaRegEye />
               <span>{total_view || 0}</span>
            </div>
         </div>
      </div>
   );
};

export default NewsCard;

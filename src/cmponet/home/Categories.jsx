import { use } from "react";
import { Navigate, NavLink } from "react-router-dom";

const faces = fetch("/category.json").then((res) => res.json()).then((data) => data);
function Categories() {

   const data = use(faces);

   
   return (
      <>
         
         <div className="mb-4">
            <h3 className="text-md font-bold mb-4">
               All categorise{data.length}
            </h3>
            <div className="flex flex-col gap-4">
               {
                  data.map((item) => (
                     <NavLink
                        key={item.name}
                        to={`/category/${item.id}`}
                        className="btn bg-base-100 hover:bg-gray-500" 
                     >
                        {item.name}
                     </NavLink>
                  ))
               }
            </div>

         </div>
         
      </>
   );
}

export default Categories;
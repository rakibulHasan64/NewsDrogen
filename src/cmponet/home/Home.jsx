import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();

   useEffect(() => {
      navigate("/category/0");  
   }, [navigate]);

   return null; 
}

export default Home;

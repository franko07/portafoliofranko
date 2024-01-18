import React from "react";




 const Carousell = (props) => {
  const { image } = props;
   return (
     <div class="overflow-hidden relative ">
       <div class="flex flex-row flex-wrap justify-content-center">
         <img
           src={image}
           alt=""
           class="object-cover w-full h-56 mb-5 bg-center rounded"
         />
       </div>
     </div>
   );
 };

export default Carousell;
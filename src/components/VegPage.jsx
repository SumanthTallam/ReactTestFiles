import { useSelector, useDispatch } from "react-redux";

const VegPage = ()=>{
const vegItems=useSelector((state)=>state.veg)
    return <>
     <h3>
          
          {vegItems.map((veg)=>(
           <div>
               <h2>
                   {veg.item}
               </h2>
           </div>
          ))}
           </h3>
        </>
}
export default VegPage
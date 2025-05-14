import { useSelector, useDispatch } from "react-redux";

const NonVegPage = ()=>{
const meatItems=useSelector((state)=>state.meat)
    return <>
     <h3>
          
          {meatItems.map((meat)=>(
           <div>
               <h2>
                   {meat.item}
               </h2>
           </div>
          ))}
           </h3>
        </>
}
export default NonVegPage
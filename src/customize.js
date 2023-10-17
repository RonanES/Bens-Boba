import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const Customize = () => {
    const {tea} =useParams()
    const [sugar,setSugar] = useState("%100");
    const [ice,setIce] = useState("%100");
    const [add,setAdd] = useState("none");
    return ( 
        <div className="custom">
            <h1>{tea}</h1>
            <form>
                <label>Sugar</label>
                <select 
                value={sugar}
                onChange={(e) => setSugar(e.target.value)}>
                    <option value="%100">%100</option>
                    <option value="%70">%70</option>
                    <option value="%30">%30</option>
                    <option value="%10">%0</option>
                </select>
                <label>Ice</label>
                <select
                 value={ice}
                 onChange={(e) => setIce(e.target.value)}>
                    <option value="%100">%100</option>
                    <option value="%70">%70</option>
                    <option value="%30">%30</option>
                    <option value="%10">%0</option>
                </select>
                <label>Add-in</label>
                <select value={add}
                onChange={(e) => setAdd(e.target.value)}>
                    <option value="none">none</option>
                    <option value="pearls">pearls</option>
                    <option value="mango">mango</option>
                    <option value="pudding">pudding</option>
                </select>
          
            </form>
            <h2> Sugar:{sugar} - Ice:{ice} - Add-in:{add} </h2>
        </div>

     );
}
 
export default Customize;
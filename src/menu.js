import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Menu = () => {
    const [teaMenu]= useState([
        {tea: 'Oolong Milk Tea', type: 'milk', id:1},
        {tea: 'Black Milk Tea', type: 'milk', id:2},
        {tea: 'Green Milk Tea', type: 'milk', id:3},
        {tea: 'Peach Milk Tea', type: 'fruitmilk', id:4},
        {tea: 'Wintermelon Milk Tea', type: 'fruitmilk', id:5},
        {tea: 'Mango Milk Tea', type: 'fruitmilk', id:6},
        {tea: 'Peach Tea', type: 'milk', id:7},
        {tea: 'Wintermelon Tea', type: 'milk', id:8},
        {tea: 'Mango Tea', type: 'milk', id:9}
    ])
    return ( 
        <div className="menu">
            <h1>Menu :3</h1>
            <div>
             {teaMenu.map((teaMenu) => (
                
                <div className="menu-prewiew" key= {teaMenu.id}>
                    <Link to={`/customize/${teaMenu.tea}`}>
                    <h2> {teaMenu.tea} </h2>
                    </Link>
                   
                </div>
             ) )}
            </div>
        </div>
     );
}
 
export default Menu;
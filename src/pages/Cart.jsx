import React from "react";
import PizzaBlockCart from "../components/PizzaBlockCart";
import { useState , useEffect} from "react";


function Cart(props) {
    const [pricepz, setPricepz] = useState(props.price)
    useEffect(() => {
        let i = 0
       
        for (let index = 0; index < props.pizzas.length; index++) {
            i+=props.pizzas[index].price
        }
        setPricepz(i)
    });



    function reload(){
        window.location.reload(false)
    }

    return(
    <>  
        <div className="cart_Main">
            <h1 className="title_Cart">Кошик</h1>
            {props.pizzas.map((obj) => (
                <PizzaBlockCart title={obj.title} price={obj.price} description={obj.description} image={obj.image}/>
            ))}

            <h1 className="total_price">{pricepz}₴</h1>
            <div className="cart_footer">

                <button>Замовити</button>
                <button className="del" onClick={reload}>Очистити</button>
                
            </div>
            
        </div>
    </>

    )
}

export default Cart;
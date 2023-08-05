import React from "react";
import { useState } from "react";


function PizzaBlockCart(props) {


    return (  
        <div className="cart_PizzaBlock active">
                <img src={props.image} alt="Pizza" className="cart_PizzaBlock-image"/>
                <div className="pizzaType">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <h4>{props.price}₴</h4>
                </div>
                <div className="pizzaAmount">
                    <button className="cart_PizzaBlock-button_close">✕</button>
                </div>
            </div>
    )
}



export default PizzaBlockCart;
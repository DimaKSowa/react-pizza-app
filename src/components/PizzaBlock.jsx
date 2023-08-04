import React from "react";

function PizzaBlock(props) {

    

    function count(){
      props.setCount((prev)=>prev+1)

      props.setPizzas((prev)=>[...prev,props])
    }




    return (  
        <div className='pizzaBlock'>
          <img className='pizzaBlock_image' src={props.image} alt='Pizza'/>
          <h2 className="pizzaBlock_title">{props.title}</h2>
          <p className="pizzaBlock_description">{props.description}</p>
          <h4 className="pizzaBlock_price">{props.price}₴</h4>
          <button className="pizzaButton_add" onClick={count}>Додати</button>
        </div>
    )
}



export default PizzaBlock;
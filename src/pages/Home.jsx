import React from "react";
import PizzaBlock from '../components/PizzaBlock'
import FooterInfo from '../components/FooterInfo'
import pizzas from '../pizzas.json'


function Home(props) {

    function count(){
        props.setCount((prev)=>prev+1)

    }

    return(
        <>  
            <main>
                {pizzas.map((obj) => (
                    <PizzaBlock setCount={count} setPizzas={props.setPizzas} title={obj.title} price={obj.price} description={obj.description} image={obj.image}/>
                ))}
            </main>
            <FooterInfo/>
        </>
    )
}

export default Home;
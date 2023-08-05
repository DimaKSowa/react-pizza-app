import React, { useEffect } from "react";
import PizzaBlock from '../components/PizzaBlock'
import FooterInfo from '../components/FooterInfo'
// import pizzas from '../pizzas.json'
import Categories from "../components/Categories";
import { useState } from "react";


function Home(props) {
    const [categoryId, setCategoryId] = useState(0)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://64ce1a720c01d81da3ee84f1.mockapi.io/items?${categoryId> 0 ? `category=${categoryId}` : ''
    }`)
        .then((res) => {
          return res.json()
        })
        .then((arr) => {
          setItems(arr)
        })
    }, [categoryId])

    function count(){
        props.setCount((prev)=>prev+1)

    }

    return(
        <>  
            <main>
                <Categories value={categoryId} onClickCategory={(i ) => setCategoryId(i)}/>
                {items.map((obj) => (
                    <PizzaBlock setCount={count} setPizzas={props.setPizzas} title={obj.title} price={obj.price} description={obj.description} image={obj.image}/>
                ))}
            </main>
            <FooterInfo/>
        </>
    )
}

export default Home;
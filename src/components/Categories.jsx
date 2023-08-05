import React from "react";
import { useState } from "react";

function Categories({ value, onClickCategory }) {
    const categories = ['Всі', 'Мясна', 'Вегетеріанська', 'Гостра']


return(
    <ul className="typePizza">
        {categories.map((catgoryName, i) =>(
            <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={value == i ? 'active' : ''}>
                {catgoryName}
            </li>
        ))}

    </ul>
)
}

export default Categories;
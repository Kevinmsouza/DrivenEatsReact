import React from "react";
import Category from "./Category";

export default function Item({ image: [img, alt], name, description, price, itemIndex, categoryIndex, editShopCart}) {

    const [qtd, setQtd] = React.useState(0);
    function plus() { 
        setQtd(qtd + 1);
        editShopCart(categoryIndex, itemIndex, qtd + 1)
    }
    function minus() { 
        setQtd(qtd - 1);
        editShopCart(categoryIndex, itemIndex, qtd - 1)
    }
    function select() {
        if(qtd === 0){
             plus()
        }
    }

    return (
        <li className={`item ${qtd > 0 ? "selected" : ""}`} onClick={select} >
            <img src={img} alt={alt} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="price">R$ {price.toFixed(2).replace(".", ",")}</p>
            <Counter
                qtd={qtd}
                plus={plus}
                minus={minus}
            />
        </li>
    )
}

function Counter({qtd, plus, minus}) {

    return (
        <div className={`counter ${ qtd > 0 ? "" : "hidden"} `}>
            <span className="minus" onClick={minus}>-</span>
            {qtd} 
            <span className="plus" onClick={plus}>+</span>
        </div>
    )
}
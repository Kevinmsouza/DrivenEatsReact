import Item from "./Item";

export default function Category({title, itens, categoryIndex, editShopCart}) {

    return (
        <div className="category">
                <h2 className="title">{title}</h2>
                <ul className="menu">
                    {itens.map((item, i) => {
                        return (
                            <Item
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                categoryIndex={categoryIndex}
                                itemIndex={i}
                                editShopCart={editShopCart}
                                key={i}
                            /> 
                        )
                    })}
                </ul>
            </div>
    )
}
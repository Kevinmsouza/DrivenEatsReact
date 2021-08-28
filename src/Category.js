import Item from "./Item"

export default function({title, itens}) {
    return (
        <div className="category prato">
                <h2 className="title">{title}</h2>
                <ul className="menu">
                    {itens.map((item) => {
                        return (
                            <Item
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            /> 
                        )
                    })}
                </ul>
            </div>
    )
}
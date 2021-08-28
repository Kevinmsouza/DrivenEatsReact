import Category from "./Category";

export default function Content({ DATA, editShopCart}) {
    return (
        <div className="content">
            {DATA.map((category, i) => {
                return(
                    <Category
                    title={category.title}
                    itens={category.itens}
                    categoryIndex={i}
                    editShopCart={editShopCart}
                    key={i}
                />
                )
            })}
        </div>
    )
}
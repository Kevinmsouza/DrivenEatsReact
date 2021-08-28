export default function Item({image: [img, alt], name, description, price}) {
    return (
        <li className="item">
            <img src={img} alt={alt} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="price">R$ {price.toFixed(2).replace(".", ",")}</p>
            <div className="check-mark hidden">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </li>
    )
}
export default function Footer({isEnable}) {
    

    return (
        <footer>
            <button disabled={!isEnable} >
                <p>{isEnable ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}</p>
            </button>
        </footer>
    )
}
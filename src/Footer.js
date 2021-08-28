
export default function Footer({isEnable, shopCart}) {
    function sendMessage(){
        const message = formatMessage()
        console.log(message)
        const whatsLink = `https://wa.me/+556696846194?text=${encodeURIComponent(message)}`
        window.location.assign(whatsLink)
    }
    function formatMessage(){
        let itens = shopCart.map((category) => category.filter((item) => item.qtd > 0));
        let total = 0;
        let message = `Olá, gostaria de fazer o pedido:
        - Prato(s): ${itens[0].map((item) => {
            total += (item.price * item.qtd);
            return ` ${item.name} ${item.qtd > 1 ? '('+item.qtd+'x)' : ''}`
        })}
        - Bebida(s): ${itens[1].map((item) => {
            total += (item.price * item.qtd);
            return ` ${item.name} ${item.qtd > 1 ? '('+item.qtd+'x)' : ''}`
        })}
        - Sobremesa(s): ${itens[2].map((item) => {
            total += (item.price * item.qtd);
            return ` ${item.name} ${item.qtd > 1 ? '('+item.qtd+'x)' : ''}`
        })}
        Total: R$ ${total.toFixed(2)}`
        return message;
    }
    return (
        <footer>
            <button disabled={!isEnable} onClick={sendMessage}>
                <p>{isEnable ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}</p>
            </button>
        </footer>
    )
}
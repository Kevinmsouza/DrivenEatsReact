import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./css config/reset.css";
import "./css config/style.css";
import React from "react";

const DATA = [
    {
        title: "Primeiro, seu prato",
        itens: [
            {
                image: [
                    "./images/lasanha-carne.jpg",
                    "Foto de uma lasanha à bolonhesa"
                ],
                name: "Lasanha Bolonhesa",
                description: "Massa e Carne moída com molho da casa",
                price: 20.00
            },
            {
                image: [
                    "./images/frango-empanado.jpg",
                    "Foto de uma porção de frango empanado"
                ],
                name: "Frango empanado",
                description: "Crocante por fora, delicioso por dentro",
                price: 10.00
            },
            {
                image: [
                    "./images/Macarrão-rustico.jpg"
                    ,
                    "Foto de um prato de macarrão ao molho rústico"
                ],
                name: "Marcarrão rústico",
                description: "O sabor caseiro, hmmmmm",
                price: 10.99
            },
            {
                image: [
                    "./images/lasanha-carne.jpg",
                    "Foto de uma lasanha à bolonhesa"
                ],
                name: "Lasanha Bolonhesa+",
                description: "+Massa e +Carne moída com +molho da casa",
                price: 20.99
            },
            {
                image: [
                    "./images/banana.jpg",
                    "Foto de um cacho de banana"
                ],
                name: "Banana",
                description: "Isso mesmo... Apenas UMA banana",
                price: 0.99
            }
        ]
    },
    {
        title: "Agora, sua bebida",
        itens: [
            {
                image: [
                    "./images/pepsi-lata.jpg",
                    "Foto de uma lata de Pepsi"
                ],
                name: "Pepsi lata",
                description: "350ml",
                price: 4.00
            },
            {
                image: [
                    "./images/laranja.jpg",
                    "Foto de um copo de suco de laranja"
                ],
                name: "Suco de laranja",
                description: "400ml",
                price: 5.00
            },
            {
                image: [
                    "./images/abacaxi.jpg",
                    "Foto de um copo de suco de abacaxi"
                ],
                name: "Suco de abacaxi",
                description: "400ml",
                price: 5.00
            },
            {
                image: [
                    "./images/agua.jpg",
                    "Foto de uma garrafa d'agua"
                ],
                name: "Garrafa d'agua",
                description: "500ml",
                price: 2.00
            }
        ]
    },
    {
        title: "Por fim, sua sobremesa",
        itens: [
            {
                image: [
                    "./images/bombom.jpg",
                    "Imagem de varios bombons sonho de valsa"
                ],
                name: "Bombom sonho de valsa",
                description: "O classico sabor do bombom",
                price: 1.50
            },
            {
                image: [
                    "./images/bolo-tentador.jpg",
                    "Foto de um bolo de chocolate cremoso"
                ],
                name: "Bolo tentador",
                description: "Um bolo de chocolate com camadas de recheio cremoso",
                price: 50.00
            },
            {
                image: [
                    "./images/pudim.jpg",
                    "Foto de um pudim de leite condensado"
                ],
                name: "Pudim",
                description: "Um pudim de leite condensado inteiro para você destruir",
                price: 22.00
            },
            {
                image: [
                    "./images/cupcake.jpg",
                    "Imagem de cupcake"
                ],
                name: "Cupcake",
                description: "Para aqueles na dieta, que ainda querem um bolinho",
                price: 4.00
            }
        ]
    }
];

export default function App() {
    const [shopCart, setShopCart] = React.useState(DATA.map((category) => {
        return (
            category.itens.map((item) => {
                return (
                    {
                        name: item.name,
                        price: item.price,
                        qtd: 0
                    }
                )
            })
        )
    }));
    
    function editShopCart(categoryIndex, itemIndex, qtd){
        let newList = [...shopCart];
        newList[categoryIndex][itemIndex].qtd = qtd;
        setShopCart(newList);
    }

    return (
        <>
            <Header />
            <Content DATA={DATA} editShopCart={editShopCart} />
            <Footer />
        </>
    )
}
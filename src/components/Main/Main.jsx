import './Main.css'
import { useEffect, useState } from 'react'

import batataFrita from '../../assets/img/products/batataFrita.jpg'
import bgBacon from '../../assets/img/products/bgBacon.jpg'
import bgClassico from '../../assets/img/products/bgClassico.jpg'
import bgDuplo from '../../assets/img/products/bgDuplo.jpg'
import milkshake from '../../assets/img/products/milkshake.jpg'
import veggieBurguer from '../../assets/img/products/veggieBurguer.jpg'
import nossaHistoria from "../../assets/img/nossaHistoria.jpg"
import imgPrincipal from "../../assets/img/imgPrincipal.jpg"

const imageMap = {
    'batataFrita.jpg': batataFrita,
    'bgBacon.jpg': bgBacon,
    'bgClassico.jpg': bgClassico,
    'bgDuplo.jpg': bgDuplo,
    'milkshake.jpg': milkshake,
    'veggieBurguer.jpg': veggieBurguer,
    'nossaHistoria.jpg': nossaHistoria,
    'imgPrincipal.jpg': imgPrincipal
};

const productsData = [
    {
        id: "699dcd60f8ed85372581174f",
        name: "Burguer Clássico",
        desc: "Hambúrguer artesanal seguindo o tradicional",
        image: "bgClassico.jpg",
        price: 28.9,
        ingredients: ["Pão brioche", "180g de carne", "queijo cheddar", "alface", "tomate", "molho especial"]
    },
    {
        id: "699e02d393f9502063c13d8a",
        name: "Burguer Bacon",
        desc: "Hambúrguer artesanal recheado de bacon",
        image: "bgBacon.jpg",
        price: 32.9,
        ingredients: ["Pão brioche", "180g de carne", "bacon crocante", "queijo", "cebola caramelizada"]
    },
    {
        id: "69a2ea831b0401092bea94e0",
        name: "Burguer Duplo",
        desc: "Hambúrguer com carne dupla",
        image: "bgDuplo.jpg",
        price: 42.9,
        ingredients: ["Pão brioche", "2x 180g de carne", "dobro de queijo", "bacon", "molho barbecue"]
    },
    {
        id: "69a2eb2c1b0401092bea94e2",
        name: "Veggie Burguer",
        desc: "Hambúrguer vegano",
        image: "veggieBurguer.jpg",
        price: 32.9,
        ingredients: ["Pão integral", "hambúrguer de grão de bico", "queijo", "rúcula", "maionese verde"]
    },
    {
        id: "69a2eb921b0401092bea94e4",
        name: "Batata Frita",
        desc: "Porção generosa de batatas fritas crocantes",
        image: "batataFrita.jpg",
        price: 18.9,
        ingredients: ["120g de batata inglesa", "sal", "páprica defumada"]
    },
    {
        id: "69a2ec551b0401092bea94e6",
        name: "Milkshake",
        desc: "Milkshake nos sabores chocolate, ovomaltine e morango (400ml)",
        image: "milkshake.jpg",
        price: 16.9,
        ingredients: ["350ml de leite", "50ml de leite condensado", "40g de chocolate/ovomaltine/morango"]
    }
];

function Main() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productsData)
    }, [])

    return (
        <main>
            <span id='#'></span>
            <section className="slogan">
                <div className='text'>
                    <h1>A Melhor Hamburgueria da Cidade</h1>
                    <p>Ingredientes frescos, receitas especiais e entrega rápida. Peça agora e receba em até 40 minutos!</p>
                    <div className="buttons">
                        <button className="btn orange">Ver cardápio</button>
                        <button className="btn ghost">Whatsapp</button>
                    </div>
                    <div className="stats">
                        <div className="stat">
                            <p className='destaque'>500+</p>
                            <p>Clientes felizes</p>
                        </div>
                        <div className="stat">
                            <p className='destaque'>4.9</p>
                            <p>Avaliação</p>
                        </div>
                        <div className="stat">
                            <p className='destaque'>40min</p>
                            <p>Tempo médio de entrega</p>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img src={imageMap['imgPrincipal.jpg']} alt="" />
                </div>
            </section>
            <section className="cardapio">
                <h1>Nosso Cardápio</h1>
                <p>Escolha seu favorito e faça seu pedido pelo WhatsApp</p>
                <div className="burguers" id='cardapio'>
                    {
                        products.map(product => (
                            <div key={product.id} className="card">
                                <img
                                    src={imageMap[product.image]}
                                    alt={product.name}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover', backgroundPosition: 'center center' }}
                                />
                                <div className='card-body'>
                                    <h3>{product.name}</h3>
                                    <p className="desc">{product.desc}</p>
                                    <p className="ingredients">{product.ingredients.join(", ")}</p>
                                    <p className="price">R$ {product.price.toFixed(2).replace(".",",")}</p>
                                    <button className="btn orange">Pedir</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="nossa-historia" id='sobre'>
                <img src={imageMap['nossaHistoria.jpg']} alt="Nossa História" />
                <div className="nossa-historia-text">
                    <h2>Nossa História</h2>
                    <p>Desde 2020, a King Burguer nasceu da paixão por hambúrgueres artesanais e ingredientes frescos. Nosso segredo? Ingredientes selecionados e muito amor envolvido.</p>
                    <ul>
                        <li>🍖<strong>Carne fresca</strong> - 100% bovina</li>
                        <li>🚀<strong>Entrega rápida</strong> - Máximo 40 minutos</li>
                        <li>💳<strong>Pagamento fácil</strong> - Pix, cartão de crédito/débito ou dinheiro</li>
                    </ul>
                </div>
            </section>
            <section className="cta" id='contato'>
                <h2>Bateu a Fome?</h2>
                <p>Faça seu pedido agora e receba em casa!</p>
                <button className='btn white'>Pedir pelo Whatsapp</button>
            </section>
        </main>
    )
}

export default Main
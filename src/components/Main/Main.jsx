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

function Main() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://back-end-delivery-production.up.railway.app/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Erro ao buscar produtos:", error))
    }, [])

    return (
        <main>
            <span id='#'></span>
            <section className="slogan">
                <div className='text'>
                    <h1>A Melhor Hamburgueria da Cidade</h1>
                    <p>Ingredientes frescos, receitas especiais e entrega rápida. Peça agora e receba em até 40 minutos!</p>
                    <div className="buttons">
                        <button className="btn">Ver cardápio</button>
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
            <section className="burguers">
                {
                    products.map(product => (
                        <div key={product.id} className="card">
                            <img
                                src={imageMap[product.image]}
                                alt={product.name}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <h3>{product.name}</h3>
                            <p className="desc">{product.desc}</p>
                            <p className="ingredients">{product.ingredients.join(", ")}</p>
                        </div>
                    ))
                }
            </section>
            <section className="nossa-historia">
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
            <section className="cta">
                <h2>Bateu a Fome?</h2>
                <p>Faça seu pedido agora e receba em casa!</p>
                <button className='btn white'>Pedir pelo Whatsapp</button>
            </section>
        </main>
    )
}

export default Main
import './Header.css'
import logo from '../../assets/img/logo.png'

function Header() {
    return (
        <header>
            <span className="logo">
                <img src={logo} alt="Logo" />
                <p>King Burguer</p>
            </span>
            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#cardapio">Cardápio</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
            <button className='btn orange'>Peça Agora</button>
        </header>
    )
}

export default Header
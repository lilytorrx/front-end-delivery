import logo from '../../assets/img/logo.png'    
import './Footer.css'

function Footer() {
    return (
        <footer>
            <span className="logo">
                <img src={logo} alt="Logo" />
                <p>King Burguer</p>
            </span>
            <span>
                <h3>Horário</h3>
                <p>Terça a Domingo: 18h às 23h</p>
            </span>
            <span>
                <h3>Contato</h3>
                <p>(21) 99999-9999 | Rua dos Hambúrgueres, 123</p>
            </span>
            <span>
                <h3>Siga-nos</h3>
                <p><a href="#">Instagram</a> | <a href="#">Facebook</a></p>
            </span>
        </footer>
    )
}

export default Footer
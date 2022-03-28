import './footer.css';

function Footer() {
    return (
        <nav className="contactos">
            <ul>
                <p className="RedesSociales">Redes sociales</p> 
                <li><a href="https://www.facebook.com/"><img src ="http://getdrawings.com/vectors/logo-facebook-vector-9.png" className="media"></img></a></li>
                <li><a href="https://twitter.com/"><img src ="https://icon-library.com/images/twitter-circle-icon-png/twitter-circle-icon-png-15.jpg" className="media"></img></a></li>
                <li><a href="https://clasesprogramacion-bio.github.io/"><img src ="https://www.pngall.com/wp-content/uploads/2016/04/Github-PNG-Image.png" className="media"></img></a></li>
            </ul>
        </nav>
    );
}

export default Footer;
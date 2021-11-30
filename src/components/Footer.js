import {Link} from "react-router-dom";
import Twitter from '../img/twitter-icon.png'
import Mail from '../img/mail-icon.png'
import Instagram from '../img/instagram-icon.png'
import '../css/styles.css'

function Footer (){
    return(
        <>
            <footer className="footer">
                <div className="Center">
                    <ul className="links">
                        <Link to="/"><img className="imgSocial" src={Twitter} style={{textDecoration: "none"}} alt="log in"/></Link>
                        <Link to="/"><img className="imgSocial" src={Mail} style={{textDecoration: "none"}} alt="log in"/></Link>
                        <Link to="/"><img className="imgSocial" src={Instagram} style={{textDecoration: "none"}} alt="log in"/></Link>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;
import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare,faInstagram,faLinkedin,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
               <div class="col">
                    <ul>
                        <li>Flowp</li>
                        <li><a href="#">Recursos</a></li>
                        <li><a href="#">Ebook</a></li>
                        <li><a href="#">Plano e preço</a></li>
                        <li><a href="#">Dúvidas</a></li>
                        <li><a href="#">Depoimentos</a></li>
                    </ul>
                </div>

                <div class="col">
                    <ul>
                        <li><FontAwesomeIcon icon={faPhone} /> +55 62 9 9283-5044</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> suporte@flowp.com.br</li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li>Flowp</li>
                        <li><a href="#">Recursos</a></li>
                        <li><a href="#">Ebook</a></li>
                        <li><a href="#">Plano e preço</a></li>
                        <li><a href="#">Dúvidas</a></li>
                        <li><a href="#">Depoimentos</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li>Plataforma</li>
                        <li><a href="#">Experimente grátis</a></li>
                        <li><a href="#">Faça seu login</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebookSquare}  size="2x"/></li>
                        <li><FontAwesomeIcon icon={faInstagram} size="2x"/></li>
                        <li><FontAwesomeIcon icon={faTwitter}  size="2x"/></li>
                        <li><FontAwesomeIcon icon={faLinkedin} size="2x" /></li>
                        <li><FontAwesomeIcon icon={faYoutube} size="2x"/></li>
                        
                    </ul>
                </div>
              

            </div>
      
        );
    }
  }
  export default Footer;
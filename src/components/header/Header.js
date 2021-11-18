import React from 'react';
import './Header.css';
class Header extends React.Component {
    render() {
      return (
        <div className="header">
            {/*<ul>
              <li><a href="/">Home </a></li>
              <li><a href="#news">Contato </a></li>
              <li><a href="/login">Login </a></li>
              <li><a href="/register">Teste Grátis</a></li>
            </ul>*/}
            <h1>Header</h1>
        </div>
      
      );
    }
  }
  export default Header;
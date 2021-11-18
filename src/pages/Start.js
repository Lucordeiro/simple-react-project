import React from 'react';
import wallet from './../assets/images/wallet.svg'
  class Start extends React.Component {
      render() {
          return(
              <div class="container">
                <div class="content">
                  <img src={wallet} width="80" height="80" />
                  <h1>A Maior e Melhor Carteira Digital do Brasil ♥ :)</h1>
                  
                  <button className="pulse" href="/login">Comece Agora !</button>
                  
                  
                </div>
                  

              </div>
          );
      }
    }
  export default Start;
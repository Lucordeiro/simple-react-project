import React,{ useState, useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

import api from './../services/api'
import './../assets/css/main.css';
import wallet from './../assets/images/wallet.svg'
export default function Login() {
    
    const [loginField, setLoginField] = useState('');
    const [passField, setPassField] = useState('');
    //let navigate = useNavigate();
  
   
    useEffect(() => {
        //checkUser()
    });
    function auth(){
      
        api.post("/users/auth",{login:this.state.login,password:this.state.password}).then((response) => alert(response)).catch((err) => {alert("ops! ocorreu um erro" + err);});
    }
    
      return(
            <div class="container">
                <div class="content">
                    <img src={wallet} width="50" height="50" />
                    <h2>Faça Login Para Continuar</h2>
                    <div class="group">
                        <i class="fa fa-envelope icon"></i>
                            <input type="text" name="login" placeholder="Login" value={loginField} onChange={(event)=>{setLoginField(event.target.value)}} />
                    </div>
                    <div class="group">
                        <i class="fa fa-key icon"></i>
                        <input type="password" name="password" placeholder="Password" value={passField} onChange={(event)=>{setPassField(event.target.value)}}/>
                    </div>
                    <div class="group">
                        <button class="btn" onClick={()=> {auth()}}>Login</button>
                    </div>
                    <div class="group">
                        <a href="/register">Criar Conta</a>
                    </div>
                </div>
            </div>
      );
    
  }
  
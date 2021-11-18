import React,{ useState, useEffect } from 'react';
import api from './../services/api';

export default function Register(){
    const [nameField, setNameField] = useState('');
    const [loginField, setLoginField] = useState('');
    const [passField, setPassField] = useState('');
    function register(){
      
        api.post("/users/auth",{login:this.state.login,password:this.state.password,name:this.state.name}).then((response) => alert(response)).catch((err) => {alert("ops! ocorreu um erro" + err);});
    }
    
    return (
       
        <div class="container">
            <div class="content">
                <h2>Crie Sua Conta</h2>
                <div class="group">
                      <i class="fa fa-user icon"></i>
                      <input type="text" name="name" placeholder="Seu nome" value={nameField} onChange={(event)=>{setNameField(event.target.value)}} />
                </div>
                <div class="group">
                    <i class="fa fa-envelope icon"></i>
                    <input type="text" name="login" placeholder="Seu Login " value={loginField} onChange={(event)=>{setLoginField(event.target.value)}} />
                </div>
          
                <div class="group">
                    <i class="fa fa-key icon"></i>
                    <input type="password" name="password" placeholder="Sua Senha" value={passField} onChange={(event)=>{setPassField(event.target.value)}} />
                </div>
                
                <div class="group">
                    <button className="btn" onClick={()=> {register()}}>Registrar</button>
                </div>
                <div class="group">
                    <a class="" href="/login">Já tem cadastro ?</a>
                </div>
              
            </div>
        </div>
      
      );
    
  }

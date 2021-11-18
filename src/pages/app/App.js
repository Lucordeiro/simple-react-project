import React from 'react';
import api from '../../services/api';
class Register extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        name:'',
        login:'',
        password:''
    };
    this.auth = this.register.bind(this);
  }
  register(){
    
    api.post("/users/auth",{login:this.state.login,password:this.state.password,name:this.state.name}).then((response) => alert(response))
    .catch((err) => {
      alert("ops! ocorreu um erro" + err);
    });
  }
    render() {
      return (
       
        <div class="container">
          
              <div className="cpanel-top">
                Sejá bem vindo, Lucas <strong className="amount"> Saldo $50,98</strong>
              </div>
              <div className="cpanel-buttom">
              Seu extrato
              
          </div>
             
         
        </div>
      
      );
    }
  }
  export default Register;
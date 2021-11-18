import React from 'react';

class Recovery extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="box">
                    <h1>Recuperação</h1>
                    <input type="text" name="user" placeholder="Email ou CPF"/>
                    <div class="group">
                    <button>Enviar</button>
                    </div>
                    <div class="group">
                        <a href="/recovery">Fazer Login</a>
                    </div>
                    <div class="group">
                        <a href="/register">Ainda não tem cadastro?</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recovery;
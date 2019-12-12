import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import groceries2 from '../../assets/groceries2.png';
import { Container } from './styles';

export default function Login({ history }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
  
    async function handleSubmit(event) {
      event.preventDefault()
      try {
        const response = await api.post("/projetocesta", {
          email,senha
        })
        const { token } = response.data;
        console.log(token);
  
        if (token) {
          localStorage.setItem("@CESTA/token", token);
        }
        history.push("/home");
      }
      catch (erro) {
        console.log("Dados inseridos estão incorretos" + erro);
      }
    }

    return (
        <Container>
            <section>
                <form onSubmit={handleSubmit}>
                  <div className="img">
                <img src={ groceries2 } alt="Login"/>
                </div>
                    <div>Login</div>
                    <label htmlFor="">Email:</label><input type="text" onChange={(event) => setEmail(event.target.value)} />
                    <label htmlFor="">Senha:</label><input type="password" onChange={(event) => setSenha(event.target.value)} />
                    <button type="submit">Entrar</button>
                </form>
                <Link className="link" to="/cadastro">Criar conta</Link>
            </section>
        </Container>
    );
}



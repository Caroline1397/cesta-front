import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../../services/api"
import { Container } from './styles';

export default function Cadastro({ history }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    async function handleSubmit(event) {
      event.preventDefault()
      try {
        await api.post("/cadastro", {
          nome,
          email,
          senha
        })
        history.push("/")
      } catch (erro) {
        console.log("Este usuário ja existe");
      }
    }
    return (
        <Container>
            <section>
                <form onSubmit={handleSubmit}>
                    <div>Crie sua conta</div>
                    <label htmlFor="">Nome:</label><input type="text" onChange={(event) => setNome(event.target.value)} />
                    <label htmlFor="">Email:</label><input type="email"  onChange={(event) => setEmail(event.target.value)}/>
                    <label htmlFor="">Senha:</label><input type="password" onChange={(event) => setSenha(event.target.value)}/>
                    <button type="submit">Criar conta</button>
                </form>
                <Link className="link" to="/">Voltar ao Login</Link>
            </section>
        </Container>
    );
}

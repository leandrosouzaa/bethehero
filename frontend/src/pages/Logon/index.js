import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


export default function Login() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit">Entrar</button>
          <a href="/register">
            <FiLogIn size={16} color="#E02061" />
            Não Tenho Cadastro
          </a>
        </form>

      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}
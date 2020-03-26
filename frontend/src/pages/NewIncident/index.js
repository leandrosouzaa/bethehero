import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'


export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = { title, value, description }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })

      alert('Novo caso cadastrado com Sucesso');

      history.push('/profile')
    } catch (err) {
      console.log('Erro na criação de evento, tente novamente!')
    }
  }

  return (
    <div className="newincident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso!</p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02061" />
            Voltar para a Home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Títutlo do Caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
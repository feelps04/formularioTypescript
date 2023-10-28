import React, { useState, ChangeEvent, FormEvent } from 'react';
import './css.css';

interface FormData {
  empresa: string;
  email: string;
  cnpj: string;
  fone: string;
  nomeSolicitante: string;
}

function Button() {
  const [formData, setFormData] = useState<FormData>({
    empresa: '',
    email: '',
    cnpj: '',
    fone: '',
    nomeSolicitante: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch('/inserir_dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta do servidor:', data);
        // Faça algo com a resposta, se necessário
      })
      .catch((error) => {
        console.error('Erro ao enviar formulário:', error);
        // Trate os erros, se necessário
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="submit-button-mobile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          placeholder="Empresa"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="cnpj"
          value={formData.cnpj}
          onChange={handleChange}
          placeholder="CNPJ"
        />
        <input
          type="tel"
          name="fone"
          value={formData.fone}
          onChange={handleChange}
          placeholder="Telefone"
        />
        <input
          type="text"
          name="nomeSolicitante"
          value={formData.nomeSolicitante}
          onChange={handleChange}
          placeholder="Nome do Solicitante"
        />
        <button id="enviarButton" className="submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Button;

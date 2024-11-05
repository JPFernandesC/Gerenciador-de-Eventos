import React, { useState } from 'react';

const EventoForm = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário.
    onSubmit({ nome, data, local }); // Chama a função onSubmit com os dados do evento.
    setNome(''); // Limpa o campo nome.
    setData(''); // Limpa o campo data.
    setLocal(''); // Limpa o campo local.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Evento</h2>
      <input
        type="text"
        placeholder="Nome do Evento"
        value={nome}
        onChange={(e) => setNome(e.target.value)} // Atualiza o estado do nome.
        required // Campo obrigatório.
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)} // Atualiza o estado da data.
        required // Campo obrigatório.
      />
      <input
        type="text"
        placeholder="Local"
        value={local}
        onChange={(e) => setLocal(e.target.value)} // Atualiza o estado do local.
        required // Campo obrigatório.
      />
      <button type="submit">Salvar Evento</button> // Botão para submeter o formulário.
    </form>
  );
};

export default EventoForm;

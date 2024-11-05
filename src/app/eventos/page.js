import React, { useState, useEffect } from 'react';
import EventoForm from '../../components/eventos/EventoForm';
import EventosList from '../../components/eventos/EventosList';

const EventosPage = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    
    const storedEventos = JSON.parse(localStorage.getItem('eventos')) || [];
    setEventos(storedEventos);
  }, []);

  const handleAddEvento = (eventoData) => {
    const updatedEventos = [...eventos, eventoData];
    setEventos(updatedEventos);
    localStorage.setItem('eventos', JSON.stringify(updatedEventos));
  };

  const handleDeleteEvento = (index) => {
    const updatedEventos = eventos.filter((_, i) => i !== index);
    setEventos(updatedEventos);
    localStorage.setItem('eventos', JSON.stringify(updatedEventos));
  };

  return (
    <div>
      <h1>Gerenciamento de Eventos</h1>
      <EventoForm onSubmit={handleAddEvento} />
      <EventosList eventos={eventos} onDelete={handleDeleteEvento} />
    </div>
  );
};

export default EventosPage;

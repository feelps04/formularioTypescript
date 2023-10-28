import React from 'react';
import './css.css';

function RowContainer2() {
  return (
    <div className="row-container">
      <div className="column">
        <div className="coluna4">
          <input
            type="text"
            id="titulo-contratacao"
            name="titulo-contratacao"
            placeholder="Modelo de contratação"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
        <div className="coluna4">
          <input
            type="text"
            id="modalidade-contratacao"
            name="modalidade-contratacao"
            placeholder="Tipo de contratação"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
        <div className="coluna4">
          <input
            type="text"
            id="periodo-contratacao"
            name="periodo-contratacao"
            placeholder="Local de contratação"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
      </div>
      <div className="column">
        <div className="coluna5">
          <input
            type="text"
            id="posicao"
            name="posicao"
            placeholder="Cargo"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
        <div className="coluna5">
          <input
            type="text"
            id="horario-trabalho"
            name="horario-trabalho"
            placeholder="Horário de trabalho"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
        <div className "coluna5">
          <input
            type="text"
            id="prioridade-contratacao"
            name="prioridade-contratacao"
            placeholder="Prioridade de contratação"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
      </div>
      <div className="column">
        <div className="coluna6">
          <input
            type="text"
            id="senioridade"
            name="senioridade"
            placeholder="Senioridade"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
        <div className="coluna6">
          <input
            type="text"
            id="regime-trabalho"
            name="regime-trabalho"
            placeholder="Regime de trabalho"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
        <div className="coluna6">
          <input
            type="text"
            id="budget-maximo"
            name="budget-maximo"
            placeholder="Budget máximo"
            required
          />
          <i className="fi fi-rr-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

export default RowContainer2;

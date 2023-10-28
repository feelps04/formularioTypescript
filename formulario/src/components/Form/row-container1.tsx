import React from 'react';
import './css.css';

function RowContainer1() {
  return (
    <div className="row-container1">
      <div className="column">
        <div className="coluna1">
          <input type="text" id="empresa" name="empresa" placeholder="empresa" required />
        </div>
        <div className="coluna1">
          <input type="email" id="e-mail" name="e-mail" placeholder="e-mail" required />
        </div>
      </div>
      <div className="column">
        <div className="coluna2">
          <input type="text" id="cnpj" name="cnpj" placeholder="cnpj" required />
        </div>
        <div className="coluna2">
          <input type="text" id="fone" name="fone" placeholder="fone Solicitante" required />
        </div>
      </div>
      <div className="column">
        <div className="coluna3">
          <input type="text" id="nome-solicitante" name="nome-solicitante" placeholder="nome solicitante" required />
        </div>
      </div>
    </div>
  );
}

export default RowContainer1;

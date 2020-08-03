import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://images.pexels.com/photos/3932263/pexels-photo-3932263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Teacher"
        />
        <div>
          <strong>Craque Neto</strong>
          <span>Português</span>
        </div>
      </header>
      <p>
        Entusias do português e bom di bola viu? Aqui bate falta de trei dedo e
        joga muito digassi de passagi.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 70,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

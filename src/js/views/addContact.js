import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";//

export const AddContact = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({    
      name: "",
      phone: "",
      email: "",
      address: ""
      
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await actions.addContacts(contactData);
      await actions.getContacts();
      navigate("/");
    } catch (error) {
      console.error("Error adding contact", error);
    }
  };

  return (
    <div className="contact-card-container mt-0">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="phone"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>

        {/* Si el contacto no existe , añadir contacto y al reves*/}
        <button type="submit">
          {contactData.id ? "Actualizar Contacto" : "Añadir contacto"}
        </button>
      </form>
    </div>
  );
};

//API: https://playground.4geeks.com/contact/docs#/Agenda%20operations/create_agenda_agendas__slug__post
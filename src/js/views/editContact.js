import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();

  
  const [contact, setContact] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

 
  useEffect(() => {
    
    const contactData = store.contacts.contacts.find(
      (c) => c.id === parseInt(params.id)
    );

    
    if (contactData) {
      setContact(contactData);
    }
  }, [params.id, store.contacts]);

  
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    actions.editContact(params.id, contact);

    navigate("/");
  };

  
  return (
    <div className="contact-card-container mt-0">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn-group d-flex justify-content-between">
          <Link to={"/"}>
            <button>Volver</button>
          </Link>
          <button type="submit">
            
            {contact.id ? "Actualizar" : "Añadir Contacto"}
          </button>
        </div>
      </form>
    </div>
  );
};


EditContact.propTypes = {
  match: PropTypes.object,
};

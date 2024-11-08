import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {
  const { name, email, address, phone } = contact;
  const { actions } = useContext(Context);

  const handleDelete = () => {
    if (window.confirm("Está seguro de querer borrar este usuario?")) {
      actions.deleteContacts(contact.id);
    }
  };

  return (
    <div className="contact-card col-xl-4 col-sm-6 mb-3">
      <div className="bg-white rounded py-4 px-4 contact-card-border">
        <div className="text-center">
          <div className="image-circle">
            <div className="profile-icon-container">
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                alt="profile-icon"
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
            </div>
          </div>
          <h5 className="mb-0" style={{ color: "green" }}>{name}</h5>
        </div>

        <div className="row mt-2  icons-margin-left ">
          <div className="col-12">
            <div className="d-flex mb-2">
              <i className="fas fa-at mr-2 icons"></i>
              <p className="mb-0 text-margin-left">{email}</p>
            </div>
            <div className="d-flex mb-2">
              <i className="fas fa-map-marker-alt mr-2 icons"></i>
              <p className="mb-0 text-margin-left ">{address}</p>
            </div>
            <div className="d-flex mb-2">
              <i className="fas fa-mobile-alt mr-2 icons"></i>
              <p className="mb-0 text-margin-left ">{phone}</p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <Link to={`/EditContact/${contact.id}`}>
              <button className="btn btn-primary icon-button">
                <i className="far fa-edit" />
              </button>
            </Link>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger icon-button"
              onClick={handleDelete}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
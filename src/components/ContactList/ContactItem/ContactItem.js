import React from "react";
import lis from "./ContactItem.module.css";
import PropTypes from "prop-types";
const ContactItem = ({ contacts, deleteContact }) => {
  // console.log(deleteContact);
  return contacts.map((contact) => {
    const { name, number, id } = contact;
    return (
      <li key={id} className={lis.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button
          type="button"
          className={lis.btn_delete}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};
ContactItem.defaultProps = {
  name: "",
  number: "",
  id: "",
};
ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactItem;

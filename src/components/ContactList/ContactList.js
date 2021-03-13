import React, { Component } from "react";
import ls from "./ContactList.module.css";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem/ContactItem";
class ContactList extends Component {
  render() {
    // console.log(this.props);
    const { contacts, deleteContact } = this.props;
    // console.log(contacts);
    return (
      <ul className={ls.list}>
        {contacts.length > 0 ? (
          <ContactItem contacts={contacts} deleteContact={deleteContact} />
        ) : (
          <p>You have no contacts</p>
        )}
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;

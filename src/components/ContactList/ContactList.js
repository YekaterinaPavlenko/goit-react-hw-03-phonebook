import React, { Component } from "react";
import ls from "./ContactList.module.css";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem/ContactItem";
class ContactList extends Component {
  render() {
    // console.log(this.props);
    const { contacts } = this.props;
    return (
      <ul className={ls.list}>
        <ContactItem
          contacts={contacts}
          deleteContact={this.props.deleteContact}
        />
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default ContactList;

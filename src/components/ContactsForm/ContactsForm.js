import React, { Component } from "react";
import cfs from "./ContactForm.module.css";
import PropTypes from "prop-types";

import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // phoneId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ id: uuidv4(), ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={cfs.form}>
        <label className={cfs.label}>
          Name
          <input
            type="text"
            className={cfs.input}
            pattern="^[A-Za-zА-Яа-яЁё-0-9\s_]+$"
            required
            placeholder="Enter name"
            name="name"
            onChange={this.handleChange}
            value={name}
          ></input>
        </label>
        <label className={cfs.label}>
          Number
          <input
            type="phone"
            className={cfs.input}
            pattern="^[\+?\0-9\-_]+$"
            required
            placeholder="Enter phone number"
            name="number"
            onChange={this.handleChange}
            value={number}
          ></input>
        </label>
        <button type="submit" className={cfs.button}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = { onSubmit: PropTypes.func };

export default ContactForm;

// В App.js.

// render() {

// ....
// }

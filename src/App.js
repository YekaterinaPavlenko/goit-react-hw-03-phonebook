import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactsForm/ContactsForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "+38-097-459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "+38-066-443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "+38-067-645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "+38-099-227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    const { contacts } = this.state;
    let existName = contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    let existNumber = contacts.find(
      (contact) => contact.number.toLowerCase() === data.number.toLowerCase()
    );
    let existContact = (existName && "name") || (existNumber && "number");
    // console.log(existContact);

    existName || existNumber
      ? alert(`The ${existContact} is already in contacts.`)
      : this.setState((prevState) => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  addFilterValue = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    // console.log(filter);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  onDeleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} changeFilter={this.addFilterValue} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;

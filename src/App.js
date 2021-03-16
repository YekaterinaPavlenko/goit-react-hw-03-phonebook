import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    let existName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );
    let existNumber = contacts.find(
      contact => contact.number.toLowerCase() === data.number.toLowerCase(),
    );
    let existContact = (existName && 'name') || (existNumber && 'number');
    // console.log(existContact);

    existName || existNumber
      ? alert(`The ${existContact} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  addFilterValue = e => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    // console.log(filter);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  onDeleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };
  componentDidMount() {
    console.log('я родился');
    // const { contacts } = this.state;
    // console.log(contacts);
    const dataFromLocalStorage = localStorage.getItem('contacts');

    console.log(dataFromLocalStorage);
    if (dataFromLocalStorage) {
      const contactsFromLS = JSON.parse(dataFromLocalStorage);
      this.setState(() => ({ contacts: [...contactsFromLS] }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('я обновился');
    // console.log(prevProps);
    // console.log(prevState);
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      // console.log(contacts);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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

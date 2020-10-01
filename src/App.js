import React, { Component } from "react";
import createContact from "./utils/CreateContact";

import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

import styled from "styled-components";
import GlobalFonts from "./fonts/fonts";
import "./css/normalize.css";
import "./css/base.css";

const Section = styled.form`
  width: 300px;
  border: 2px solid #908989;
  padding: 10px 30px 20px 10px;
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  font-family: "Noteworthy";
`;

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const isUnique = !this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isUnique) {
      const newContact = createContact({ name, number });
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    } else {
      alert(`Contact with name: ${name} already exist... Enter another name`);
    }
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  handleFilterChange = (filter) =>
    this.setState({
      filter,
    });

  visibleContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = this.visibleContacts();

    return (
      <Section>
        <GlobalFonts />
        <ContactForm onAddContact={this.addContact} />
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.handleFilterChange} />
        )}
        {visibleContacts.length > 0 && (
          <ContactsList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </Section>
    );
  }
}

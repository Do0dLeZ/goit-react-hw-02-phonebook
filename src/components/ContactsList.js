import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import ContactListItem from "./ContactListItem";

const Section = styled.section``;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
`;

function ContactsList({ contacts, onRemoveContact }) {
  return (
    <Section>
      <Title>Contacts</Title>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onRemoveContact={onRemoveContact}
          />
        ))}
      </List>
    </Section>
  );
}

ContactsList.propTypes = {
  contacts: propTypes.objectOf(
    propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.number.isRequired,
      })
    )
  ),
  onRremoveContact: propTypes.objectOf(propTypes.func),
};

export default ContactsList;

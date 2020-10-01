import React from "react";
import styled from "styled-components";

const Section = styled.section``;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    color: rgb(176,196,222);

    &:hover {
        color: red;
    }
`;

function ContactsList({ contacts, onRemoveContact }) {
  return (
    <Section>
      <Title>Contacts</Title>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <span>
              {name}: {number}
            </span>
            <Button type="button" onClick={() => onRemoveContact(id)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default ContactsList;

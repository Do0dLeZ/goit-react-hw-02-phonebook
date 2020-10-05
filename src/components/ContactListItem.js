import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

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

  color: rgb(176, 196, 222);

  &:hover {
    color: red;
  }
`;

export default function ContactListItem({ id, name, number, onRemoveContact }) {
  return (
    <ListItem>
      <span>
        {name}: {number}
      </span>
      <Button type="button" onClick={() => onRemoveContact(id)}>
        Remove
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.number.isRequired,
  onRemoveContact: propTypes.objectOf(propTypes.func),
};

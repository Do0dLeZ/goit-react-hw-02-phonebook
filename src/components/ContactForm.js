import React, { Component } from "react";
import shortID from "shortid";
import propTypes from "prop-types";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;
`;

const Label = styled.label`
  margin-bottom: 5x;
`;

const Input = styled.input`
  margin-bottom: 15px;
  width: 80%;
  height: 36px;
  font-size: 20px;
`;

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
  background-color: #bddbfa;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;

  &:hover {
    background: linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
    background-color: #80b5ea;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  inputId = {
    idName: shortID.generate(),
    idNumber: shortID.generate(),
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state);
  };

  render() {
    const { name, number } = this.state;
    const { idName, idNumber } = this.inputId;

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Phone Book</h1>
        <Label htmlFor={idName}>Name</Label>
        <Input
          type="text"
          placeholder="Enter name..."
          value={name}
          onChange={this.handleOnChange}
          name="name"
          id={idName}
        />
        <Label htmlFor={idNumber}>Number</Label>
        <Input
          type="number"
          value={number}
          onChange={this.handleOnChange}
          name="number"
          id={idNumber}
          placeholder="Enter phone number..."
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: propTypes.objectOf(propTypes.func).isRequired,
};

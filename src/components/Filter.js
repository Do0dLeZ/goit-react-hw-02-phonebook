import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Input = styled.input`
  margin-bottom: 15px;
  width: 70%;
  height: 36px;
  font-size: 20px;

  margin-bottom: 15px;
`;

export default function Filter({ value, onChange }) {
  return (
    <div>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filter contacts..."
      />
    </div>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.objectOf(propTypes.func),
};

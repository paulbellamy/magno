import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  padding: 15px 0;
  margin: 0;
  outline: 0;
  border: 0;
  width: 100%;
  font-size: 24px;
`;

const KEY_ENTER = 13;
const isIos = () => !!window.navigator.userAgent.match(/iPad|iPhone/i);

export function SearchBox({ initial, onSubmit }) {
  const [term, setTerm] = useState(initial || isIos() ? "Search..." : "");

  return (
    <React.Fragment>
      <Input
        type="text"
        value={term}
        onBlur={event =>
          event.target.value.length === 0
            ? term
              ? onSubmit(term)
              : setTerm("Search...")
            : onSubmit(event.target.value)
        }
        onChange={event => setTerm(event.target.value)}
        onFocus={() => (term === "Search..." ? setTerm("") : setTerm(term))}
        onKeyUp={event => (event.keyCode === KEY_ENTER ? onSubmit(event.target.value) : null)}
        autoFocus={isIos() ? false : "autofocus"}
      />
    </React.Fragment>
  );
}

import React from "react";
import styled from "styled-components";

import { size16, size24, colorRed, colorTextLight, timeXl } from "./style";

const Base = styled.button`
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-weight: 600;
  line-height: ${size24};
  padding: ${size16};
  text-align: center;
  text-decoration: none;
  width: 100%;
  box-shadow: 0 0 0 0 transparent;
  transition: all ${timeXl} ease;
`;

export const Button = styled(Base)`
  background-color: ${props => props.theme.colorPrimary};

  &:hover,
  &:active {
    background-color: ${props => props.theme.colorPrimary800};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${props => props.theme.colorPrimary100};
    outline: 0;
  }

  &[disabled] {
    color: ${colorTextLight};
    background-color: ${props => props.theme.colorBlack200};
    pointer-events: none;
  }
`;

export const Error = styled(Base)`
  background-color: ${colorRed};

  &:hover,
  &:active {
    background-color: #d12a2a;
  }
`;

export const A11y = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

export const Ghost = styled(A11y)`
  color: ${colorTextLight};
  padding: 1rem 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

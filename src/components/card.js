import React from "react";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: block;
  width: 200px;
  height: 200px;
  background: ${props => props.background};
  box-shadow: 0 0 1px 0 rgba(49,62,72,0.16), 0 8px 12px 0 rgba(36,44,47,0.16);
`;

// Card.defaultprops = {
//   background: "#ffffff"
// };

import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 60px;

  border-bottom: 1px solid gray;

`;

export const Link = styled(NavLink)`
padding: 5px 30px;

  font-size: 28px;
  text-decoration: none;
  color: black;

  &.active {
     border-radius: 20px;
     background-color: blue;
     color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
     color: blue;
  }
`;
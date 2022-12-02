import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 40px;

  border-bottom: 1px solid gray;
`;

export const Link = styled(NavLink)`
  padding: 5px 30px;

  font-size: 18px;
  font-weight: 500;
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

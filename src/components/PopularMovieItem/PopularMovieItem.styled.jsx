import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  width: 300px;
  height: 550px;
  border: 1px solid gray;

  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const LinkItem = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Title = styled.h2`
  text-align: center;
`;

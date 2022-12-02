import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    text-align: center;
  }
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 1270px;
  margin-left: auto;
  margin-right: auto;
`;

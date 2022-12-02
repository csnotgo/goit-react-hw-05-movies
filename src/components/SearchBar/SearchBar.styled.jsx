import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: 400px;

  background-color: #fff;
  border-radius: 3px;
`;

export const Input = styled.input`
  height: 30px;
  width: 400px;
  padding: 0 20px;

  font-size: 18px;

  border: 1px solid gray;
  border-radius: 10px;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 33px;
  height: 32px;
  border: none;
  border-radius: 10px;

  background-color: transparent;
  cursor: pointer;
`;

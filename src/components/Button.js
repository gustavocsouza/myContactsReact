import styled, { css } from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  height: 52px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  transition: background 0.1s ease-in;

  &:hover{
    background: ${({ theme }) => theme.colors.primary.light};
  }
  &:active{
    background: ${({ theme }) => theme.colors.primary.dark};
  }
  &:disabled{
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};
    &:hover{
      background: ${theme.colors.danger.light};
    }
    &:active{
      background: ${theme.colors.danger.dark};
    }
  `}
`;

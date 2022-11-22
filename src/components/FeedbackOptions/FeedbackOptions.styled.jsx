import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsItem = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.raspberry};
  padding: 5px 10px;
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  cursor: pointer;
`;

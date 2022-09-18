import styled from 'styled-components/native';

export const FormContainer = styled.View`
  flex: 1;
  padding: 15px;
  justify-content: center;
`;

export const TextContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px 0;
`;

export const CreateAccountText = styled.Text`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

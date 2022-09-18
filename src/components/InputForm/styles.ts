import styled from 'styled-components/native';

export const InputLabel = styled.Text`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Input = styled.TextInput`
  border: 1px solid #2222;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 46px;
  margin-bottom: 15px;
  padding: 0 5px;
  margin-top: 5px;
`;

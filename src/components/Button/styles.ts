import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

type ButtonProps = {
  transparent: boolean;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ transparent, theme }) =>
    transparent ? 'transparent' : theme.palette.primary.light};
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: center;
  height: 46px;
  margin: 5px 0;
  box-shadow: ${({ transparent, theme }) =>
    transparent ? 'none' : theme.palette.shadow};
`;

export const CardText = styled.Text<ButtonProps>`
  color: ${({ transparent, theme }) =>
    transparent ? '#942623' : theme.palette.primary.main};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-left: 10px;
`;

export const CustomIcon = styled(Icon).attrs(({ theme }) => ({
  size: theme.iconSize.big,
}))`
  color: ${({ theme }) => theme.palette.primary.main};
`;

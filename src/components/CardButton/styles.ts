import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-direction: row;
  padding: 20px;
  align-items: center;
  height: 120px;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  margin: 10px 0;
`;

export const CardText = styled.Text`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.fontSize.mid};
  margin-left: 10px;
`;

export const CustomIcon = styled(Icon).attrs(({ theme }) => ({
  size: theme.iconSize.big,
}))`
  color: ${({ theme }) => theme.palette.primary.main};
`;

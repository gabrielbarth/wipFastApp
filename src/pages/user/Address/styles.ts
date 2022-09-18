import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const FormContainer = styled.View`
  padding: 15px;
`;

export const ContainerBottom = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
`;

export const ListContainer = styled.View`
  flex: 1;
`;

export const AddressList = styled(FlatList)``;

export const ItemContainer = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  flex-direction: row;
`;

export const TextContainer = styled.View`
  flex-grow: 1;
`;

export const ItemText = styled.Text`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Line = styled.View`
  height: 0.4px;
  width: 90%;
  background-color: ${({ theme }) => theme.palette.shadow};
  align-self: center;
`;

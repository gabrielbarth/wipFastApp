import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;

export const TextContainer = styled.View`
  flex-grow: 1;
`;

export const ItemText = styled.Text`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Line = styled.View`
  height: 0.4rpx;
  width: 90%;
  background-color: ${({ theme }) => theme.palette.shadow};
  align-self: center;
`;

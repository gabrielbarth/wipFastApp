import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 15px;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  padding: 20px;
  padding-bottom: 40px;
`;

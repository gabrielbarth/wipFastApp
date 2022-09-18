import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.common.white};
`;

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export { PageContainer };

import styled from 'styled-components/native';

type ProfileHeaderProps = {
  fromHome: boolean;
};

export const Container = styled.View<ProfileHeaderProps>`
  flex-direction: ${({ fromHome }) => (fromHome ? 'row' : 'column')};
  padding: 15px;
  padding-top: 50px;
  align-items: center;
  justify-content: ${({ fromHome }) => (fromHome ? 'space-between' : 'center')};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const UserDataContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ProfileHeaderProps>`
  flex-direction: ${({ fromHome }) => (fromHome ? 'row' : 'column')};
  align-items: center;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
`;

export const ProfilePicture = styled.Image<ProfileHeaderProps>`
  width: ${({ fromHome }) => (fromHome ? '60px' : '100px')};
  height: ${({ fromHome }) => (fromHome ? '60px' : '100px')};
  border-radius: 60px;
`;

export const TextUserName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const TextProfile = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.primary.light};
`;

export const PressableIcon = styled.TouchableOpacity``;

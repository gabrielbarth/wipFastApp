import React from 'react';
import { CustomIcon } from '../CustomIcon';

import {
  Container,
  UserDataContainer,
  TextContainer,
  ProfilePicture,
  TextUserName,
  TextProfile,
  PressableIcon,
} from './styles';

type ProfileHeaderProps = {
  imageUrl: string;
  userName: string;
  fromHome?: boolean;
  onPressExit?: () => void;
  onPressProfile?: () => void;
};

const ProfileHeader = ({
  imageUrl,
  userName,
  fromHome,
  onPressExit,
  onPressProfile,
}: ProfileHeaderProps) => {
  return (
    <Container fromHome={fromHome}>
      <UserDataContainer onPress={onPressProfile} fromHome={fromHome}>
        <ProfilePicture
          fromHome={fromHome}
          source={{
            uri: imageUrl,
          }}
        />
        <TextContainer>
          <TextUserName>{userName}</TextUserName>
          {fromHome && <TextProfile>Ver perfil</TextProfile>}
        </TextContainer>
      </UserDataContainer>
      {fromHome && (
        <PressableIcon onPress={onPressExit}>
          <CustomIcon color="red" iconName="exit-outline" size="big" />
        </PressableIcon>
      )}
    </Container>
  );
};

export { ProfileHeader };

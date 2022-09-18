import React from 'react';
import { CardButton } from '../../components/CardButton';
import { ProfileHeader } from '../../components/ProfileHeader';

import { Container } from './styles';

const Home = ({ navigation }) => {
  return (
    <>
      <ProfileHeader
        fromHome
        userName="Gabriel Barth"
        imageUrl="https://avatars.githubusercontent.com/u/42456106?v=4"
        onPressExit={() => alert('exit')}
        onPressProfile={() => navigation.navigate('Profile')}
      />
      <Container>
        <CardButton
          onPress={() => navigation.navigate('SelectLocation')}
          title="Lavagem automotiva"
          icon={{
            color: 'primary',
            iconName: 'car-wash',
            size: 'big',
            library: 'MaterialCommunity',
          }}
        />
        <CardButton
          onPress={() => alert('nada')}
          title="Estética automotiva"
          icon={{
            color: 'primary',
            iconName: 'car-sport-sharp',
            size: 'big',
            library: 'Ionicons',
          }}
        />
      </Container>
    </>
  );
};

export { Home };

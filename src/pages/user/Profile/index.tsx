import React from 'react';
import { Button } from '../../../components/Button';
import { CardButton } from '../../../components/CardButton';

import { ProfileHeader } from '../../../components/ProfileHeader';

import { Container, ContainerContent, ContainerBottom } from './styles';

const Profile = ({ navigation }) => {
  return (
    <Container>
      <ProfileHeader
        userName="Gabriel Barth"
        imageUrl="https://avatars.githubusercontent.com/u/42456106?v=4"
        onPressProfile={() => alert('change photo?')}
      />
      <ContainerContent>
        <CardButton
          onPress={() => navigation.navigate('Cars')}
          title="Histórico"
          icon={{
            iconName: 'history',
            color: 'primary',
            size: 'big',
            library: 'FontAwesome',
          }}
        />
        <CardButton
          onPress={() => navigation.navigate('Address')}
          title="Meus endereços"
          icon={{
            iconName: 'location-sharp',
            color: 'primary',
            size: 'big',
          }}
        />
        <CardButton
          onPress={() => navigation.navigate('Cars')}
          title="Meus carros"
          icon={{
            iconName: 'car-sport-sharp',
            color: 'primary',
            size: 'big',
          }}
        />

        <CardButton
          onPress={() => navigation.navigate('Cars')}
          title="Dados para pagamento"
          icon={{
            iconName: 'credit-card-alt',
            color: 'primary',
            size: 'big',
            library: 'FontAwesome',
          }}
        />
        <ContainerBottom>
          <Button
            transparent={true}
            title="Remover minha conta"
            onPress={() => alert('pressed')}
          />
          <Button title="Sair" onPress={() => alert('pressed')} />
        </ContainerBottom>
      </ContainerContent>
    </Container>
  );
};

export { Profile };

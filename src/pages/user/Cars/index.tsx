import React from 'react';
import { Button } from '../../../components/Button';
import { CardButton } from '../../../components/CardButton';

import { Container, ContainerContent, ContainerBottom } from './styles';

const Cars = () => {
  return (
    <Container>
      <ContainerBottom>
        <Button title="Sair" onPress={() => alert('pressed')} />
        <Button
          transparent={true}
          title="Remover minha conta"
          onPress={() => alert('pressed')}
        />
      </ContainerBottom>
    </Container>
  );
};

export { Cars };

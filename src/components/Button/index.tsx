import React from 'react';

import { Container, CustomIcon, CardText } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  transparent?: boolean;
};

const Button = ({ title, onPress, transparent }: ButtonProps) => {
  return (
    <Container transparent={transparent} onPress={onPress}>
      {title && <CardText transparent={transparent}>{title}</CardText>}
    </Container>
  );
};

export { Button };

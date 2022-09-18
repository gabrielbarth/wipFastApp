import React from 'react';

import { CustomIcon, CustomIconProps } from '../CustomIcon';
import { Container, CardText } from './styles';

type CardButtonProps = {
  title: string;
  icon?: CustomIconProps;
  onPress: () => void;
};

const CardButton = ({ title, icon, onPress }: CardButtonProps) => {
  return (
    <Container onPress={onPress}>
      {icon && <CustomIcon {...icon} />}
      {title && <CardText>{title}</CardText>}
    </Container>
  );
};

export { CardButton };

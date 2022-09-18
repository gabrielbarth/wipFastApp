import React from 'react';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import McIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type CustomIconProps = {
  library?: 'Ionicons' | 'FontAwesome' | 'MaterialCommunity';
  iconName: string;
  size: 'small' | 'mid' | 'big';
  color: 'primary' | 'secondary' | 'red';
};

export const StyledFaIcon = styled(FaIcon).attrs(({ theme, size, color }) => ({
  size: theme.iconSize[size],
  color:
    color === 'primary' || color === 'secondary'
      ? theme.palette[color].main
      : theme.palette.common[color],
}))``;

export const StyledIonIcon = styled(IonIcon).attrs(
  ({ theme, size, color }) => ({
    size: theme.iconSize[size],
    color:
      color === 'primary' || color === 'secondary'
        ? theme.palette[color].main
        : theme.palette.common[color],
  })
)``;

export const StyledMcIcon = styled(McIcons).attrs(({ theme, size, color }) => ({
  size: theme.iconSize[size],
  color:
    color === 'primary' || color === 'secondary'
      ? theme.palette[color].main
      : theme.palette.common[color],
}))``;

const CustomIcon = ({ library, iconName, size, color }: CustomIconProps) => {
  if (!iconName) return null;

  if (library === 'MaterialCommunity' && iconName)
    return <StyledMcIcon name={iconName} size={size} color={color} />;
  if (library === 'FontAwesome' && iconName)
    return <StyledFaIcon name={iconName} size={size} color={color} />;

  return <StyledIonIcon name={iconName} size={size} color={color} />;
};

export { CustomIcon };

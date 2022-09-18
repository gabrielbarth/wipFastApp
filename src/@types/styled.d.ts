// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string;
  light: string;
}

interface IFontSize {
  small: string;
  mid: string;
  big: string;
}

interface IIconSize {
  small: number;
  mid: number;
  big: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    fontSize: IFontSize;
    iconSize: IIconSize;
    palette: {
      primary: IPalette;
      secondary: IPalette;
      common: {
        black: string;
        white: string;
        red: string;
      };
      shadow: string;
    };
  }
}

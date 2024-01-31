import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      Primary: string;
      Secondary: string;

      Background: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      MildScale: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    colorBase: {
      Black: string;
      White: string;

      Success: string;
      Info: string;
      Alert: string;
      Error: string;
    };
  }
}

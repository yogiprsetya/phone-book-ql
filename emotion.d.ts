import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      hightlight: string;
      border: string;
      danger: string;
      text: {
        body: string;
        dark: string;
      };
    };
  }
}

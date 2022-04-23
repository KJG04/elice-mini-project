import { css } from "@emotion/react";

const globalStyle = css`
  html {
    font-size: 16px;
  }
  body,
  ::placeholder {
    font-family: "Pretendard", "Malgun Gothic", "Helvetica", "Myriad Pro",
      "Arial", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
  input,
  ::placeholder {
    font-size: 0.875rem;
  }
`;

export default globalStyle;

import { Global } from "@emotion/react";
import { MainContainer } from "./container";
import globalStyle from "./globalStyle";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <MainContainer />
    </>
  );
}

export default App;

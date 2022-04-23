import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { MainContainer } from "./container";
import globalStyle from "./globalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyle} />
          <MainContainer />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;

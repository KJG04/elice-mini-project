import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { MainContainer } from "./container";
import globalStyle from "./globalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Global styles={globalStyle} />
            <Routes>
              <Route path="/" element={<MainContainer />} />
            </Routes>
          </QueryClientProvider>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;

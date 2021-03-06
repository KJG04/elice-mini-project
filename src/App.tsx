import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { MainContainer } from "./container";
import globalStyle from "./globalStyle";

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Global styles={globalStyle} />
            <Routes>
              <Route path="/main" element={<MainContainer />} />
              <Route path="*" element={<Navigate to="/main" replace />} />
            </Routes>
          </QueryClientProvider>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;

import { HomePage } from "../containers/HomePage";
import { AppPage } from "../containers/AppPage";
import { DocsPage } from "../containers/DocsPage/DocsPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<AppPage />} />
      <Route path="/docs" element={<DocsPage />} />
    </Routes>
  );
};

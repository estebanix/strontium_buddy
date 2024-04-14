import { HomePage } from "../containers/HomePage";
import { AppPage } from "../containers/AppPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<AppPage />} />
    </Routes>
  );
};

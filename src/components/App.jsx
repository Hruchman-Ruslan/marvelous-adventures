import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import { Layout } from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const CharactersPage = lazy(() => import("../pages/CharactersPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

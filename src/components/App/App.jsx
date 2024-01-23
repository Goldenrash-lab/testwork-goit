import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import FavoritesPage from "../pages/FavoritesPage";
import Layout from "../Layout/Layout";
import { Global } from "../../styles/global";

function App() {
  return (
    <>
      <Global />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

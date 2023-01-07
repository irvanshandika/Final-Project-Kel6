import NavigasiBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.js";
import BlankPage from "./pages/BlankPage.js";
import Login from "./pages/Login.js";
import OlahragaPage from "./pages/OlahragaPage.js";
import BisnisPage from "./pages/BisnisPage.js";
import TeknologiPage from "./pages/TeknologiPage.js";
import KesehatanPage from "./pages/KesehatanPage.js";
import TeamPage from "./components/Team.js";

function App() {
  console.log(window.location.pathname);
  return (
    <>
      <NavigasiBar />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="teampage" element={<TeamPage />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<BlankPage />} />
          <Route path="bisnis" element={<BisnisPage />} />
          <Route path="teknologi" element={<TeknologiPage />} />
          <Route path="kesehatan" element={<KesehatanPage />} />
          <Route path="olahraga" element={<OlahragaPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

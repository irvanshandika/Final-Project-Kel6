import NavigasiBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.js";
import BlankPage from "./pages/BlankPage.js";
import Login from "./pages/Login.js";

function App() {
  console.log(window.location.pathname);
  return (
    <>
      <NavigasiBar />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<BlankPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

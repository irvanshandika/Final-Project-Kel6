import NavigasiBar from "./components/navbar.js";
import CarouselWeb from "./components/carousel.js";
import Footer from "./components/footer.js";
import ListBuku from "./components/group.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="App App-header">
        <NavigasiBar />
        <CarouselWeb />
        <div className="container">
          <div className="ucapan">
            <p>Selamat Datang</p>
            <p>Di</p>
            <p>Perpustakaan Digital Yogyakarta</p>
          </div>
        </div>
      </div>
      {/* Daftar Buku */}
      <ListBuku />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

import NavigasiBar from "./components/navbar.js";
import CarouselWeb from "./components/carousel.js";
import Footer from "./components/footer.js";
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

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

import NavigasiBar from "./components/navbar.js";
import CarouselWeb from "./components/carousel.js";
import Footer from "./components/footer.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="App App-header">
        <div className="container">
          <NavigasiBar />
          <CarouselWeb />

          <div className="ucapan">
            <p>Selamat Datang</p>
            <p>Di</p>
            <p>Perpustakaan AMIKOM</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import CarouselWeb from "../components/carousel";
import ListBuku from "../components/group";

const MainPage = () => {
  return (
    <>
      <div className="App App-header ">
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
    </>
  );
};

export default MainPage;

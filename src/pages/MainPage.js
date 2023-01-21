import React from "react";
import CarouselWeb from "../components/carousel.js";
import ListBuku from "../components/group.js";
// import SearchBar from "../components/search.js";

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
      {/* <SearchBar /> */}
      {/* Daftar Buku */}
      <ListBuku />
      {/* Footer */}
    </>
  );
};

export default MainPage;

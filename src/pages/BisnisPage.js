import React, { useState, useEffect } from "react";
import axios from "axios";

const BisnisPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7137/api/books/Bisnis")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="bisnispage">
        <h1>Bisnis</h1>
        <div className="d-flex gap-4 flex-col">
          {data.map((item, index) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={index}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p>Author: {item.author}</p>
                  <p className="card-text">Kategori: {item.category}</p>
                  <p>Publikasi: {item.publication}</p>
                  <p>Publisher: {item.publisher}</p>
                </div>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Download Disini
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BisnisPage;

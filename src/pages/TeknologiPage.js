import React, { useState, useEffect } from "react";
import axios from "axios";

const TeknologiPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://noneedmore-001-site1.gtempurl.com/api/books/Teknologi")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="teknologipage">
        <h1>Teknologi</h1>
        <div className="d-flex gap-4 flex-col">
          {data.map((item, index) => {
            // <div key={index}>
            //   <Row>
            //     <Col>
            //       <h2>{item.title}</h2>
            //       <h4>{item.author}</h4>
            //       <img src={item.image} />
            //       <p>{item.category}</p>
            //       <p>{item.publication}</p>
            //       <p>{item.publisher}</p>
            //     </Col>
            //   </Row>
            // </div>
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
                  <a href={item.file} className="card-link">
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
export default TeknologiPage;

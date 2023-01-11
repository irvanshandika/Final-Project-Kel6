import React, { useState, useEffect } from "react";
import axios from "axios";

const OlahragaPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://noneedmore-001-site1.gtempurl.com/api/books/Olahraga")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="olahragapage">
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
                  <p className="card-text">{item.category}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
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

export default OlahragaPage;

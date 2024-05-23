import React from "react";
import image from "../images/wallpaper.avif"
import"./Home.css"

function Home() {
  return (
    <div className="Home-page text-white bg-dark container-fluid d-flex justify-content-center align-items-center align-items-lg-center">
      <div className="row container ">
        <div
          className="col-lg-6 d-flex justify-content-center  align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "70px" }}>Book Catlog </h2>
          <button className="viewBook my-3">View Books</button>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img src={image} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Home;

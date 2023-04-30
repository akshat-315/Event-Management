import React from "react";
import "../styles/gallery.css";
import g1 from "../imgs/g1.jpg";
import g2 from "../imgs/g2.jpg";
import g3 from "../imgs/g3.jpg";
import g4 from "../imgs/g4.jpg";
import g5 from "../imgs/g5.jpg";
import g6 from "../imgs/g6.jpg";
import g7 from "../imgs/g7.jpg";
import g8 from "../imgs/g8.jpg";
import g9 from "../imgs/g9.jpg";

function Page4() {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={g1} alt="gallery-img"></img>
        </div>
        <div className="gallery-item">
          <img src={g2} alt="gallery-img"></img>
        </div>
        <div className="gallery-item">
          <img src={g3} alt="gallery-img"></img>
        </div>
      </div>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={g4} alt="gallery-img"></img>
        </div>
        <div className="gallery-item">
          <img src={g5} alt="gallery-img"></img>
        </div>
        <div className="gallery-item">
          <img src={g6} alt="gallery-img"></img>
        </div>
      </div>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={g7} alt="gallery-img"></img>
        </div>
        <div className="gallery-item">
          <img src={g8} alt="gallery-img"></img>
        </div>
        <div className="gallery-item">
          <img src={g9} alt="gallery-img"></img>
        </div>
      </div>
    </div>
  );
}

export default Page4;

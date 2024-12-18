import React, { useState } from "react";
import "./styles.css"; // Arquivo CSS para estilização
import fotoCabine from "../../assets/img/bakery.png";

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Preview" className="lightbox-image" />
        <button className="lightbox-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

const Galeria = () => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    fotoCabine,
    fotoCabine,
    fotoCabine
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div>
      <h1>Galeria</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={` Imagem ${index + 1}` }
            className="gallery-image"
            onClick={() => openLightbox(img)}
          />
        ))}
      </div>
      {isLightboxOpen && <Lightbox image={currentImage} onClose={closeLightbox} />}
    </div>
  );
};

export default Galeria;
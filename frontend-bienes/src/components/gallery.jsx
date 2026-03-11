import { useState } from "react"
import "./gallery.css"

function Gallery({ images }) {

  const [selectedImage, setSelectedImage] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!Array.isArray(images) || images.length === 0) {
    return <p>Sin imágenes disponibles</p>
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="gallery">

        {images.slice(0,5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagen ${index}`}
            className={`gallery-img img-${index}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}

        <button
          className="show-all-btn"
          onClick={() => {
            setShowAll(true)
            setCurrentIndex(0)
          }}
        >
          📷 Mostrar todas las fotos
        </button>

      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="vista grande"/>
        </div>
      )}

      {showAll && (
        <div className="gallery-fullscreen">

          <button className="close-btn" onClick={() => setShowAll(false)}>
            ✕
          </button>

          <button className="nav-btn left" onClick={prevImage}>
            ◀
          </button>

          <img
            src={images[currentIndex]}
            className="fullscreen-image"
            alt="propiedad"
          />

          <button className="nav-btn right" onClick={nextImage}>
            ▶
          </button>

        </div>
      )}
    </>
  )
}

export default Gallery
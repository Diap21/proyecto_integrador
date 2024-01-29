import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([
    { id: 'almuerzo', name: 'Almuerzo', src: 'images/Almuerzo.jpg', alt: 'Almuerzo', display: true },
    // Agrega más imágenes con el mismo formato
  ]);

  useEffect(() => {
    const handleSearch = (e) => {
      if (e.key === 'Enter') {
        const value = searchValue.toLowerCase();
        const filteredImages = images.map((image) => ({
          ...image,
          display: image.name.toLowerCase().includes(value),
        }));
        setImages(filteredImages);
      }
    };

    const resetSearch = () => {
      setSearchValue('');
      const resetImages = images.map((image) => ({
        ...image,
        display: true,
      }));
      setImages(resetImages);
    };

    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keyup', handleSearch);

    return () => {
      // Limpia el evento al desmontar el componente
      searchInput.removeEventListener('keyup', handleSearch);
    };
  }, [searchValue, images]);

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="images">
        {images.map((image) => (
          <div key={image.id} className="image-box" style={{ display: image.display ? 'block' : 'none' }}>
            <img src={image.src} alt={image.alt} />
            <h6>{image.name}</h6>
          </div>
        ))}
      </div>
      <button onClick={resetSearch}>Restablecer búsqueda</button>
    </div>
  );
};

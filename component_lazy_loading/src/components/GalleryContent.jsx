import React from 'react';

function GalleryContent({ photos }) {
  setInterval(() => {
    console.log(123);
  }, 2000);
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default GalleryContent;

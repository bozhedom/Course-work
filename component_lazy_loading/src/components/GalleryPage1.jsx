import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryContent from './GalleryContent';

function GalleryPage1() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_limit=3')
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="gallery-page">
      <h2>Gallery Page 1</h2>
      <GalleryContent photos={photos} />
    </div>
  );
}

export default GalleryPage1;

import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';

const GalleryContent = lazy(() => import('./GalleryContent'));

function LazyGalleryPage1() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_start=3&_end=6')
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="gallery-page">
      <h2>Lazy Gallery Page 1</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <GalleryContent photos={photos} />
      </Suspense>
    </div>
  );
}

export default LazyGalleryPage1;

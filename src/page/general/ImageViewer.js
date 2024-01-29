import React from 'react';

const ImageViewer = ({ imageUrl, altText }) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} style={{ width: '100%', maxWidth: '100px', loading: 'lazy', height: 'auto' }} />
    </div>
  );
};

export default ImageViewer;

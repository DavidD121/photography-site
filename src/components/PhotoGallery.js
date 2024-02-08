
const PhotoGallery = ({images}) => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Sport ${index}`}
            style={{ maxWidth: '200px', maxHeight: '200px', margin: '8px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
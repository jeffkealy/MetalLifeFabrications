import galleryStyles from "../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <div id={galleryStyles.galleryPage}>
      <h1 className={`${galleryStyles.header} header`}>
        <span>Gallery</span>
      </h1>
    </div>
  );
};

export default Gallery;

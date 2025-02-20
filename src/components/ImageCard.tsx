import style from "./ImageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
  onImageClick: (src: string, alt: string) => void;
  elem: {
    urls: { regular: string };
    alt_description: string;
  };
}

const ImageCard = ({ src, alt, onImageClick, elem }: ImageCardProps) => {
  return (
    <div className={style.galleryItem}>
      <img
        src={src}
        alt={alt}
        onClick={() => {
          onImageClick(elem.urls.regular, elem.alt_description);
        }}
      />
    </div>
  );
};

export default ImageCard;

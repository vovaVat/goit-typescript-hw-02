import ImageCard from "./ImageCard";
import style from "./ImageGallery.module.css";

interface ImageGalleryProps {
  resultList: Image[];
  onImageClick: (src: string, alt: string) => void;
}

const ImageGallery = ({ resultList, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={style.list}>
      {resultList.map((elem) => (
        <li key={elem.id}>
          <ImageCard
            src={elem.urls.small}
            alt={elem.alt_description}
            elem={elem}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

import ImageCard from "./ImageCard";
import style from "./ImageGallery.module.css";

interface ImageItem {
  id: string;
  urls: { small?: string; regular: string };
  alt_description: string;
}

interface ImageGalleryProps {
  resultList: ImageItem[];
  onImageClick: (src: string, alt: string) => void;
}

const ImageGallery = ({ resultList, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={style.list}>
      {resultList.map((elem) => (
        <li key={elem.id}>
          <ImageCard
            src={elem.urls.small || elem.urls.regular}
            alt={elem.alt_description || "No description"}
            elem={elem}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

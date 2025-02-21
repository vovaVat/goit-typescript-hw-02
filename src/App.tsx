import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import axios from "axios";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreButton from "./components/LoadMoreButton";
import ImageModal from "./components/ImageModal";

interface ImageData {
  // ✅ Исправлено название интерфейса
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

const ACCESS_KEY = "8wSe26Bt4kGOKyc2olibwR4F1t4-6PNqlbaOx0Pz3kg";

function App() {
  const [inp, setInp] = useState<string>("");
  const [result, setResult] = useState<ImageData[]>([]); // ✅ Используем новое имя интерфейса
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (inp) {
      async function fetchInp() {
        setError(false);
        try {
          setLoading(true);
          const response = await axios.get<{
            results: ImageData[];
            total_pages: number;
          }>(`https://api.unsplash.com/search/photos`, {
            params: {
              query: inp,
              page: page,
              per_page: 12,
              client_id: ACCESS_KEY,
            },
          });
          setResult((prevResult) => [...prevResult, ...response.data.results]);
          setTotalPages(response.data.total_pages);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }

      fetchInp();
    }
  }, [inp, page]);

  const handleSubmit = (input: string) => {
    setInp(input);
    setPage(1);
    setResult([]);
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {result.length > 0 && (
        <ImageGallery resultList={result} onImageClick={handleImageClick} />
      )}
      {error && <ErrorMessage />}
      {page < totalPage && <LoadMoreButton click={handleClick} />}
      {loading && <Loader />}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

export default App;

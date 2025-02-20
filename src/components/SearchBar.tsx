import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  return (
    <header className={style.head}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;
          const inputElement = form.search as HTMLInputElement;
          const inp = inputElement.value.trim();
          if (inp) {
            onSubmit(inp);
          } else {
            toast.error("Write something");
          }
          inputElement.value = "";
        }}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <div className={style.inputWrapper}>
          <button type="submit" className={style.searchButton}>
            <IoSearch />
          </button>
          <input
            type="text"
            name="search"
            placeholder="Search images and photos"
            className={style.searchInput}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;

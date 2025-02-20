import style from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  click: () => void;
}

const LoadMoreButton = ({ click }: LoadMoreButtonProps) => {
  return (
    <button className={style.button} onClick={click}>
      Load more
    </button>
  );
};

export default LoadMoreButton;

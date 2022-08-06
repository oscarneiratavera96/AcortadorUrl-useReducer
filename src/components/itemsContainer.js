import style from "./itemsContainer.module.css";

const ItemsContainer = ({ children }) => {
  return <div clasname={style.ItemsContainer}>{children}</div>;
};

export default ItemsContainer;

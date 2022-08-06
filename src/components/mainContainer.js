import style from "./mainContainer.module.css";

const MainContainer = ({ children }) => {
  return <div className={style.mainContainer}>{children}</div>;
};

export default MainContainer;

import style from "./loader.module.css";

const Loader = ({ item, id }) => {
  if (item === null) {
    return <Container>Loading...</Container>;
  }
  if (item === undefined) {
    return <Container>No url found {id}</Container>;
  }
  return <Container>Redirecting to {item.url}...</Container>;
};

export default Loader;

function Container({ children }) {
  return <div className={style.loaderContainer}>{children}</div>;
}

import style from "./item.module.css";

const Item = ({ item }) => {
  return (
    <div className={style.itemContainer}>
      <div className={style.itemInfroContainer}>
        <span className={style.itemInfoTag}>URL: </span>
        <span>{item.url} </span>
      </div>

      <div className={style.itemInfroContainer}>
        <span className={style.itemInfoTag}>Short URL: </span>
        <span>
          <a
            className={style.itemInfoContainerHiper}
            href={`http://localhost:3000/u/${item.shortUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            http://localhost:3000/u/{item.shortUrl}
          </a>
        </span>
      </div>

      <div className={style.itemInfroContainer}>
        <span className={style.itemInfoTag}>VIEWS: </span>
        <span>{item.views} views </span>
      </div>
    </div>
  );
};

export default Item;

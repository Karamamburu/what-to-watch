type GenreItemProps = {
  genreName: string;
}

function GenreItem({genreName}: GenreItemProps) {
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">
        {genreName}
      </a>
    </li>
  );
}

export default GenreItem;

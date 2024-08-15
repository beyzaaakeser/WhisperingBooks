import { Link } from 'react-router-dom';
import './styles/card.scss';
const Card = ({ book }) => {
  return (
    <div className="card shadow">
      <img
        className="rounded img-fluid"
        src={book.volumeInfo?.imageLinks?.smallThumbnail}
      />

      <div className="card-body ">
        <div className="flex flex-nowrap gap-2">
          <span>Name</span> <h4>{book.volumeInfo.title}</h4>
        </div>
        <div className="flex flex-nowrap gap-2 mt-3">
          <span>Author</span>
          <h5>{book.volumeInfo.authors}</h5>
        </div>
      </div>

      <Link to={`/detail/${book.id}`} className="text-md px-2 py-1 detail-btn">
        Details
      </Link>
    </div>
  );
};

export default Card;

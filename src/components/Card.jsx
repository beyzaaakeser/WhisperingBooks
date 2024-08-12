import { Link } from 'react-router-dom';
import "./styles/card.scss"
const Card = ({ book }) => {
  return (
    <div className="card shadow p-2">

      <img
        className="rounded img-fluid"
        src={book.volumeInfo?.imageLinks?.smallThumbnail}
      />

      <div className="card-body ">
        <h4>{book.volumeInfo.title}</h4> 
        <h5>{book.volumeInfo.authors}</h5>
      </div>
      <Link to={`/detil/${book.id}`} className="px-2 py-1 border-indigo-600 border rounded bg-indigo-100 mt-10">
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;

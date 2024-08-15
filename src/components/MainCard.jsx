import React from 'react';
import './styles/maincard.scss';
import { Link } from 'react-router-dom';
const MainCard = ({ books }) => {
  function getRandomTwoBooks(books) {
    const shuffled = books.sort(() => 0.5 - Math.random()); // Array'i karıştır
    return shuffled.slice(0, 2); // İlk iki elemanı al
  }

  // Örnek kullanım
  const randomBooks = getRandomTwoBooks(books);
 

  return (
    <div className="main-container">
      {randomBooks?.map((book) => (
        <div key={book.id} className="main-info ">
          <div className="main-img">
            <img
              src={book.volumeInfo?.imageLinks?.smallThumbnail}
              
              alt=""
            />
          </div>

          <div className="flex flex-col justify-around h-full infos ">
            <div className="flex flex-nowrap ">
              <h3 className="title">{book.volumeInfo.title}</h3>
            </div>
            <div className="flex flex-nowrap  ">
              <h5>Author</h5>{' '}
              <span className="author">: {book.volumeInfo.authors}</span>
            </div>
            <div className="flex flex-nowrap  ">
              <h5>Language </h5>
              <span className=" uppercase ">: {book.volumeInfo.language}</span>
            </div>
            <div className="flex flex-nowrap">
              <h5>Page</h5> <span>: {book.volumeInfo.pageCount}</span>{' '}
            </div>
            <div className="flex flex-nowrap">
              <h5>Date</h5> <span>: {book.volumeInfo.publishedDate}</span>{' '}
            </div>
            <div>
              <p className="desc">{book.volumeInfo?.description}</p>
            </div>
            <Link
              to={`/detail/${book.id}`}
              className="text-md px-2 py-1 detail-btn"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCard;

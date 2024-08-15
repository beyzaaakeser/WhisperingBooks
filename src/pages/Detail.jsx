import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Detail.scss';
import Container from '../components/Container';
import Loader from '../components/Loader';

const Detail = () => {
  const params = useParams();
  const [book, setBook] = useState(null);

  const apiURL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const url = `${apiURL}/${params.id}`;
    axios
      .get(url)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(book);

  return (
    <Container>
      {book ? (
        <div className=" flex flex-col gap-6 detail-container">
          <div className=" flex flex-col lg:flex-row gap-10  ">
            <div className="flex items-center justify-center">
              <img
                src={book?.volumeInfo?.imageLinks?.smallThumbnail}
                className="detail-img"
                alt=""
              />
            </div>

            <table className="table-auto border-collapse hover:border-collapse border border-slate-600">
              <tbody className="">
                <BookInfo title={'Name'} value={book?.volumeInfo?.title} />
                <BookInfo
                  title={'Author'}
                  value={book?.volumeInfo?.authors[0]}
                />
                <BookInfo
                  title={'Category'}
                  value={book?.volumeInfo?.categories[0]}
                />
                <BookInfo
                  title={'Language'}
                  value={book?.volumeInfo?.language}
                />
                <BookInfo title={'Page'} value={book?.volumeInfo?.pageCount} />
                <BookInfo
                  title={'Published Date'}
                  value={book?.volumeInfo?.publishedDate}
                />
                <BookInfo
                  title={'Publisher'}
                  value={book?.volumeInfo?.publisher}
                />
              </tbody>
            </table>
          </div>

          <div className="desc">
            <p className="">{book?.volumeInfo?.description}</p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Detail;

const BookInfo = ({ title, value }) => {
  return (
    <tr>
      <td className=" border border-slate-300">{title}</td>
      <td className=" border border-slate-300">{value}</td>
    </tr>
  );
};

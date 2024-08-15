import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Detail.scss';
import Container from '../components/Container';

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
            <tbody className=''>
              <tr>
                <td className=" border border-slate-300">Name</td>
                <td className=" border border-slate-300">
                  {book?.volumeInfo?.title}
                </td>
              </tr>
              <tr>
                <td className=" border border-slate-300">Author</td>
                <td className=" border border-slate-300">
                  {book?.volumeInfo?.authors[0]}
                </td>
              </tr>
              <tr>
                <td className=" border border-slate-300">Category</td>
                <td className=" border border-slate-300">
                  {book?.volumeInfo?.categories[0]}
                </td>
              </tr>
              <tr>
                <td className=" border border-slate-300">Language</td>
                <td className="uppercase border border-slate-300">
                  {book?.volumeInfo?.language}
                </td>
              </tr>
              <tr>
                <td className=" border border-slate-300">Page</td>
                <td className=" border border-slate-300">
                  {book?.volumeInfo?.pageCount}
                </td>
              </tr>

              <tr>
                <td className=" border border-slate-300">Published Date</td>
                <td className=" border border-slate-300">
                  {book?.volumeInfo?.publishedDate}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300">Publisher</td>
                <td className="border border-slate-300">{book?.volumeInfo?.publisher}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="desc">
          <p className=''>{book?.volumeInfo?.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default Detail;

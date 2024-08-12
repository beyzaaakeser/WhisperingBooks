import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import './styles/home.scss';
import Container from '../components/Container';

const Home = () => {
  const [books, setBooks] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=roman&printType=books&maxResults=20&key=${apiKey}`;

    axios
      .get(url)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  }, []);
  console.log(books);
  return (
    <Container>
      <div className="home my-5">
        <div className="cards-container">
          {books?.map(
            (book) =>
              book.volumeInfo?.imageLinks?.smallThumbnail && (
                <Card key={book.id} book={book} />
              )
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;

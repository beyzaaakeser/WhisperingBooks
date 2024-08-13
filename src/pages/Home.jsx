import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import './styles/home.scss';
import Container from '../components/Container';

const Home = () => {
  const [books, setBooks] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const url = `${apiURL}?q=web&printType=books&maxResults=20&key=${apiKey}`;
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
              book.volumeInfo?.imageLinks?.smallThumbnail &&
              book.volumeInfo.authors && <Card key={book.id} book={book} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;

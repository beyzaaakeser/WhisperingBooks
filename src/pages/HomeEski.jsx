import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import './styles/home.scss';
import Container from '../components/Container';
import MainCard from '../components/MainCard';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;

  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL'den query parametresini alıyoruz
  const query = searchParams.get('query') || '';

  // İlk yükleme ve query parametresi değiştiğinde API çağrısı
  useEffect(() => {
    if (query.trim() !== '') {
      const url = `${apiURL}?q=${query}&maxResults=20&printType=books&key=${apiKey}`;
      axios
        .get(url)
        .then((res) => setBooks(res.data.items))
        .catch((err) => console.log(err));
    }
  }, [query]);

  // Input değiştiğinde query parametresini URL'ye ekliyoruz
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Eğer input boş ise, query parametresini URL'den kaldırıyoruz
    if (value.trim() === '') {
      setSearchParams({});
    } else {
      setSearchParams({ query: value });
    }
  };

  return (
    <Container>
      <div className="flex justify-end mt-6">
        <input
          type="text"
          className="lg:w-[400px] block outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-700 sm:text-sm sm:leading-6"
          placeholder="Search Books"
          value={query} // URL'den alınan query'yi input'ta gösteriyoruz
          onChange={handleInputChange}
        />
      </div>
      {books && <MainCard books={books} />}

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

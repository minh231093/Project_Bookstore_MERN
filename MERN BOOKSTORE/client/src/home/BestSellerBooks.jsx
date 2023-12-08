import { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(4, 8)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best seller books" />
    </div>
  );
};

export default BestSellerBooks;

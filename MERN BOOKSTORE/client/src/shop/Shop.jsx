import { useEffect, useState } from "react";
import { Card, Pagination } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 12;
  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const startIndex = (currentPage - 1) * booksPerPage;
  const visibleBooks = books.slice(startIndex, startIndex + booksPerPage);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">Danh mục sách</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 ">
        {visibleBooks.map((book) => (
          <Link key={book._id} to={`/book/${book._id}`}>
            <Card key={book._id}>
              <img src={book.imageURL} alt="" className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-5">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 description p-5">
                {book.bookDescription}
              </p>

              <button className="bg-blue-700 hover:bg-blue-600 font-semibold text-white py-2 rounded transition-colors duration-300">
                Mua sách
              </button>
            </Card>
          </Link>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(books.length / booksPerPage)}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Shop;

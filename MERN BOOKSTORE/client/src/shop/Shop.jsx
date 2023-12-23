import React from 'react'

const Shop = () => {
  return (
    <div>
      <div>
        <div className="input-group">
          <div className="form-outline" data-mdb-input-init>
            <input
              type="text"
              id="form1"
              className="form-control"
              value={searchTitle}
              onChange={onChangeSearchTitle}
              placeholder="Tìm theo tên sách"
            />
          </div>
          <button
            onClick={handleSearchByTitle}
            type="button"
            className="btn btn-primary ml-1"
            data-mdb-ripple-init
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* tìm theo danh mục */}
      <div className="col-md-6">
        <div className="input-group">
          <div className="form-outline" data-mdb-input-init>
            <select
              value={searchCategory}
              onChange={onChangeSearchCategory}
              className="form-control ml-1 p-2 border border-gray-300"
            >
              <option value="">Tất cả</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSearchByCategory}
            type="button"
            className="btn btn-primary ml-2"
            data-mdb-ripple-init
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {visibleBooks.map((book) => (
          <Link key={book._id} to={{ pathname: `/book/${book._id}` }}>
            <Card
              key={book._id}
              className="max-w-xs auto text-center"
              style={{ height: "650px" }}
            >
              <img src={book.imageURL} alt="" className="h-96" />
              <h5
                className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white book-card"
                style={{ textDecoration: "none" }}
              >
                <p>{book.bookTitle}</p>
              </h5>
              <p
                className="font-normal text-gray-700 dark:text-gray-400 description book-card px-1"
                style={{ textDecoration: "none" }}
              >
                {book.bookDescription}
              </p>

              <button
                className="bg-blue-700 hover:bg-blue-600 font-semibold text-white py-2 rounded transition-colors duration-300 book-card"
                style={{ textDecoration: "none" }}
              >
                Xem
              </button>
            </Card>
          </Link>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />

          {[...Array(Math.ceil(books.length / booksPerPage)).keys()].map(
            (page) => (
              <Pagination.Item
                key={page + 1}
                active={page + 1 === currentPage}
                onClick={() => onPageChange(page + 1)}
              >
                {page + 1}
                <span className="visually-hidden">(current)</span>
              </Pagination.Item>
            )
          )}

          <Pagination.Next
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(books.length / booksPerPage)}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Shop;

import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { Button, Textarea, Label, TextInput } from "flowbite-react";

const EditBook = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPdfUrl,
  } = useLoaderData();

  const bookCategories = [
    "Science",
    "Fiction",
    "History",
    "Literature",
    "Art",
    "Classic",
    "Fantasy",
    "Technology",
    "Adventure",
    "Travel",
    "Novel",
    "Religion",
    "Mystery",
    "Crime",
    "Children",
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    category || bookCategories[0]
  );

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
    };

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    }).then((res) =>
      res.json().then((data) => {
        alert("Book Updated Successfully");
        form.reset();
      })
    );
  };

  return (
    <div className="px-4 my-12 w-full max-w-2xl">
      <h2 className="mb-8 text-3xl font-bold">Cập nhật thông tin sách</h2>
      <form onSubmit={handleUpdate} className="space-y-12">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="bookTitle"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tên sách
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="bookTitle"
                      id="bookTitle"
                      required
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Nhập tên sách"
                      defaultValue={bookTitle}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="authorName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tác giả
                </label>
                <div className="mt-2">
                  <input
                    id="authorName"
                    name="authorName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={authorName}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="imageURL"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hình ảnh minh họa
                </label>
                <div className="mt-2">
                  <input
                    id="imageURL"
                    name="imageURL"
                    type="text"
                    required
                    defaultValue={imageURL}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="inputState"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Thể loại
                </label>
                <div className="mt-2">
                  <select
                    id="inputState"
                    name="category"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    {bookCategories.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="bookDescription"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tóm tắt nội dung
                </label>
                <div className="mt-2">
                  <textarea
                    id="bookDescription"
                    name="bookDescription"
                    rows="6"
                    required
                    type="text"
                    defaultValue={bookDescription}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="bookPdfUrl"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Link PDF sách
                </label>
                <div className="mt-2">
                  <input
                    id="bookPdfUrl"
                    name="bookPdfUrl"
                    type="url"
                    required
                    defaultValue={bookPdfUrl}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Lưu
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBook;

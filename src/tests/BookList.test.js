import React from 'react';
import { render } from '@testing-library/react';

import BookList from "../components/BookList";

test("renders post data", () => {
  const mockBooks = {
    books: [
      {
        id: 1,
        title: "Mock title",
        author: "Mock author",
        category: "Mock category",
        image: "Mock url image"
      }
    ]
  };

  const { getByText, getByTestId } = render(
      <BookList
        books={mockBooks.books}
        onView={()=> jest.mock()}
        onDelete={()=> jest.mock()}
        />
    );
  const title = getByText(/Mock title/);
  const author = getByText(/Mock author/);
  const category = getByText(/Mock category/);
  const viewBook = getByTestId(/view-book/i);
  const deleteBook = getByTestId(/delete-book/i);

  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(category).toBeInTheDocument();
  expect(viewBook.textContent).toBe("View Book");
  expect(deleteBook.textContent).toBe("Delete Book");
  expect(document.querySelector("img").getAttribute("src")).toBe("Mock url image")

});
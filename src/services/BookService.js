const GOOGLE_API_URL = process.env.REACT_APP_GOOGLE_BOOKS_API_URL;
const READ_API_URL = process.env.REACT_APP_READ_API_URL;
const WRITE_API_URL = process.env.REACT_APP_WRITE_API_URL;

export async function getBooksFromWeb(queryParam) {
  const url = `${GOOGLE_API_URL}${queryParam}`;
  const response = await fetch(url, { method: 'GET' });

  return handleErrors(response);
}

export async function getBooks(pageNumber, pageSize, sortBy) {
  const url = `${READ_API_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}`;
  const response = await fetch(url, { method: 'GET' });

  return handleErrors(response);
}

export async function createBook(book) {
  const response = await fetch(WRITE_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  });

  return handleErrors(response);
}

export async function deleteBook(id) {
  const url = `${WRITE_API_URL}/${id}`;
  const response = await fetch(url, { method: 'DELETE' });

  return handleErrors(response);
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
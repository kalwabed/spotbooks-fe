export const fetchBooks = async () => {
  const fetchedBooks = await fetch('http://localhost:8080/books')
  const books = await fetchedBooks.json()
  return books
}

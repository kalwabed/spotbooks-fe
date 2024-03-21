import BookList from "@/components/book-list";
import { fetchBooks } from "@/utils/fetcher";
import { Container } from "@chakra-ui/react";

export default async function Home() {
  const books = await fetchBooks()

  return (
    <Container maxW="container.lg">
      <BookList books={books} />
    </Container>
  );
}

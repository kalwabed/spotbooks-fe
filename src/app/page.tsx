'use client'

import BookList from "@/components/book-list";
import { fetchBooks } from "@/utils/fetcher";
import { Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data} = useQuery({ queryKey: ['books'], queryFn: fetchBooks})

  return (
    <Container maxW="container.lg">
      <BookList books={data} />
    </Container>
  );
}

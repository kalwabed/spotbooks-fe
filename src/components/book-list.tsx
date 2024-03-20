'use client'

import { fetchBooks } from "@/utils/fetcher";
import { Book } from "@/utils/types";
import { Button, Text, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, Image, Stack, Flex } from "@chakra-ui/react";
import { useQuery } from '@tanstack/react-query'

export default function BookList({ initialBooks }: { initialBooks?: Book[] }) {
  const { data } = useQuery<Book[]>({ queryKey: ['books'], queryFn: fetchBooks, initialData: initialBooks ?? [] })

  return (
    <Flex wrap="wrap" gap={8}>
      {data?.map(book => (
        <Card key={book.id} maxW='sm'>
          <CardBody>
            <Image
              src='https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg'
              alt='a book'
              borderRadius='lg'
              mx='auto'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{book.title}</Heading>
              <Text>
                {book.tags.toString()}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ${book.point}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

      ))}
    </Flex>
  );
}

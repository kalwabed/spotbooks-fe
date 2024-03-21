'use client'

import { tokenAtom } from "@/store/auth";
import { kayi } from "@/utils/fetcher";
import { Book } from "@/utils/types";
import { Button, Text, Card, CardBody, CardFooter, Container, Divider, Heading, Image, Stack, Flex, useToast } from "@chakra-ui/react";
import { useQueryClient } from '@tanstack/react-query'
import { useAtomValue } from "jotai";

export default function BookList({ books }: { books?: Book[] }) {
  const memberId = useAtomValue(tokenAtom)
  const toast = useToast()
  const qClient = useQueryClient()

  const orderBook = async (bookId: string) => {
    if (!memberId) {
      toast({
        title: 'Failed to order',
        description: 'Please login first!',
        status: 'error'
      })
      return
    }
    await kayi.post('orders', {
      json: {
        qty: 1,
        bookId,
        memberId,
      }
    })
    toast({
      title: 'Order proceed',
      status: 'success'
    })
    qClient.invalidateQueries()
  }

  return (
    <Flex wrap="wrap" gap={8}>
      {books?.map(book => (
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
                {book.writer}
              </Text>
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
            <Button onClick={() => orderBook(book.id)} variant='solid' colorScheme='blue'>
              Buy now
            </Button>
          </CardFooter>
        </Card>

      ))}
    </Flex>
  );
}

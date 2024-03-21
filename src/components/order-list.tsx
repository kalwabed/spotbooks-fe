'use client'

import { Book, Order } from "@/utils/types";
import { Button, Text, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Flex, useToast, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useQueryClient } from '@tanstack/react-query'
import ky from "ky";

export default function OrderList({ orders }: { orders?: (Order & { book: Book })[] }) {
  const toast = useToast()
  const qClient = useQueryClient()

  const refundBook = async (orderId: string) => {
    await ky.delete(`http://localhost:8080/orders/${orderId}`)
    toast({
      title: 'Order refunded',
      status: 'success'
    })
    qClient.invalidateQueries()
  }

  return (
    <Flex wrap="wrap" gap={8}>
      {orders?.length === 0 && (
        <Alert status='info'>
          <AlertIcon />
          <AlertTitle>You have no orders yet!</AlertTitle>
          <AlertDescription>Let&apos;s order something and go home :).</AlertDescription>
        </Alert>
      )}
      {orders?.map(order => (
        <Card key={order.id} maxW='sm'>
          <CardBody>
            <Image
              src='https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg'
              alt='a book'
              borderRadius='lg'
              mx='auto'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{order.book.title}</Heading>
              <Text>
                {order.book.writer}
              </Text>
              <Text>
                {order.book.tags.toString()}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ${order.book.point}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button onClick={() => refundBook(order.id)} variant='outline'>
              Refund
            </Button>
          </CardFooter>
        </Card>

      ))}
    </Flex>
  );
}

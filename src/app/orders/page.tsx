'use client'

import BookList from "@/components/book-list"
import OrderList from "@/components/order-list"
import { tokenAtom } from "@/store/auth"
import { getMemberOrders } from "@/utils/fetcher"
import { Container } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useAtomValue } from "jotai"

export default function MyOrderPage() {
  const memberId = useAtomValue(tokenAtom)
  const { data } = useQuery({ queryKey: ['orders', memberId], queryFn: () => getMemberOrders(memberId), enabled: Boolean(memberId) })

  return (
    <Container maxW="container.lg">
      <OrderList orders={data} />
    </Container>
  )
}

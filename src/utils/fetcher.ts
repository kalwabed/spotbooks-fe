import ky from "ky"
import { Book, Member, Order } from "./types"

export const kayi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL
})

export const fetchBooks = async () => {
  const books = await kayi.get('books').json<Book[]>()
  return books
}

export const getMemberById = async (id: string) => {
  const member = await kayi.get(`members/${id}`).json<Member>()
  return member
}

export const getMemberOrders = async (userId: string) => {
  const orders = await kayi.get(`orders/member/${userId}`).json<(Order & { book: Book })[]>()
  return orders
}

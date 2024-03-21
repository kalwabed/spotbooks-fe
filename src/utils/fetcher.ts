import ky from "ky"
import { Book, Member, Order } from "./types"

export const fetchBooks = async () => {
  const books = await ky.get('http://localhost:8080/books').json<Book[]>()
  return books
}

export const getMemberById = async (id: string) => {
  const member = await ky.get(`http://localhost:8080/members/${id}`).json<Member>()
  return member
}

export const getMemberOrders = async (userId: string) => {
  const orders = await ky.get(`http://localhost:8080/orders/member/${userId}`).json<(Order & { book: Book })[]>()
  return orders
}

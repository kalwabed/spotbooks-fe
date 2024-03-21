import ky from "ky"
import { Book, Member } from "./types"

export const fetchBooks = async () => {
  const books = await ky.get('http://localhost:8080/books').json<Book[]>()
  return books
}

export const getMemberById = async (id: string) => {
  if (!id) {
    return {}
  }
  const member = await ky.get(`http://localhost:8080/members/${id}`).json<Member>()
  return member
}

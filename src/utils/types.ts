export interface Book {
  id: string
  title: string
  writer: string
  point: number
  tags: string[]
}

export interface Member {
  id: string
  username: string
  point: number
}

export interface Order {
  id: string
  qty: number
  book_id: string
  member_id: string
}

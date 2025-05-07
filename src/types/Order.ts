export interface Order {
  id: string
  quantity: number
  method: {
    type: 'credit_card' | 'cash' | ''
    information: string
  }
}

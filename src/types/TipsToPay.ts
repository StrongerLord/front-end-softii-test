export interface TipsToPay {
  id: string
  quantity: number
  method: {
    type: 'credit_card' | 'cash'
    information: string
  }
}

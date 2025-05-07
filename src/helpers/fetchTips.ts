import { type Order } from '@/types/Order'
export const fetchNewTip = async (order: Order[]) => {
  if (!order || order.length === 0) {
    throw new Error('No orders provided')
  }
  try {
    const response = await fetch('https://api.softii-backend.memz.live/tips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    alert('Tips fetched successfully')
  } catch (error) {
    console.error('Error fetching tips:', error)
    alert('Error fetching tips')
    throw error
  }
}

export const fetchAllTips = async () => {
  try {
    const response = await fetch('https://api.softii-backend.memz.live/tips', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching all tips:', error)
    alert('Error fetching all tips')
    throw error
  }
}

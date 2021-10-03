import { useCart } from './../hooks/useCart'

export const isItemInCart = (id) => {
  const { items } = useCart()
  return items.some(item => item.id === id)
}


import { useCart } from './../hooks/useCart'
export const Cart = () => {
  const { items } = useCart()
  return (
    <div className="container bg-light mb-4">
      <h2>Cart</h2>
      <span>items:{items.length}</span>
    </div>
  )
}

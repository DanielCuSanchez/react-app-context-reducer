
import { Cart } from './../Componentes/Cart'
import { Navbar } from './../Componentes/Navbar'
import { useCart } from './../hooks/useCart'
import { ListCartPage } from './../Componentes/ListCartPage'
export const CartPage = () => {
  const { items } = useCart()
  return (
    <>
      <Navbar />
      <Cart />
      <div className="container">
        <div className="row">
          <ul className="list-group">
            {
              items.map(item => (
                <ListCartPage key={Math.random()} {...item} />
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

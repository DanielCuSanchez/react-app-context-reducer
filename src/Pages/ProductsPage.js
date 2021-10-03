import { Navbar } from '../Componentes/Navbar'
import { Cart } from './../Componentes/Cart'
import { Item } from './../Componentes/Item'
import { products } from './../Mock/index'
export const ProductsPage = () => {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <div className="container">
        <div className="row">
          {
            products.map((item) => <Item key={item.id} {...item} />)
          }
        </div>
      </div>
    </div>
  )
}

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CartPage } from './Pages/CartPage'
import { ProductsPage } from './Pages/ProductsPage'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </BrowserRouter>
  )
}

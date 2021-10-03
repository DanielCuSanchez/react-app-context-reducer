// importaciones de depedencias
import './App.css'
import { CartProvider } from './Context/cartContext'
import { Routes } from './routes'

function App() {
  return (
    <CartProvider>
      {
        <Routes />
      }
    </CartProvider>

  )
}

export default App

// module.exports = App

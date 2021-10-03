import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav justify-content-center w-100">
            <Link className="nav-link" to="/">Products</Link>
            <Link className="nav-link" to="/cart">CartPage</Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

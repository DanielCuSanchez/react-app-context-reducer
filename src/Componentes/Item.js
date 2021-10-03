import { useCart } from './../hooks/useCart'
import { isItemInCart } from './../utils/index'
export const Item = (props) => {
  const { name, img, id } = props
  const { ADD_ITEM } = useCart()

  return (
    <div className="col col-md-3">
      <div className="card">
        <div className='card-body'>
          <img src={img} className="img-responsive App-logo" />
          <h2>{name}</h2>
          <button className="btn btn-primary" disabled={isItemInCart(id)} onClick={() => ADD_ITEM({ id, name, img })} >Add to cart</button>
        </div>
      </div>
    </div>
  )
}

import { useCart } from './../hooks/useCart'
export const ListCartPage = ({ id, name, img }) => {
  const { REMOVE_ITEM } = useCart()
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="data-list">
        <img src={img} width="200" alt="" />
        <h3>{name}</h3>
        <p>ID: {id}</p>
      </div>
      <div className="data-actions">
        <button className="btn btn-danger" onClick={() => REMOVE_ITEM(id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

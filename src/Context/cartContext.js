import { useReducer, useEffect } from 'react'

const { createContext } = require('react')

const ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  INIT_APP: 'INIT_APP'
}

const initialState = {
  items: []
}

const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case ACTIONS.INIT_APP:
      return {
        ...state,
        items: [...action.payload.list]
      }
    case ACTIONS.ADD_ITEM:
      console.log('ADDING')
      return {
        ...state,
        items: [...state.items, action.payload.item]
      }
    case ACTIONS.REMOVE_ITEM:
      console.log('REMOVING')
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
  }
  return state
}

export const CartContext = createContext({
  ...initialState,
  ADD_ITEM: () => { },
  REMOVE_ITEM: () => { },
  INIT_APP: () => {}
})

export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const checkLocalStorage = async() => {
      try {
        const data = window.localStorage.getItem('LIST_APP')
        if (data) {
          const initList = await JSON.parse(data)
          dispatch({
            type: ACTIONS.INIT_APP,
            payload: {
              list: initList
            }
          })
        } else {
          console.log('INIT STATE DEFAULT')
        }
      } catch (error) {
        console.log('😀', error)
      }
    }
    checkLocalStorage()
  }, [])

  useEffect(() => {
    window.localStorage.setItem('LIST_APP', JSON.stringify(state.items))
    console.log(JSON.parse(window.localStorage.getItem('LIST_APP')).length)
  }, [state])

  const ADD_ITEM = (data) => {
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: {
        item: data
      }
    })
  }

  const REMOVE_ITEM = (data) => {
    dispatch({
      type: ACTIONS.REMOVE_ITEM,
      payload: {
        id: data
      }
    })
  }
  const { children } = props

  const values = {
    ...state,
    ADD_ITEM,
    REMOVE_ITEM
  }

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider >
  )
}

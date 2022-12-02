import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './style/cartScreen.css'
import { setCartGlobal } from '../../store/slices/cart.slice'

const CartScreen = () => {

  const cart = useSelector(state => state.cart)
  
  const dispatch = useDispatch()

  const checkout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      "street": "Green St. 1456",
      "colony": "Southwest",
      "zipCode": 12345,
      "city": "USA",
      "references": "Some references"
    }
    axios.post(URL, obj, getConfig())
    .then(res => {
      console.log(res)
      dispatch(setCartGlobal(null))
    })
    .catch(err => console.log(err))
  }
  
  let resultadoTotal = 0
  let resultadoMulti = 0

  cart?.map(e => {
    resultadoMulti = e?.price * e.productsInCart.quantity
    resultadoTotal = resultadoTotal + resultadoMulti
  })

  return (  
    <div  className='cart'>
      <h3 className='cart__title'>My Cart</h3>
      <section className='cart__container'>
        {
          cart?.map(productCart => (
            <CartInfo key={productCart.id} productCart={productCart}/>
          ))
        }
      </section>
      <p>Total : {resultadoTotal}.00</p>
      <button onClick={checkout} className='cart__btn'>checkout</button>
    </div>
    
  )
}

export default CartScreen
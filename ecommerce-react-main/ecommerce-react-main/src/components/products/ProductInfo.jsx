import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import getConfig from '../../utils/getConfig'
import { getAllProductsCart } from '../../store/slices/cart.slice'

const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)

    const dispatch = useDispatch()

    const minusOne = () => {
        const minus = counter - 1
        minus >= 1 && setCounter(minus)
    }
    const plusOne = () => setCounter(counter + 1)

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

  const addProductCart = () => {
    const objProduct={
      id: product.id,
      quantity: counter
    }
   
    axios.post(URL, objProduct, getConfig())
    .then(res => {
      console.log(res)
      dispatch(getAllProductsCart())
    })
    .catch(err => console.log(err))
  }
  return (
    <article className='product-info'>
        <h2 className='product-info__title'>{product?.title}</h2>
        <p className="product-info_description">{product?.description}</p>
        <div className='card-product__price-container'>
            <h3 className='card-product__price-label product-info__label'>Price</h3>
            <p className='card-product__price-number product-info__number'>$ {product?.price}</p>
        </div>
        <div className="product-info__quantity-container">
            <div onClick={minusOne} className="product-info__minus">-</div>
            <div className='product-info__counter'>{counter}</div>
            <div onClick={plusOne} className="product-info__plus">+</div>
        </div>
        <button onClick={addProductCart} className='product-info__btn'>Add to Card <i className="fa-solid fa-cart-plus"></i></button>
    </article>
  )
}

export default ProductInfo
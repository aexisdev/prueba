import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import {getAllProductsCart} from '../../store/slices/cart.slice'

const CardProducts = ({product}) => {

  const navigate = useNavigate()

  const disptach = useDispatch()

  const carId = () => {
    navigate(`/products/${product.id}`)
  }

  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

  const addProductCart = e => {
    e.stopPropagation()
    const objProduct={
      id: product.id,
      quantity: 1
    }
    axios.post(URL, objProduct, getConfig())
    .then(res => {
      console.log(res)
      disptach(getAllProductsCart())
    })
    .catch(err => console.log(err))
  }

  
  return (
    <article onClick={carId} className='card-product'>
        <header className='card-product__header'>
            <img className='card-product__img-back' src={product?.productImgs[1]} alt="" />
            <img className='card-product__img' src={product?.productImgs[0]} alt="" />
        </header>
        <div className='card-product__body'>
            <h2 className='card-product__title'>{product?.title}</h2>
            <div className='card-product__price-container'>
                <h3 className='card-product__price-label'>Price</h3>
                <p className='card-product__price-number'>$ {product?.price}</p>
            </div>
            <button onClick={addProductCart} className='card-product__btn'><i className="fa-solid fa-cart-plus"></i></button>
        </div>
    </article>
  )
}

export default CardProducts
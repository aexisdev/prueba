import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from './ProductInfo'
import SimilarProducts from './SimilarProducts'
import SLiderImgs from './SliderImgs'
import './style/productScreen.css'


const ProductScreen = () => {
    
    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/'
        axios.get(`${URL}${id}`)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))
    }, [id])

  return (
    <div className='product'>
        <SLiderImgs product={product}/>
        <ProductInfo product={product}/>
        <SimilarProducts product={product}/>
    </div>
  )
}

export default ProductScreen
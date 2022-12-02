import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import InputSearch from './InputSearch';
import CardProducts from "./CardProducts";
import './style/homeScreen.css'
import InputSearchCategory from './InputSearchCategory';


const HomeScreen = () => {

  const products = useSelector(state => state.products)
  const [nameProducts, setNameProducts] = useState('')

  return (
    <div className='container'>
      <aside>
        <InputSearchCategory products={products}
        setNameProducts={setNameProducts}/>

      </aside>
      <section className='main-container'>
        <InputSearch products={products}
        setNameProducts={setNameProducts}/>
        <article className='products-container'>
          {
            nameProducts ?
            nameProducts?.map(product => (
              <CardProducts key={product?.id}
              product={product} />
            ))
            :
            products.map(product => (
              <CardProducts key={product.id}
              product={product}/>
            ))
          }

      </article>
      </section>
      
    </div>
  )
}

export default HomeScreen
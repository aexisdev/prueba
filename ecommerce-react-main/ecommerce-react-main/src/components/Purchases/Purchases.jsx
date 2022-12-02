import React from 'react'
import PurchasesCard from './PurchasesCard'

const Purchases = ({purchase}) => {
  return (
    <article className='purchase'>
      <div className='purchase__title-container'>
        <h3 className='purchase__title'>{purchase.updatedAt}</h3>
      </div>
        <div className='product-purchase'>
        {
            purchase.cart.products.map(product => (
                <PurchasesCard key={product.id} product={product}/>
            ))
        }
        </div>
        
    </article>
  )
}

export default Purchases
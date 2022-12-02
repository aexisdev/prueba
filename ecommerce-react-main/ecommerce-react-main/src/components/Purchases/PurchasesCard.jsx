import React from 'react'

const PurchasesCard = ({product}) => {
  return (
    <section className='product-purchase__container'>
      <h4 className='product-purchase__title'>{product.title}</h4>
      <div className='product-purchase__quantity-container'>
        <p className='product-purchase__quantity-title'>{product.productsInCart.quantity}</p>
      </div>
      <p className='product-purchase__price'>$ {product.price}</p>
    </section>
  )
}

export default PurchasesCard
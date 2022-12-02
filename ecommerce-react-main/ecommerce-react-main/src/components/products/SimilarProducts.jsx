import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProducts from '../Home/CardProducts'

const SimilarProducts = ({product}) => {
    const [filterProducts, setFilterProducts] = useState()

    const allProducts = useSelector(state => state.products)

    useEffect(() => {
        if(allProducts.length !== 0) {
            const filter = allProducts?.filter(e => e.category.name === product?.category)
            setFilterProducts(filter)
        }
    }, [product])

  return (
    <article className='similar-products'>
        <h2 className='similar-products__title'>Discover similar items</h2>
        <div className='products-container'>
        {
          filterProducts?.map(e => {
            if(e.title !== product?.title){
                return (
                <CardProducts key={e.id}
                product={e}/>)
            }
          })
        }

      </div>

    </article>
  )
}

export default SimilarProducts
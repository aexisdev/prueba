import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import Purchases from './Purchases'
import './style/purchasesScreen.css'

const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='purchases'>
      <div className='purchases__routes'>
        <p>Home</p>
        <div className='purchases__routes-btn'></div>
        <b>purchases</b>
      </div>
      <h2 className='purchases__title'>My purchases</h2>
      <section className='purchases__container'>
        {
          purchases?.map(purchase => (
            <Purchases key={purchase?.id} purchase={purchase}/>
          ))
        }

      </section>
    </div>
  )
}

export default PurchasesScreen
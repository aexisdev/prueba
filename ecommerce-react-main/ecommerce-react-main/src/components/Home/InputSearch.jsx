import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import InputSearchCategory from './InputSearchCategory'

const InputSearch = ({products, setNameProducts}) => {

    const {handleSubmit, register, reset} = useForm()

    const submit = data => {
      const filter = products?.filter(e => e?.title.includes(data.searchText))
      setNameProducts(filter);
    }

    const navbar = useRef()

    const clickMenuHam = () => {
      navbar.current.classList.toggle('filter-navbar__open')
    }


  return (
    <article className='container-form__name'>
      <form   className='form__home' onSubmit={handleSubmit(submit)}>
        <input className='form__home-input' type="text" {...register('searchText')}/>
        <button className='form__home-btn'>Search</button>
      </form>
      <button onClick={clickMenuHam} className='btn-filter'> <i className="fa-solid fa-filter"></i> Filter</button>
      <nav ref={navbar} className='filter-navbar'>
        <div onClick={clickMenuHam} className='btn-filter__close'><i className="fa-solid fa-xmark"></i></div>
        <InputSearchCategory/>
      </nav>

    </article>
  )
}

export default InputSearch
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const InputSearchCategory = ({ products, setNameProducts }) => {
  const [categories, setCategories] = useState();
  const [isActiveCategory, setIsActiveCategory] = useState(false)
  const [isActivePrice, setIsActivePrice] = useState(false)

  useEffect(() => {
    const URL =
      "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const { handleSubmit, register, reset } = useForm();
  const submitPrice = (data) => {
    console.log(parseInt(data.from));
    console.log(parseInt(products[0].price));
    const filter = products?.filter((e) => {
      return (
        parseInt(e?.price) >= parseInt(data.from) &&
        parseInt(e?.price) <= parseInt(data.to)
      );
    });
    setNameProducts(filter);
  };
  const submitCategory = (category) => {
    const filter = products?.filter((e) => e?.category.name === category);
    setNameProducts(filter);
  };

  const navbar = useRef();
  const category = useRef()

  const clickMenuPrice = () => {
    navbar.current.classList.toggle("input-price__container-principal-open");
    setIsActivePrice(!isActivePrice)
  };

  const clickMenuCategory = () => {
    category.current.classList.toggle('input-container__category-open')
    setIsActiveCategory(!isActiveCategory)
  };
  return (
    <section className="input">
      <article className="input-container">
        <div className="input-container__title">
          <h3 className="input__title">Price</h3>
          {
            isActivePrice ?
            <i onClick={clickMenuPrice} className="fa-solid fa-angle-up icon-close"></i>
            :
            <i onClick={clickMenuPrice} className="fa-solid fa-angle-down icon-open"></i>
          }
          
          
        </div>
        <form
          className="input-price__form"
          onSubmit={handleSubmit(submitPrice)}
        >
          <div ref={navbar} className="input-price__container-principal">
            <div className="input-price__container-form">
              <label htmlFor="from" className="input-price__label">
                From
              </label>
              <input
                className="input-price__form-input"
                type="number"
                id="From"
                {...register("from")}
              />
            </div>
            <div>
                
            </div>
            <div className="input-price__container-form">
              <label htmlFor="to" className="input-price__label">
                To
              </label>
              <input
                className="input-price__form-input"
                type="number"
                id="to"
                {...register("to")}
              />
            </div>

            <button className="input-price__btn">Filter Price</button>
          </div>
        </form>
      </article>
      <article className="input-container">
        <div className="input-container__title">
          <h3 className="input__title">Category</h3>
          {
            isActiveCategory?
            <i onClick={clickMenuCategory} className="fa-solid fa-angle-up icon-close"></i>
            :
            <i onClick={clickMenuCategory} className="fa-solid fa-angle-down icon-open"></i>
          }
        </div>
        <div ref={category} className="input-container__category">
        {categories?.map((category) => (
          <div
            className="input-category__container"
            key={category?.name}
            onClick={() => submitCategory(category?.name)}
          >
            <p className="input-category__name">{category?.name}</p>
          </div>
        ))}
        </div>
        
      </article>
    </section>
  );
};

export default InputSearchCategory;

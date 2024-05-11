import React, {useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice.js";
import { setItems } from "../redux/slices/pizzaSlice.js";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock.jsx";

function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const items = useSelector((state) => state.pizza.items);


  const onClickCategories = (id) => {
    dispatch(setCategoryId(id));
  };

  const fetchPizzas = async () => {
    const sortBy = sortType.sort;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&title=${searchValue}` : '';

  try {
    const res = await axios.get(`https://ba9d8a7e491cfaf0.mokky.dev/items?${category}&sortBy=${sortBy}${search}`
  );
  dispatch(setItems(res.data))
  } catch (error) {
    alert('Произошла ошибка')
  } 
}

  React.useEffect(() => {
    fetchPizzas();
  }, [categoryId, sortType, searchValue]);

  const pizzas = items.map((obj) => {
      return <PizzaBlock searchValue={searchValue} key={obj.id} {...obj} />;
  });

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => onClickCategories(i)} />
        <Sort />
      </div>
      <h2 className="content__title">Пиццы</h2>
      <div className="content__items">{pizzas}</div>
    </>
  );
}

export default Home;  


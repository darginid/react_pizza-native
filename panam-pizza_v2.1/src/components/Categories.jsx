import React from "react";

function Categories({value, onClickCategory}) {

  const arrPizza = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  
  return (
    <div className="categories">
      <ul className="categories__list">
        {arrPizza.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={value === index ? "categories__item active" : "categories__item"}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;

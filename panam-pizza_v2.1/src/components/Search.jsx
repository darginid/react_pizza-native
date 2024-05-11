import React, { useCallback, useRef, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from "../redux/slices/filterSlice.js";

import debounce from "lodash.debounce";
import "../scss/components/_search.scss";

function Search() {
  const dispatch = useDispatch();
  const [ value, setValue ] = useState(''); 

  const inputRef = useRef();


  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 350), 
    []);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className="room">
      <img className="searchSvg" src="img/search.png" alt="" />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        type="text"
        placeholder="Введите запрос..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className="crossSvg"
          src="img/cross-input.svg"
          alt="image"
        />
      )}
    </div>
  );
}

export default Search;

import React, { useState, ChangeEvent, MouseEventHandler } from "react";
import "./InputSearch.scss";
import Button from "../../Button/UI/Button";
import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import { setSearchText } from "../../../widgets/FilterSortSection/model/FilterAndSortSlice";

interface IInputSearch {
  handleButtonSearch: MouseEventHandler<HTMLButtonElement>;
}

const InputSearch: React.FC<IInputSearch> = ({ handleButtonSearch }) => {
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.FilterAndSortSlice);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <div className="inputSearchContainer">
      <div className="inputSearchWrapper">
        <input
          className="inputSearch"
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Поиск по клиентам..."
        />
        <div className="searchIconWrapper">
          <img
            src={require("../../../images/searchIcon.svg")}
            className="searchIcon"
            alt="Search"
          />
        </div>
        <div className="exitButtonWrapper">
          <Button theme="exit" onClick={handleButtonSearch} />
        </div>
      </div>
    </div>
  );
};

export default InputSearch;

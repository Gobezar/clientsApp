import React, { useState } from "react";
import "./FilterSortSection.scss";
import InputSearch from "../../../shared/Input/UI/InputSearch";
import Button from "../../../shared/Button/UI/Button";
import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import { setSearchDisplay, setSortMethod } from "../model/FilterAndSortSlice";
let cn = require("classnames");

const FilterSortSection = () => {
  const dispatch = useAppDispatch();
  const { displayButtonSearch, openSearch, sortMethod } = useAppSelector(
    (state) => state.FilterAndSortSlice
  );
  const handleButtonSearch = () => {
    dispatch(setSearchDisplay());
  };
  return (
    <div
      className={cn(
        "FilterSortSectionContainer",
        !openSearch && "FilterSortSectionContainer_close"
      )}
    >
      <div className="searchButtonWrapper">
        {displayButtonSearch && (
          <Button theme="search" onClick={handleButtonSearch} />
        )}
      </div>
      {openSearch && <InputSearch handleButtonSearch={handleButtonSearch} />}
      <div className="sortAndAddButtonsWrapper">
        <div className="sortButtonWrapper">
          <Button
            theme={
              sortMethod === "" || sortMethod === "asc" ? "sortAsc" : "sortDesc"
            }
            onClick={() => dispatch(setSortMethod())}
          />
        </div>
        <div>
          <Button theme="add" />
        </div>
      </div>
    </div>
  );
};

export default FilterSortSection;

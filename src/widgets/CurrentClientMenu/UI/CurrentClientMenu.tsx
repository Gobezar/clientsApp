import React from "react";
import { menuItems } from "../consts/menuItems";
import Button from "../../../shared/Button/UI/Button";
import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import { setCurrentMenuCategory } from "../../../entities/ClientItem/model/CurrentClientSlice";
import "./CurrentClientMenu.scss";

let cn = require("classnames");

const CurrentClientMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentMenuCategory, currentClient } = useAppSelector(
    (state) => state.CurrentClientSlice
  );
  const handleChangeMenuCategory = (name: string): void => {
    dispatch(setCurrentMenuCategory(name));
  };

  return (
    <div className="currentClientMenuContainer">
      <div>
        {menuItems.length > 0 &&
          menuItems.map((item) => (
            <button
              key={item.id}
              className={cn(
                "currentClientMenuButton",
                currentClient.length > 0 &&
                  currentMenuCategory == item.name &&
                  "currentClientMenuButton active"
              )}
              onClick={() => handleChangeMenuCategory(item.name)}
            >
              {item.name}
            </button>
          ))}
      </div>
      <div className="recomendationButtonWrapper">
        <div>
          <button className="currentClientMenuButton recomendationButton">
            Рекомендовать
          </button>
        </div>
        <div>
          <Button theme="addTransparentButton" />
        </div>
      </div>
    </div>
  );
};

export default CurrentClientMenu;

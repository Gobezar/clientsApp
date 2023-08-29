import React from "react";
import { clients } from "../../../widgets/ClientsList/consts/clients";
import { useAppSelector, useAppDispatch } from "../../../store/reduxHooks";
import {
  setOpenChoiseMenu,
  clearSelectedItems,
  toggleSelectedItem,
  toggleAllItems,
} from "../model/CheckListSlice";
import "./CheckList.scss";

const CheckList = () => {
  const { openChoiseMenu, selectedItems } = useAppSelector(
    (state) => state.CheckListSlice
  );
  const dispatch = useAppDispatch();

  const isAllChecked = selectedItems.length == clients.length;

  const handlerCheckListButton = () => {
    dispatch(setOpenChoiseMenu());
  };

  const handlerCheckBox = () => {
    if (selectedItems.length == clients.length) {
      dispatch(clearSelectedItems());
    } else {
      clients.forEach((client) => {
        const fullName = `${client.surname} ${client.name}`;
        dispatch(toggleAllItems(fullName));
      });
    }
  };

  return (
    <div className="checkListContainer">
      {!openChoiseMenu ? (
        <div className="closeActions">
          <div className="quantity quantityClients">
            <p>{clients.length}</p>
          </div>
          <div className="checkListButtonWrapper">
            <button
              onClick={handlerCheckListButton}
              className="checkListButton"
            >
              Выбрать
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="openActions">
            <div className="leftContent">
              <div className="checkboxWrapper">
                <input
                  type="checkbox"
                  onChange={handlerCheckBox}
                  checked={isAllChecked}
                />
              </div>
              <div>
                <p>Все</p>
              </div>
              <div>
                <div className="quantity quantitySelectedClients">
                  <p>{selectedItems.length}</p>
                </div>
              </div>
            </div>
            <div className="rightContent">
              <div>
                <button className="checkListButton">Действия</button>
              </div>
              <div className="checkListButtonWrapper">
                <button
                  onClick={handlerCheckListButton}
                  className="checkListButton"
                >
                  Отменить
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckList;

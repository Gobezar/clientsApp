import React from "react";
import { useAppSelector, useAppDispatch } from "../../../store/reduxHooks";
import { toggleSelectedItem } from "../../../features/checkList/model/CheckListSlice";

import "./ClientItem.scss";

interface IClientItem {
  name: string;
  surname: string;
  photo?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ClientItem: React.FC<IClientItem> = ({
  name,
  surname,
  photo,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  const { openChoiseMenu, selectedItems } = useAppSelector(
    (state) => state.CheckListSlice
  );

  const fullName = `${surname} ${name}`;
  const isChecked = selectedItems.includes(fullName);

  const handleCheckboxChange = () => {
    dispatch(toggleSelectedItem(fullName));
  };

  return (
    <div className="clientItemContainer">
      {openChoiseMenu && (
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
      )}
      <div className="clientItemImage" onClick={onClick}>
        <img src={photo} alt="Client" />
      </div>
      <div className="clientItemName" onClick={onClick}>
        {surname} {name}
      </div>
    </div>
  );
};

export default ClientItem;

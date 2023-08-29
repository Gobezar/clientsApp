import React from "react";
import { useAppSelector } from "../../../store/reduxHooks";
import Button from "../../../shared/Button/UI/Button";
import "./CurrentClientSection.scss";

const CurrentClientSection = () => {
  const { currentClient } = useAppSelector((state) => state.CurrentClientSlice);

  //   const fullName = `${currentClient[0].surname} ${currentClient[0].name} ${currentClient[0].secondName}`;

  return (
    <div className="currentClientContainer">
      {currentClient.length > 0 ? (
        <>
          <div className="currentClientData">
            <div>
              <div className="photoWrapper">
                <img src={currentClient[0].photo} alt={"photo"} />
              </div>
            </div>
            <div>
              <div>
                {currentClient[0].surname} {currentClient[0].name}{" "}
                {currentClient[0].secondName}
              </div>
              <div className="currentClientAge">
                {currentClient[0].age} лет, {currentClient[0].sex}
              </div>
            </div>

            <div className="buttonWrapper">
              <Button theme="additionallyTransparent" />
            </div>
          </div>
        </>
      ) : (
        <div className="chooseClientWrapper">Пожалуйста, выберите клиента.</div>
      )}
    </div>
  );
};

export default CurrentClientSection;

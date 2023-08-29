import React, { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../../store/reduxHooks";
import Button from "../../../shared/Button/UI/Button";
import "./CurrentClientSection.scss";

const CurrentClientSection = () => {
  const { currentClient } = useAppSelector((state) => state.CurrentClientSlice);
  const [openPopup, setOpenPopup] = useState(false);
  const Ref = useRef<HTMLDivElement>(null);

  const popupItems = [
    { id: 1, name: "Изменить" },
    { id: 2, name: "Удалить" },
  ];

  useEffect(() => {
    const clickOutSide = (event: MouseEvent | React.MouseEvent) => {
      const path = (event as any).composedPath().includes(Ref.current);
      if (!path) {
        setOpenPopup(false);
      }
    };
    document.body.addEventListener("click", clickOutSide);
    return () => {
      document.body.removeEventListener("click", clickOutSide);
    };
  }, []);

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

            <div className="buttonWrapper" ref={Ref}>
              <Button
                theme="additionallyTransparent"
                onClick={() => setOpenPopup(!openPopup)}
              />
              {openPopup && (
                <div className="popupWrapper">
                  <ul>
                    {popupItems.map((obj) => (
                      <li className="popup" key={obj.id}>
                        {obj.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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

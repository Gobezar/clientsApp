import React, { useState, useEffect, useRef } from "react";
import Button from "../../../shared/Button/UI/Button";
import { Notes } from "../../../widgets/ClientsList/consts/clients";
import "./NoteItem.scss";

const NoteItem = ({ note }: { note: Notes }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const noteRef = useRef<HTMLDivElement>(null);

  const popupItems = [
    { id: 1, name: "Изменить" },
    { id: 2, name: "Удалить" },
  ];

  useEffect(() => {
    const clickOutSide = (event: MouseEvent | React.MouseEvent) => {
      const path = (event as any).composedPath().includes(noteRef.current);
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
    <div className="noteItemContainer">
      <div className="noteItemText">
        <span>{note.date}</span> {note.text}{" "}
        {note.image && <img src={note.image} alt="note" />}
      </div>
      <div ref={noteRef}>
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
  );
};

export default NoteItem;

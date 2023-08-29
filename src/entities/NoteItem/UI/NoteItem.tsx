import React from "react";
import Button from "../../../shared/Button/UI/Button";
import { Notes } from "../../../widgets/ClientsList/consts/clients";
import "./NoteItem.scss";

const NoteItem = ({ note }: { note: Notes }) => {
  return (
    <div className="noteItemContainer">
      <div className="noteItemText">
        <span>{note.date}</span> {note.text}{" "}
        {note.image && <img src={note.image} alt="note" />}
      </div>
      <div>
        <Button theme="additionallyTransparent" />
      </div>
    </div>
  );
};

export default NoteItem;

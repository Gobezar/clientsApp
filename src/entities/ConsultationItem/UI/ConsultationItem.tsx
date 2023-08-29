import React from "react";
import { Consultations } from "../../../widgets/ClientsList/consts/clients";
import "./ConsultationItem.scss";

const ConsultationItem = ({
  consultation,
}: {
  consultation: Consultations;
}) => {
  return (
    <div className="consultationItemContainer">
      <div className="consultationItemImage">
        {consultation.image && (
          <img src={consultation.image} alt="consultation" />
        )}
      </div>
      <div>
        <div className="consultationItemText">{consultation.text}</div>
        <div>
          {consultation.date}, {consultation.time}
        </div>
      </div>
    </div>
  );
};

export default ConsultationItem;

import React from "react";
import { Events } from "../../../widgets/ClientsList/consts/clients";
import "./EventItem.scss";

const EventItem = ({ event }: { event: Events }) => {
  const eventTypeImg = require("../../../images/video.png");
  const eventCalendarImg = require("../../../images/calendar.png");
  const eventTimeImg = require("../../../images/clock.png");

  return (
    <div className="eventItemContainer">
      <div>
        <img src={event.image} alt="eventImage" />
      </div>
      <div className="eventTextWrapper">
        <div className="eventItemNameWrapper">{event.name}</div>
        <div className="eventItemTypeDateTimeWrapper">
          <div className="eventType">
            <img src={eventTypeImg} alt="type" />
            {event.type}
          </div>
          <div className="eventDate">
            <img src={eventCalendarImg} alt="date" />
            {event.date}
          </div>
          <div className="eventTime">
            <img src={eventTimeImg} alt="time" />
            {event.time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

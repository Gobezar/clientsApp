import React from "react";
import { useAppSelector } from "../../../store/reduxHooks";
import NoteItem from "../../../entities/NoteItem/UI/NoteItem";
import ConsultationItem from "../../../entities/ConsultationItem/UI/ConsultationItem";
import VideosItem from "../../../entities/VideosItem/UI/VideosItem";
import EventItem from "../../../entities/EventItem/UI/EventItem";
import "./CurrentClientMarks.scss";

const CurrentClientMarks = () => {
  const { currentClient, currentMenuCategory } = useAppSelector(
    (state) => state.CurrentClientSlice
  );
  //   console.log(currentClient[0]); // работает

  return (
    <div className="currentClientMarksContainer">
      {currentClient.length < 1 && (
        <p>Для отображения сведений необходимо выбрать клиента из списка.</p>
      )}
      {currentClient.length > 0 &&
        currentMenuCategory === "Заметки" &&
        currentClient[0].notes.length > 0 &&
        currentClient[0].notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      {currentClient.length > 0 &&
        currentMenuCategory === "Консультации" &&
        currentClient[0].consultations.length > 0 &&
        currentClient[0].consultations.map((consultation) => (
          <ConsultationItem key={consultation.id} consultation={consultation} />
        ))}
      {currentClient.length > 0 &&
        currentMenuCategory === "Видео" &&
        currentClient[0].videos.length > 0 &&
        currentClient[0].videos.map((video) => (
          <VideosItem key={video.id} video={video} />
        ))}
      {currentClient.length > 0 &&
        currentMenuCategory === "Мероприятия" &&
        currentClient[0].events.length > 0 &&
        currentClient[0].events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
    </div>
  );
};

export default CurrentClientMarks;

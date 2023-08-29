import React from "react";
import { Videos } from "../../../widgets/ClientsList/consts/clients";
import "./VideosItem.scss";

const VideosItem = ({ video }: { video: Videos }) => {
  return (
    <div className="videosItemContainer">
      <div>
        <div className="videosItemName">
          <div> {video.image && <img src={video.image} alt="video" />}</div>
          <div className="videosNameAuthorDate">
            <div>
              <span>{video.name}</span>
            </div>
            <div className="AuthorAndDateWrapper">
              <div className="videosItemAuthor">{video.author}</div>
              <div>{video.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosItem;

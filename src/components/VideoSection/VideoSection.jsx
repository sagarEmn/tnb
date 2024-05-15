import React from "react";
import globalStyles from "../../global.module.css";

export default function VideoSection({ videoLink }) {
  return (
    <>
      <div
        className={` ${globalStyles["video-outer-container"]}`}
      >
        <video autoPlay muted className={globalStyles["video"]} controls={false}>
          <source src={videoLink} />
          Your Browser doesn't support the video.
        </video>
      </div>
    </>
  );
}

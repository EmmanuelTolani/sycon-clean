import React from "react";

const Video = () => {
  return (
    <div className="about-video">
      <div className="container">
        <h1>Innovators in the Cleaning Service</h1>
        <div className="about-video__video">
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/eVajQPuRmk8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;

import React from 'react';

const AudioPlayer = ({ audioUrl, title }) => {
  return (
    <div>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        {title && <p>{title}</p>}
      </audio>
    </div>
  );
};

export default AudioPlayer;

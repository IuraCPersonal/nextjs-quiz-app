import React, { useEffect } from "react";

const PlaySound: React.FC = () => {
  useEffect(() => {
    const audio = new Audio("/sounds/bg-music.mp3");
    audio.play();
  }, []);

  return <></>;
};

export default PlaySound;

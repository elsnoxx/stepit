import React, { useState, useEffect } from 'react';
import LessonButton from './LessonButton';

const AudacityLessonHeader = ({ beforeLesson, afterLesson }) => {
  const [time, setTime] = useState(getCurrentTime());

  // Funkce pro získání aktuálního času ve formátu HH:mm:ss
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = now.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
  }

  // Efekt, který bude spuštěn po načtení komponenty a každou sekundu aktualizuje čas
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    // Uklízecí funkce, která zastaví interval při odmontování komponenty
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <table className="moveAndTime">
        <tbody>
          <tr>
            <td>
              <LessonButton redirectTo={beforeLesson} />
              <LessonButton redirectTo={afterLesson} />
            </td>
            <td>
              {time}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AudacityLessonHeader;

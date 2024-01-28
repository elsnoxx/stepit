import React from 'react';

const LessonButton = ({ redirectTo }) => {
  const handleClick = () => {
    window.location.href = redirectTo;
  };

  return (
    <button onClick={handleClick}>Předchozí lekce</button>
  );
};

export default LessonButton;

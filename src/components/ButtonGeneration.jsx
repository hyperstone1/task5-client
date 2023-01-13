import React from 'react';
import { Button } from '@mui/material';

const ButtonGeneration = ({ setSeed }) => {
  const handleClickButton = () => {
    setSeed((Math.random() * 100000) << 1);
  };

  return (
    <div>
      <Button onClick={() => handleClickButton()} variant="outlined">
        Generated
      </Button>
    </div>
  );
};

export default ButtonGeneration;

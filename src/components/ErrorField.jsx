import React from 'react';
import { TextField } from '@mui/material';

const ErrorField = ({ errProbability, setErrProbability }) => {
  const handleChangeError = (e) => {
    if (e.target.value !== '') {
      setErrProbability(parseFloat(e.target.value) > 1000 ? 1000 : parseFloat(e.target.value));
    } else {
      setErrProbability(e.target.value);
    }
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        value={errProbability}
        onChange={handleChangeError}
        label="Error count"
        variant="outlined"
      />
    </div>
  );
};

export default ErrorField;

import React from 'react';
import { TextField } from '@mui/material';

const Seed = ({ seed, setSeed }) => {
  const handleChangeSeed = (e) => {
    if (e.target.value === '') return e.preventDefault();
    return setSeed(parseInt(e.target.value));
  };
  return (
    <div className="seed">
      <TextField
        id="outlined-basic"
        value={seed}
        onChange={handleChangeSeed}
        label="Seed"
        variant="outlined"
      />
    </div>
  );
};

export default Seed;

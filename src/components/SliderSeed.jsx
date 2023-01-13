import React, { useCallback } from 'react';
import 'toolcool-range-slider';
import Slider from '@mui/material/Slider';

const SliderSeed = ({ errProbability, setErrProbability }) => {
  const handleChangeSlider = useCallback(
    (e) => {
      setErrProbability(e.target.value);
    },
    [errProbability],
  );

  return (
    <div className="slider">
      <Slider
        aria-label="Temperature"
        defaultValue={0}
        onChange={(e) => handleChangeSlider(e)}
        valueLabelDisplay="auto"
        step={0.5}
        marks
        value={errProbability}
        min={0}
        max={10}
      />
    </div>
  );
};

export default SliderSeed;

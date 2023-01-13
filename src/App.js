import React, { useState } from 'react';
import TableData from './components/TableData';
import SliderSeed from './components/SliderSeed';
import './scss/index.scss';
import MenuLocale from './components/MenuLocale';
import ButtonGeneration from './components/ButtonGeneration';
import Seed from './components/Seed';
import ErrorField from './components/ErrorField';

function App() {
  const [locale, setLocale] = useState('ru');
  const [errProbability, setErrProbability] = useState(0);
  const [seed, setSeed] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="menu_container">
          <MenuLocale locale={locale} setLocale={setLocale} />
          <ErrorField errProbability={errProbability} setErrProbability={setErrProbability} />

          <div className="seed_container">
            <Seed seed={seed} setSeed={setSeed} />
            <ButtonGeneration setSeed={setSeed} />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <SliderSeed errProbability={errProbability} setErrProbability={setErrProbability} />
        </div>

        <TableData seed={seed} locale={locale} errProbability={errProbability} />
      </div>
    </div>
  );
}

export default App;

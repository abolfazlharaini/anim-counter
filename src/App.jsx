import React from 'react';

import './reboot.css';
import style from './App.module.css';
import AnimCounter from './AnimCounter';


function App() {
  return (
    <main className={style["app"]}>
      <AnimCounter
        classes={{
          root: style['root'],
          plus: style['plus'],
          minus: style['minus'],
          label: style['label'],
          labelWrapper: style['labelWrapper']
        }} />
    </main>
  );
}

export default App;

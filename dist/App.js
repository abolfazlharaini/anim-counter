import './reboot.css';
import style from './App.module.css';
import { AnimCounter } from 'anim-counter';

function App() {
  return /*#__PURE__*/React.createElement("main", {
    className: style["app"]
  }, /*#__PURE__*/React.createElement(AnimCounter, {
    classes: {
      root: style['root'],
      plus: style['plus'],
      minus: style['minus'],
      label: style['label'],
      labelWrapper: style['labelWrapper']
    }
  }));
}

export default App;
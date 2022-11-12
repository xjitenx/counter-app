import React from 'react';
import TimerContainer from './Components/TimerContainer';

const App: React.FC = () => {
  return (
    <div className='app d-flex flex-column align-center justify-center p-2'>
      <span className='counter-app-header'>Counter App</span>
      <TimerContainer />
    </div>
  );
}

export default App;

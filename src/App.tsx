import React from 'react';
import './App.css';
import { DateApp } from './components/dateapp/DateApp';
import { Counter } from './components/counterapp/Counter';

function App() {
  return (
   <div>
    <DateApp/>
    <Counter/>
   </div>
  );
}

export default App;

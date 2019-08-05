import { render } from 'react-dom'
import * as React from 'react';
import CarNumberPicker from './src';

import './css/index.css';

const value = "あ1234"

render(
  <CarNumberPicker 
    value="あ1234" 
    onChange={(value) => {
      console.log(value);
    }} 
  />
  , 
  document.getElementById('app')
);
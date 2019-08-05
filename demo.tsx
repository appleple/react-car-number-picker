import { render } from 'react-dom'
import * as React from 'react';
import CarNumberPicker from './src';

import './css/index.css';

const Demo = () => {

  const [value, setValue] = React.useState("あ1234");

  return (<>
    <div style={{marginBottom: '10px'}}>
      <input type="text" value={value} readOnly />
    </div>
    <CarNumberPicker 
      value={value} 
      onChange={(value) => {
        setValue(value)
      }} 
    />
  </>)
}

render(<Demo/>, 
  document.getElementById('app')
);
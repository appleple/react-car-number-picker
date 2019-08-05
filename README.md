# react-car-number-picker

## ScreenShot

![](./screenshot.gif)

## Usage

```js
import { render } from 'react-dom'
import * as React from 'react';
import CarNumberPicker from 'react-car-number-picker';
import 'react-car-number-picker/css/index.css';

render(
  <CarNumberPicker 
    value="あ1234" 
    onChange={(value) => {
      console.log(value);
    }} 
  />
  , document.getElementById('app'));
```
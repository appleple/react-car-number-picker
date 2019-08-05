# React Hiragana Picker

## ScreenShot

![](./screenshot.png)

## Usage

```js
import { render } from 'react-dom'
import * as React from 'react';
import CarNumberPicker from 'react-car-number-picker';
import 'react-hiragana-picker/css/index.css';

render(
  <CarNumberPicker 
    value="あ1234" 
    onChange={(value) => {
      console.log(value);
    }} 
  />
  , document.getElementById('app'));
```
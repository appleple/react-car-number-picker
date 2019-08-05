import * as React from 'react';

type Props = {
  value: string
  onChange(value: string): void
  onOpen(): void
  open?: boolean
}

const { useState } = React;

const values = [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['9', '.']
]

export default (props: Props) => {
  const defaultValue = {
    open: false,
    value: ".",
  }
  const prop = { ...defaultValue, ...props };
  const [value, setValue] = useState(prop.value);

  return (<div className="number-picker">
    <button className="number-picker__btn" onClick={() => {
      prop.onOpen();
    }}>{value}</button>
    {prop.open && <div className="number-picker__list-wrap">
      <ul className="number-picker__list">
        {values.map((item) => {
          return (<li className="number-picker__item">{item.map((val) => {
            return (<button 
              onClick={(e) => {
                setValue(val);
                props.onChange(val);
              }}
              className="number-picker__btn"
            >{val}</button>)
          })
        }</li>)})}
      </ul>
    </div>}
  </div>)
}
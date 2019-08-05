import * as React from 'react';
import ArrowIcon from './icon';

type Props = {
  value: string
  onChange(value: string): void
  onOpen(): void
  onClose?(): void
  open?: boolean
}

const { useState } = React;

const values = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['0', '.', '*']
]

export default (props: Props) => {
  const defaultValue = {
    open: false,
    value: ".",
  }
  const prop = { ...defaultValue, ...props };
  const [value, setValue] = useState(prop.value);

  return (<div className="number-picker">
    <button type="button" className="number-picker__btn" onClick={() => {
      prop.onOpen();
    }}>{value}</button>
    {prop.open && <div className="number-picker__list-wrap">
      <ul className="number-picker__list">
        {values.map((item) => {
          return (<li className="number-picker__item">{item.map((val) => {
            return (<button 
              type="button"
              onClick={(e) => {
                if (val === '*' && props.onClose) {
                  props.onClose()
                } else {
                  setValue(val);
                  props.onChange(val);
                }
              }}
              className="number-picker__list-btn"
            >{val !== "*" ? val : (<ArrowIcon />)}</button>)
          })
        }</li>)})}
      </ul>
    </div>}
  </div>)
}
import * as React from 'react';

const hiragana = [
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "", "ゆ", "", "よ"],
  ["ら", "り", "る", "れ", "ろ"],
  ["わ", "", "を", "", "ん"]
]

const { useState, useEffect, useRef } = React;

type Props = {
  value: string
  onChange(value: string): void
  onOpen(): void
  onClose?(): void
  open: boolean
}

const isDescendant = (parent: HTMLElement, child: HTMLElement) => {
  let node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

export default (props: Props) => {

  const [value, setValue] = useState(props.value);
  const picker = useRef<HTMLDivElement>(null);

  return (<div
    className="hiragana-picker"
    ref={picker}
  >
    <button
      type="button"
      className="hiragana-picker__btn"
      onClick={() => {
        props.onOpen();
      }}
    >{value}</button>
    {props.open && <div className="hiragana-picker__list-wrap">
      <ul className="hiragana-picker__list">
        {hiragana.map((item) => {
          return (<li className="hiragana-picker__item">
            {item.map((child) => {
              return (<button
                className="hiragana-picker__list-btn"
                type="button"
                onClick={() => {
                  setValue(child);
                  props.onChange(child);
                }}
              >{child}</button>)
            })}
          </li>);
        })}
      </ul>
    </div>}
  </div>);
}
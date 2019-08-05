import * as React from 'react';
import HiraganaPicker from 'react-hiragana-picker';
import NumberPicker from './number-picker';

type Props = {
  value: string
  onChange(value: string): void
}

const { useState, useEffect, useRef } = React;

const getStringAsArray = (value: string): string[] => {
  const arr = [];
  for (let i = 0; i < value.length; i++) {
    arr.push(value.charAt(i));
  }
  return arr;
}

const composeValue = (hiragana, numbers) => {
  return `${hiragana}${numbers["number1"]}${numbers["number2"]}${numbers["number3"]}${numbers["number4"]}`;
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
  const defaultProps = {
    value: "あ...."
  }
  const prop = { ...defaultProps, ...props };
  const [firstHiragana, number1, number2, number3, number4] = getStringAsArray(prop.value);
  const [hiragana, setHiragana] = useState(firstHiragana);
  const [numbers, setNumbers] = useState({
    number1,
    number2,
    number3,
    number4
  });
  const [step, setStep] = useState(0);
  const picker = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listener: EventListener = (e) => {
      if (e.target !== picker.current && !isDescendant(picker.current, e.target as HTMLElement)) {
        setStep(-1);
      }
    }
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    }
  });

  return (<div className="car-number-picker" >
    <HiraganaPicker 
      value={hiragana}
      onChange={(nextHiragana) => {
        setHiragana(nextHiragana);
        props.onChange(composeValue(nextHiragana, numbers));
        setStep(1);
      }}
    />
    <NumberPicker 
      value={numbers.number1} 
      open={step === 1}
      onOpen={() => {
        setStep(1);
      }}
      onChange={(number1) => {
        setNumbers({
          ...numbers,
          number1
        });
        props.onChange(composeValue(hiragana, numbers));
        setStep(2);
      }}
    />
    <NumberPicker 
      value={numbers.number2} 
      open={step === 2}
      onOpen={() => {
        setStep(2);
      }}
      onChange={(number2) => {
        setNumbers({
          ...numbers,
          number2
        });
        props.onChange(composeValue(hiragana, numbers));
        setStep(3);
      }}
    />
    <span className="car-number-span">-</span>
    <NumberPicker 
      value={numbers.number3} 
      open={step === 3}
      onOpen={() => {
        setStep(3);
      }}
      onChange={(number3) => {
        setNumbers({
          ...numbers,
          number3
        });
        props.onChange(composeValue(hiragana, numbers));
        setStep(4);
      }}
    />
    <NumberPicker 
      value={numbers.number4} 
      open={step === 4}
      onOpen={() => {
        setStep(4);
      }}
      onChange={(number4) => {
        setNumbers({
          ...numbers,
          number4
        });
        props.onChange(composeValue(hiragana, numbers));
        setStep(5);
      }}
    />
  </div>)
}
import * as React from 'react';
import HiraganaPicker from './hiragana-picker';
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
  const [step, setStep] = useState(-1);
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

  return (<div className={`car-number-picker car-number-step${step}`} ref={picker}>
    <HiraganaPicker 
      onOpen={() => {
        setStep(0)
      }}
      open={step === 0}
      value={hiragana}
      onChange={(nextHiragana) => {
        setHiragana(nextHiragana);
        props.onChange(composeValue(nextHiragana, numbers));
        setTimeout(() => {
          setStep(1);
        }, 10);
      }}
    />
    <NumberPicker 
      value={numbers.number1} 
      open={step === 1}
      onOpen={() => {
        setTimeout(() => {
          setStep(1);
        }, 10);
      }}
      onClose={() => {
        setStep(-1);
      }}
      disableds={['0']}
      onChange={(number1) => {
        const newNumbers = {
          ...numbers,
          number1
        }
        setNumbers(newNumbers);
        props.onChange(composeValue(hiragana, newNumbers));
        setTimeout(() => {
          setStep(2);
        }, 10);
      }}
    />
    <NumberPicker 
      value={numbers.number2} 
      disableds={numbers.number1 === '.' ? ['0'] : ['.']}
      open={step === 2}
      onOpen={() => {
        setStep(2);
      }}
      onClose={() => {
        setStep(-1);
      }}
      onChange={(number2) => {
        const newNumbers = {
          ...numbers,
          number2
        }
        setNumbers(newNumbers);
        props.onChange(composeValue(hiragana, newNumbers));
        setTimeout(() => {
          setStep(3);
        }, 10);
      }}
    />
    <NumberPicker 
      value={numbers.number3} 
      disableds={numbers.number2 === '.' ? ['0'] : ['.']}
      open={step === 3}
      onOpen={() => {
        setStep(3);
      }}
      onClose={() => {
        setStep(-1);
      }}
      onChange={(number3) => {
        const newNumbers = {
          ...numbers,
          number3
        }
        setNumbers(newNumbers);
        props.onChange(composeValue(hiragana, newNumbers));
        setTimeout(() => {
          setStep(4);
        }, 10);
      }}
    />
    <NumberPicker 
      value={numbers.number4} 
      disableds={numbers.number3 === '.' ? ['0', '.'] : ['.']}
      open={step === 4}
      onOpen={() => {
        setStep(4);
      }}
      onClose={() => {
        setStep(-1);
      }}
      onChange={(number4) => {
        const newNumbers = {
          ...numbers,
          number4
        }
        setNumbers(newNumbers);
        props.onChange(composeValue(hiragana, newNumbers));
        setTimeout(() => {
          setStep(-1);
        }, 10);
      }}
    />
  </div>)
}
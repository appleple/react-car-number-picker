var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import HiraganaPicker from './hiragana-picker';
import NumberPicker from './number-picker';
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
var getStringAsArray = function (value) {
    var arr = [];
    for (var i = 0; i < value.length; i++) {
        arr.push(value.charAt(i));
    }
    return arr;
};
var composeValue = function (hiragana, numbers) {
    return "" + hiragana + numbers["number1"] + numbers["number2"] + numbers["number3"] + numbers["number4"];
};
var isDescendant = function (parent, child) {
    var node = child.parentNode;
    while (node !== null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
};
export default (function (props) {
    var defaultProps = {
        value: "あ...."
    };
    var prop = __assign({}, defaultProps, props);
    var _a = getStringAsArray(prop.value), firstHiragana = _a[0], number1 = _a[1], number2 = _a[2], number3 = _a[3], number4 = _a[4];
    var _b = useState(firstHiragana), hiragana = _b[0], setHiragana = _b[1];
    var _c = useState({
        number1: number1,
        number2: number2,
        number3: number3,
        number4: number4
    }), numbers = _c[0], setNumbers = _c[1];
    var _d = useState(-1), step = _d[0], setStep = _d[1];
    var picker = useRef(null);
    useEffect(function () {
        var listener = function (e) {
            if (e.target !== picker.current && !isDescendant(picker.current, e.target)) {
                setStep(-1);
            }
        };
        document.addEventListener('click', listener);
        return function () {
            document.removeEventListener('click', listener);
        };
    });
    return (React.createElement("div", { className: "car-number-picker", ref: picker },
        React.createElement(HiraganaPicker, { onOpen: function () {
                setStep(0);
            }, open: step === 0, value: hiragana, onChange: function (nextHiragana) {
                setHiragana(nextHiragana);
                props.onChange(composeValue(nextHiragana, numbers));
                setTimeout(function () {
                    setStep(1);
                }, 10);
            } }),
        React.createElement(NumberPicker, { value: numbers.number1, open: step === 1, onOpen: function () {
                setTimeout(function () {
                    setStep(1);
                }, 10);
            }, onClose: function () {
                setStep(-1);
            }, onChange: function (number1) {
                var newNumbers = __assign({}, numbers, { number1: number1 });
                setNumbers(newNumbers);
                props.onChange(composeValue(hiragana, newNumbers));
                setTimeout(function () {
                    setStep(2);
                }, 10);
            } }),
        React.createElement(NumberPicker, { value: numbers.number2, open: step === 2, onOpen: function () {
                setStep(2);
            }, onClose: function () {
                setStep(-1);
            }, onChange: function (number2) {
                var newNumbers = __assign({}, numbers, { number2: number2 });
                setNumbers(newNumbers);
                props.onChange(composeValue(hiragana, newNumbers));
                setTimeout(function () {
                    setStep(3);
                }, 10);
            } }),
        React.createElement("span", { className: "car-number-span" }, "-"),
        React.createElement(NumberPicker, { value: numbers.number3, open: step === 3, onOpen: function () {
                setStep(3);
            }, onClose: function () {
                setStep(-1);
            }, onChange: function (number3) {
                var newNumbers = __assign({}, numbers, { number3: number3 });
                setNumbers(newNumbers);
                props.onChange(composeValue(hiragana, newNumbers));
                setTimeout(function () {
                    setStep(4);
                }, 10);
            } }),
        React.createElement(NumberPicker, { value: numbers.number4, open: step === 4, onOpen: function () {
                setStep(4);
            }, onClose: function () {
                setStep(-1);
            }, onChange: function (number4) {
                var newNumbers = __assign({}, numbers, { number4: number4 });
                setNumbers(newNumbers);
                props.onChange(composeValue(hiragana, newNumbers));
                setTimeout(function () {
                    setStep(-1);
                }, 10);
            } })));
});
//# sourceMappingURL=index.js.map
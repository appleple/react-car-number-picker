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
import ArrowIcon from './icon';
var useState = React.useState;
var values = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '.', '*']
];
export default (function (props) {
    var defaultValue = {
        open: false,
        value: ".",
        disableds: []
    };
    var prop = __assign({}, defaultValue, props);
    var _a = useState(prop.value), value = _a[0], setValue = _a[1];
    return (React.createElement("div", { className: "number-picker" },
        React.createElement("button", { type: "button", className: "number-picker__btn" + (prop.open ? ' number-picker__btn-open' : ''), onClick: function () {
                prop.onOpen();
            } }, value),
        prop.open && React.createElement("div", { className: "number-picker__list-wrap" },
            React.createElement("ul", { className: "number-picker__list" }, values.map(function (item) {
                return (React.createElement("li", { className: "number-picker__item" }, item.map(function (val) {
                    var disabled = prop.disableds.some(function (key) { return key === val; }) ? true : false;
                    console.log(prop.disableds, val, disabled);
                    return (React.createElement("button", { disabled: disabled, type: "button", onClick: function (e) {
                            if (val === '*' && props.onClose) {
                                props.onClose();
                            }
                            else {
                                setValue(val);
                                props.onChange(val);
                            }
                        }, className: "number-picker__list-btn" }, val !== "*" ? val : (React.createElement(ArrowIcon, null))));
                })));
            })))));
});
//# sourceMappingURL=number-picker.js.map
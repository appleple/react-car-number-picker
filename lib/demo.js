import { render } from 'react-dom';
import * as React from 'react';
import CarNumberPicker from './src';
import './css/index.css';
var Demo = function () {
    var _a = React.useState("あ1234"), value = _a[0], setValue = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { marginBottom: '10px' } },
            React.createElement("input", { type: "text", value: value, readOnly: true })),
        React.createElement(CarNumberPicker, { value: value, onChange: function (value) {
                setValue(value);
            } })));
};
render(React.createElement(Demo, null), document.getElementById('app'));
//# sourceMappingURL=demo.js.map
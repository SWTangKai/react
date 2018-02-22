webpackJsonp([3],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _counter = __webpack_require__(52);

var _reactRedux = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_Component) {
    _inherits(Counter, _Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    'Now Counting is ',
                    this.props.counter.count
                ),
                _react2.default.createElement(
                    'button',
                    {
                        onClick: function onClick() {
                            _this2.props.increment();
                        } },
                    'Inc'
                ),
                _react2.default.createElement(
                    'button',
                    {
                        onClick: function onClick() {
                            _this2.props.decrement().log('using dec fun');
                        } },
                    'dec'
                ),
                _react2.default.createElement(
                    'button',
                    {
                        onClick: function onClick() {
                            _this2.props.reset();
                        } },
                    'reset'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Counter;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { counter: state.counter };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        increment: function increment() {
            dispatch((0, _counter.increment)());
        },
        decrement: function decrement() {
            dispatch((0, _counter.decrement)());
        },
        reset: function reset() {
            dispatch((0, _counter.reset)());
        }
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Counter, 'Counter', 'F:\\user\\Desktop\\\u5B66\u4E60\\tech\\react\\react-family\\src\\pages\\Counter\\Counter.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'F:\\user\\Desktop\\\u5B66\u4E60\\tech\\react\\react-family\\src\\pages\\Counter\\Counter.js');
    reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'F:\\user\\Desktop\\\u5B66\u4E60\\tech\\react\\react-family\\src\\pages\\Counter\\Counter.js');
    reactHotLoader.register(_default, 'default', 'F:\\user\\Desktop\\\u5B66\u4E60\\tech\\react\\react-family\\src\\pages\\Counter\\Counter.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ })

});
//# sourceMappingURL=counter.cdc1f07d9d1d7a11185e.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Root = exports.LabelWrapper = exports.Label = exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Label = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    right: 0;\n    transition: all ", "s;\n    width: 100%;\n"])), props => props.duration / 1000);

exports.Label = Label;

const Button = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

exports.Button = Button;

const LabelWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    height: 20px;\n    position: relative;\n    overflow: hidden;\n    width: 20px;\n"])));

exports.LabelWrapper = LabelWrapper;

const Root = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n"])));

exports.Root = Root;
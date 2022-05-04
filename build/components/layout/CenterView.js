"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenterView = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function CenterView({ children, style }) {
    const userStyle = style;
    return (react_1.default.createElement(react_native_1.View, { style: [userStyle, { flex: 1, alignItems: 'center', justifyContent: 'center' }] }, children));
}
exports.CenterView = CenterView;

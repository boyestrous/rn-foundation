"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_native_2 = require("@testing-library/react-native");
const CenterView_1 = require("../components/layout/CenterView");
const TextMock_1 = __importDefault(require("./__mocks__/TextMock"));
describe('CenterView', () => {
    afterEach(react_native_2.cleanup);
    test('renders correctly', () => {
        const tree = react_test_renderer_1.default.create(react_1.default.createElement(CenterView_1.CenterView, null,
            react_1.default.createElement(TextMock_1.default, null))).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('not Empty - child objects rendering', () => {
        const tree = (0, react_native_2.render)(react_1.default.createElement(CenterView_1.CenterView, null,
            react_1.default.createElement(TextMock_1.default, null)));
        expect(tree.container.findByType(react_native_1.View)).not.toBeEmpty();
    });
    test('user cannot override justifyContent', () => {
        const component = (0, react_native_2.render)(react_1.default.createElement(CenterView_1.CenterView, { style: { justifyContent: 'flex-end' } },
            react_1.default.createElement(TextMock_1.default, null)));
        const j = component.container.findByType(react_native_1.View);
        expect(j).toHaveStyle({ justifyContent: 'center' });
    });
    test('user cannot override alignItems', () => {
        const component = (0, react_native_2.render)(react_1.default.createElement(CenterView_1.CenterView, { style: { alignItems: 'flex-end' } },
            react_1.default.createElement(TextMock_1.default, null)));
        const j = component.container.findByType(react_native_1.View);
        expect(j).toHaveStyle({ alignItems: 'center' });
    });
    test('user cannot override flex', () => {
        const component = (0, react_native_2.render)(react_1.default.createElement(CenterView_1.CenterView, { style: { flex: 5 } },
            react_1.default.createElement(TextMock_1.default, null)));
        const j = component.container.findByType(react_native_1.View);
        expect(j).toHaveStyle({ flex: 1 });
    });
});

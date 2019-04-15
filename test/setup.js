const { configure } = require("enzyme");
const { JSDOM } = require("jsdom");
const Adapter = require("enzyme-adapter-react-16");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

global.window = window;
global.document = window.document;

before(() => configure({ adapter: new Adapter() }));
after(() => {
  console.error.restore();
});

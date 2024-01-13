"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("@vercel/analytics/react");
require("./globals.css");
var NavBar_1 = require("./components/NavBar");
var Footer_1 = require("./components/Footer");
exports.metadata = {
    title: "My Next Phone",
    description: "Your Guide To Get The Perfict Phone For You!"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement(NavBar_1["default"], null),
            React.createElement("main", { className: "rounded-xl  " },
                children,
                React.createElement(react_1.Analytics, null)),
            React.createElement("footer", { className: "w-full max-h-max  hero_bg bg-cover bg-center" },
                React.createElement(Footer_1["default"], null)))));
}
exports["default"] = RootLayout;

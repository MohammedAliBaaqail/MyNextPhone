"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var SearchBar_1 = require("./SearchBar");
function navBar() {
    return (react_1["default"].createElement("nav", { className: " h-[10vh] nav_bg top-0 px-6   w-full flex flex-col justify-between md:flex-row items-center   py-2 text-neutral-500    lg:py-4 max-md:h-[15vh]" },
        react_1["default"].createElement(link_1["default"], { className: "text-xl text-neutral-800 ", href: "/" },
            react_1["default"].createElement("img", { src: "/images/logo.png", alt: "logo", width: 350, height: 350 })),
        react_1["default"].createElement(SearchBar_1["default"], null)));
}
exports["default"] = navBar;

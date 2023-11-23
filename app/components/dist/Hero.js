"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Hero() {
    return (react_1["default"].createElement("section", { className: 'w-full h-[90vh] hero_bg  flex justify-start max-md:flex-col' },
        react_1["default"].createElement("div", { className: " w-1/2   ml-24   text-8xl max-md:text-6xl  self-center  max-md:mt-auto max-md:w-full max-md:ml-0    " },
            react_1["default"].createElement("h1", { className: " drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-full max-md:ml-auto max-md:text-center max-md:mt-32" },
                "Discover Your ",
                react_1["default"].createElement("br", null),
                " ",
                react_1["default"].createElement("span", { className: "text-white " }, "Next"),
                " Phone")),
        react_1["default"].createElement("div", { className: "hero_img  w-2/5  self-end  max-md:self-center max-md:mt-auto  max-md:w-3/4 " },
            react_1["default"].createElement("img", { src: "/images/hero_1.png", alt: "" }))));
}
exports["default"] = Hero;

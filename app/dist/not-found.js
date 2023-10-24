"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function notFound() {
    return (React.createElement("div", { className: "lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 h-screen" },
        React.createElement("div", { className: "xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0" },
            React.createElement("div", { className: "relative" },
                React.createElement("div", { className: "absolute" },
                    React.createElement("div", { className: "" },
                        React.createElement("h1", { className: "my-2 text-gray-800 font-bold text-2xl" }, "Looks like you've found the doorway to the great nothing"),
                        React.createElement("p", { className: "my-2 text-gray-800 mb-6" }, "Sorry about that! Please visit our hompage to get where you need to go."),
                        React.createElement(link_1["default"], { href: "/", className: " sm:w-full  lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-blue-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50" }, "Take me there!"))),
                React.createElement("div", null,
                    React.createElement("img", { src: "https://i.ibb.co/G9DC8S0/404-2.png" })))),
        React.createElement("div", null,
            React.createElement("img", { src: "https://i.ibb.co/ck1SGFJ/Group.png" }))));
}
exports["default"] = notFound;

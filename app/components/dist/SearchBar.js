"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
function SearchBar() {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(""), searchQuery = _a[0], setQuery = _a[1];
    react_1.useEffect(function () {
    }, [searchQuery]);
    var handleSubmit = function (e) {
        e.preventDefault();
        router.push("/search/" + searchQuery);
    };
    return (React.createElement("div", { className: "w-96 max-w-full " },
        React.createElement("div", { className: "relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden shadow-lg" },
            React.createElement("div", { className: "grid place-items-center h-full w-12 text-gray-300" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }))),
            React.createElement("form", { className: "searchbar__form", onSubmit: handleSubmit },
                React.createElement("input", { className: "peer h-full w-full outline-none text-sm text-gray-700 pr-2", type: "text", id: "search", placeholder: "Search For A Phone...", value: searchQuery, onChange: function (e) { return setQuery(e.target.value); } })))));
}
exports["default"] = SearchBar;

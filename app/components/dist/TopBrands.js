"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var BrandCard_1 = require("./BrandCard");
function TopBrands() {
    var topBrands = [
        {
            name: "Samsung",
            img: "/images/samsung.png",
            id: "samsung-phones-9"
        },
        {
            name: "Apple",
            img: "/images/apple.png",
            id: "apple-phones-48"
        },
        {
            name: "Google",
            img: "/images/google.png",
            id: "google-phones-107"
        },
        {
            name: "Xiaomi",
            img: "/images/xiaomi.png",
            id: "xiaomi-phones-80"
        },
        {
            name: "Huawei",
            img: "/images/huawei.png",
            id: "huawei-phones-58"
        },
        {
            name: "OnePlus",
            img: "/images/oneplus.png",
            id: "oneplus-phones-9"
        },
        {
            name: "Oppo",
            img: "/images/oppo.png",
            id: "oppo-phones-82"
        },
        {
            name: "Realme",
            img: "/images/realme.png",
            id: "realme-phones-118"
        },
        {
            name: "Vivo",
            img: "/images/vivo.png",
            id: "vivo-phones-98"
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-row flex-wrap justify-center py-6  " }, topBrands.map(function (brand) {
            return (React.createElement(BrandCard_1["default"], { key: brand.id, id: brand.id, name: brand.name, img: brand.img }));
        })),
        React.createElement("div", { className: "flex justify-center" },
            React.createElement(link_1["default"], { className: "text-3xl  p-7 mx-auto  bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100  mb-8", href: "/brands" }, "All Brands"))));
}
exports["default"] = TopBrands;

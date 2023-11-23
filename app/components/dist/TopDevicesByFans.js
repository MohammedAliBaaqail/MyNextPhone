"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var DeviceCard_1 = require("./DeviceCard");
var navigation_1 = require("next/navigation");
var getDeviceDetails_1 = require("@/api/getDeviceDetails");
function TopDevicesByFans(topDevices) {
    return __awaiter(this, void 0, void 0, function () {
        var devicesImgPromises, devicesImg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!topDevices)
                        return [2 /*return*/, navigation_1.notFound()];
                    devicesImgPromises = topDevices[1].list.map(function (device) {
                        return getDeviceDetails_1["default"](device.id).then(function (deviceDetails) { return deviceDetails.img; });
                    });
                    return [4 /*yield*/, Promise.all(devicesImgPromises)];
                case 1:
                    devicesImg = _a.sent();
                    return [2 /*return*/, (React.createElement("div", { className: "" },
                            React.createElement("h2", { className: "text-5xl text-[#005bea] text-center mb-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-full max-md:ml-auto max-md:text-center max-md:mt-32" }, topDevices[1].category),
                            React.createElement("div", { className: "flex flex-wrap flex-row justify-evenly" }, topDevices[1].list.map(function (device, index) {
                                var isEven = index % 2 === 0;
                                return (React.createElement(DeviceCard_1["default"], { key: device.id, deviceId: device.id, name: device.name, img: devicesImg[index], isEven: isEven }));
                            }))))];
            }
        });
    });
}
exports["default"] = TopDevicesByFans;

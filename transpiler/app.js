"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
//instanciamos expres
const app = (0, express_1.default)();
//aqui decimos que utile el module morgan y quiero su propiedad dev del modulo
app.use((0, morgan_1.default)('dev'));
//tambien que utilice el modulo cors
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(user_routes_1.default);
exports.default = app;

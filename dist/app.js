"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const auth_1 = require("./lib/auth");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use((req, res, next) => {
    res.setAuthCookies = (userId) => (0, auth_1.setAuthCookies)(res, userId);
    next();
});
app.use("/api", routes_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`${port}`));

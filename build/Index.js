"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Login_1 = __importDefault(require("./Routes/User/Login"));
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Midleware que transforma el req.body a json
app.get("/api/hello-world", (_, res) => {
    console.log("hello world");
    res.send("hello world");
});
app.use("/api/login", Login_1.default);
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} `);
});

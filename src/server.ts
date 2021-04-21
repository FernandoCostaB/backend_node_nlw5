import express from 'express';
import "./database";

const app = express();
app.get("/", (request, response) => response.json({ status: 200, message: "hell yas" }));
app.post("/", (resquest, response) => response.json({ status: 200, message: "You make a post" }));
app.listen(3333, () => console.log("Subiu"));
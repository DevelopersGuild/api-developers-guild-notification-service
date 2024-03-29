import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.send("Developers Guild Messaging API"));

app.listen(PORT, () => console.log(`server is listening on ${PORT}`))

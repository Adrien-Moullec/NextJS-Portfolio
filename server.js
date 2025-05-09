const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
    console.log("Request recieved")
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Contol-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.header(
        "Access-Contol-Allow-Methods",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

server.use(router);
server.listen(3001, () => {
    console.log("JSON Server is running")
})
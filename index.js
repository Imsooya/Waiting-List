const express = require("express");
const mainRouter = require('./routes');
const ticketsRouter = require('./routes/tickets');
const waitingsRouter = require('./routes/waitings');

const app = express();


app.use("/waitings", waitingsRouter);
app.use("/tickets", ticketsRouter);
app.use("/", mainRouter);

app.use((req, res, next) => {
    res.status(404);
    res.send({
        result: 'fail',
        error: `Page not found ${req.path}`
    });
});

app.use((err, req, res, next) => {
    res.status(500);

    res.json({
        result: 'fail',
        error: err.message,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
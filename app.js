const express = require("express");
const app = express();
app.use(express.json());

const { courseRouter } = require('./routes/course_router');
const { examRouter } = require('./routes/exam_router');

app.use('/api/courses/', courseRouter);
app.use('/api/exams/', examRouter);

module.exports = {
    app,
};
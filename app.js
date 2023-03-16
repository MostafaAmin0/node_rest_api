const express = require("express");
const app = express();
app.use(express.json());

const courseController = require('./controllers/course_controller');

app.get('/api/courses', courseController.getAllCourses);

app.get('/api/courses/:id', courseController.getCourseById);

app.post('/api/courses', courseController.addCourse);

app.put('/api/courses/:id', courseController.editCourse);

app.delete('/api/courses/:id', courseController.deleteCourse);

module.exports = {
    app,
};
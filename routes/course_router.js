const { Router } = require('express');
const courseRouter = Router()

const courseController = require('../controllers/course_controller');

courseRouter.get('/', courseController.getAllCourses);
courseRouter.get('/:id', courseController.getCourseById);
courseRouter.post('/', courseController.addCourse);
courseRouter.put('/:id', courseController.editCourse);
courseRouter.delete('/:id', courseController.deleteCourse);

module.exports = {
    courseRouter
};

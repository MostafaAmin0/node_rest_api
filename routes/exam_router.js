const { Router } = require('express');
const examRouter = Router()

const examController = require('../controllers/exam_controller');

examRouter.get('/', examController.getAllExams);
examRouter.get('/:id', examController.getExamById);
examRouter.get('/getByCourseById/:id', examController.getAllExamsByCourseId);
examRouter.post('/', examController.addExam);
examRouter.put('/:id', examController.editExam);
examRouter.delete('/:examId/:courseId', examController.deleteExam);

module.exports = {
    examRouter
};

const { Exam } = require('../models/exam');

const getAllExams = async (req, res) => {
    try {
        const allExams = await Exam.find({});
        res.status(200).send(allExams);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAllExamsByCourseId = async (req, res) => {
    try {
        const allExams = await Exam.find({ courseId: req.params.id });
        res.status(200).send(allExams);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getExamById = async (req, res) => {
    try {
        //findById
        const exam = await Exam.findOne({ _id: req.params.id });
        res.status(200).send(exam);
    } catch (error) {
        res.status(400).send(error);
    }
};

const addExam = async (req, res) => {
    try {
        const exam = await Exam.create(req.body);
        res.status(201).send(exam);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editExam = async (req, res) => {
    const courseId = req.params.id;
    try {
        // const course = await Course.findByIdAndUpdate({ _id: userId }, req.body);
        const exam = await Exam.findOne({ _id: req.body.id });
        if (!exam) {
            res.status(400).send('Exam not found');
        }

        // for authorzaition purposes
        if (req.body.courseId == exam.courseId) {
            if (req.body.name) {
                exam.name = req.body.name;
            }
        }

        await exam.save();
        res.status(200).send(exam);
    } catch (error) {
        res.status(400).send(error);
    }
};


const deleteExam = async (req, res) => {
    try {
        const exam = await Exam.findOne({ _id: req.params.examId });
        if (exam.courseId == req.params.courseId) {
            await Exam.deleteOne({ _id: req.params.examId });
            res.status(200).send(exam);
        } else {
            res.status(400).send('You are not authorized to delete this exam');
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllExams,
    getAllExamsByCourseId,
    getExamById,
    addExam,
    editExam,
    deleteExam,
};
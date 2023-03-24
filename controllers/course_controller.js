const { Course } = require('../models/course');
const Joi = require('joi');
const { validateCourse } = require('../helper/validation');

const getAllCourses = async (req, res) => {
    try {
        const allCourses = await Course.find({});
        res.status(200).send(allCourses);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getCourseById = async (req, res) => {
    try {
        //findById
        const allCourses = await Course.findOne({ _id: req.params.id });
        res.status(200).send(allCourses);
    } catch (error) {
        res.status(400).send(error);
    }
};

const addCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editCourse = async (req, res) => {
    const userId = req.params.id;
    try {
        // const course = await Course.findByIdAndUpdate({ _id: userId }, req.body);
        const course = await Course.findOne({ _id: userId });
        if (req.body.name) {
            course.name = req.body.name;
        }
        if (req.body.count) {
            course.count = req.body.count;
        }
        await course.save();
        res.status(200).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};


const deleteCourse = async (req, res) => {
    try {
        const course = await Course.deleteOne({ _id: req.params.id });
        res.status(200).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllCourses,
    getCourseById,
    addCourse,
    editCourse,
    deleteCourse,
};
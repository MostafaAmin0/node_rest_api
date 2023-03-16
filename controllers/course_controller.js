const { courses } = require('../models/course');
const Joi = require('joi');
const { validateCourse } = require('../helper/validation');

const getAllCourses = (req, res) => {
    res.send(courses);
};

const getCourseById = (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The Course with the given ID not found !');
    } else {
        res.send(course);
    }
};

const addCourse = (req, res) => {
    //    if(!req.body.name || req.body.name.length<3){
    //        res.status(400).send('Name is required and must be more than 3 characters');
    //    }

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
};

const editCourse = (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        res.status(404).send('The Course with the given ID not found !');

    const result = validateCourse(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    course.name = req.body.name;
    res.send(course);

};


const deleteCourse = (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        res.status(404).send('The Course with the given ID not found !');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
};

module.exports = {
    getAllCourses,
    getCourseById,
    addCourse,
    editCourse,
    deleteCourse,
};
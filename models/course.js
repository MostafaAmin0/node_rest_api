const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const courseScheme = Schema({
    name: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
    }
});

const Course = model('Course', courseScheme);

module.exports = {
    Course,
};

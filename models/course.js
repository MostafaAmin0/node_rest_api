const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const model = mongoose.model;

const courseScheme = Scheme({
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

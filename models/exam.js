const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const examScheme = Schema({
    name: {
        type: String,
        required: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
    },
});

const Exam = model('Exam', examScheme);

module.exports = {
    Exam,
};

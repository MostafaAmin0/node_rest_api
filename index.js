const express = require("express");
const Joi = require('joi');
const app =express();
app.use(express.json());

///////////////////////////////////////////////////////////////
const courses = [
    {id:1 , name:"JAVA"},
    {id:2 , name:"C++"},
    {id:3 , name:"Python"}
];
/////////////////////////////////////////////////////////////
app.get('/',(req,res) => {
    res.send('Hello World!!');
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The Course with the given ID not found !');
    }else{
        res.send(course);
    }
});

app.get('/api/courses/:year/:month', (req,res) => {
    res.send(req.params);
    });

app.get('/api/courses/:year/:month', (req,res) => {
    res.send(req.query);
    });

///////////////////////////////////////////////////////////////////////    

app.post('/api/courses', (req,res)=> {
//    if(!req.body.name || req.body.name.length<3){
//        res.status(400).send('Name is required and must be more than 3 characters');
//    }

const schema = Joi.object({
    name: Joi.string().min(3).required()
});
const result = schema.validate(req.body);
if(result.error){
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
});

///////////////////////////////////////////////////////////////
app.put('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
        res.status(404).send('The Course with the given ID not found !');
    
    const result = validateCourse(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    course.name = req.body.name;
    res.send(course);

});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

////////////////////////////////////////////////////////////////////
app.delete('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
        res.status(404).send('The Course with the given ID not found !');
    
    const index = courses.indexOf(course);
    courses.splice(index , 1);

    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port} ...`));
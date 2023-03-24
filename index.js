const mongoose = require("mongoose");
const { app } = require("./app.js");

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    await mongoose.connect('mongodb+srv://mostafa:DOp2RNfBD4CKyvzc@cluster0.vjpftqg.mongodb.net/test2');
    console.log(`listening on port ${port} ...`)
});

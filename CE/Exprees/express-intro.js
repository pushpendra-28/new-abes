import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/api/:name/:age', (req, res) => {
    res.send(`Hello ${req.params.name} and age is ${req.params.age}`);
});

app.get('/api', (req, res) => {
    try {
        const { name = "ananya", rollno = 100 } = req.query;
        if (!name) {
            res.status(404).send({ message: "Name required" });
        } else {
            res.send(`Hello ${name} and roll number is ${rollno}`);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

// get = retrieve
// post = create
// put = update one change
// patch = update multiple changes
// delete = delete

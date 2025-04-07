import express from 'express';
const app = express();

const users = [{
    id: 1,
    name: 'ANANYA',
    age: 20
}];

// Middleware to parse JSON data
app.use(express.json());

app.get('/', (req, res) => {
    res.send(users);
});

app.post('/api/createuser', (req, res) => {
    const { name, age } = req.body;
    const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push({ id: newid, name, age });
    res.send("New user is created");
});

app.get('/api/user/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: "User not found" });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
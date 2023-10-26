const express = require('express');
const app = express();

app.use(express.json());

const classrooms = [
    {id: 1, name: 'Lab 1',floor: 4, building: 'M1'},
    {id: 2, name: 'Lab 2',floor: 4, building: 'M1'},
    {id: 3, name: 'Lab 3',floor: 4, building: 'M1'},
    {id: 4, name: 'Lab 7',floor: 3, building: 'M7'}
];

app.get('/', (req, res) => {
    res.send('Node JS API working')
});

app.get('/api/classrooms', (req, res) => {
    res.send(classrooms);
});

app.get('/api/classrooms/:id', (req, res) => {
    const classroom = classrooms.find(c => c.id === parseInt(req.params.id));
    if(!classroom) return res.status(404).send('No existe esa sala');
    else res.send(classroom);

});

app.post('/api/classrooms', (req, res) => {
    const classroom = {
        id: classrooms.length + 1,
        name: req.body.name,
        floor: parseInt(req.body.floor),
        building: req.body.building,
    };

    classrooms.push(classroom);
    res.send(classroom);
});

app.delete('/api/classrooms/:id', (req, res) => {
    const classroom = classrooms.find(c => c.id === parseInt(req.params.id));
    if(!classroom) return res.status(404).send('No existe esa sala');

    const index = classrooms.indexOf(classroom);
    classrooms.splice(index, 1);
    res.send(classroom);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Listen in port ${port}...`));
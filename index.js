import express, { json } from 'express' 

const app = express()
app.use(json())
app.disable('x-powered-by')

//import { validateRoom, validatePartialRoom } from './src/schemas'

app.get('/v1/rooms', (req, res) => {
    res.send(classrooms)
})

app.get('/v1/rooms/:id', (req, res) => {
    const classroom = classrooms.find(c => c.id === parseInt(req.params.id))
    if(!classroom) return res.status(404).send('No existe esa sala')
    else res.send(classroom)

})

app.post('/v1/rooms', (req, res) => {
    const classroom = {
        id: classrooms.length + 1,
        name: req.body.name,
        floor: parseInt(req.body.floor),
        building: req.body.building,
    }

    classrooms.push(classroom)
    res.send(classroom)
})

app.delete('/v1/rooms/:id', (req, res) => {
    const classroom = classrooms.find(c => c.id === parseInt(req.params.id))
    if(!classroom) return res.status(404).send('No existe esa sala')

    const index = classrooms.indexOf(classroom)
    classrooms.splice(index, 1)
    res.send(classroom)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Listo! Escuchando en el puerto ${PORT}...`))
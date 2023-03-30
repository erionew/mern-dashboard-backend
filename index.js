import express from 'express'
import noteRouter from './routes/notes.js'
import taskRouter from './routes/tasks.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Dashboard activated')
})

app.use('/', noteRouter)
app.use('/', taskRouter)


app.listen(process.env.PORT, () => console.log('server started'))
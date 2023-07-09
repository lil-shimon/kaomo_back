import express, { Request, Response } from 'express'
import uploadRouter from './api/upload'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})

app.use('/api/upload', uploadRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
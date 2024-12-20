import jwt from "jsonwebtoken";
import express from 'express'

const app = express()

app.use(express.json())

app.listen(3000, () => {
  console.log(`Server linstening at locahost:3000`)
})

let token

app.post('/token', (req, res) => {
  const { message } = req.body

  token = jwt.sign({msg: message}, 'fdf232325454fd##')

  return res.status(200).json({ token: token })
})

app.get('/token', (req, res) => {
  const { token } = req.body

  try {
    const decoded = jwt.verify(token, 'fdf232325454fd##')

    return res.status(200).json({msg: decoded.msg})
  } catch (err) {
    return res.status(500).json({msg: `${err}`})
  }
  
})
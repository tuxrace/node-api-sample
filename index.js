const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const key = '3h9xgo4w'

function verify(req, res, next){
  console.log(req.get('Authorization'))
  if (req.get('Authorization') === 'Bearer : 3h9xgo4w')
    next()
  else
    res.status(400).json('Not Authorized')
}

app.use(cors())
app.use(verify)
app.use('/', router)

router.get('/', (req, res) => {
  res.json('ok')
})

app.listen(3000, () => console.log('running at port 3000'))

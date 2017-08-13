const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const key = '3h9xgo4w'

function verify(req, res, next){
  if (req.query.key === '3h9xgo4w')
    next()
  else
    res.status(400).send('Not Authorized')
}
app.use(verify)
app.use(cors())
app.use('/', router)

router.options('*', cors()) 

router.get('/', cors(), (req, res) => {  
  res.json('ok')
})

app.listen(3000, () => console.log('running at port 3000'))

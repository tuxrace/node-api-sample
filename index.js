const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const key = '3h9xgo4w'

function verify(req, res, next){
  console.log('inn')
  if (req.query.key === '3h9xgo4w')
    next()
  res.status(400).send('not authorized')
}
app.use(verify)
//app.use(cors())
app.use('/', router)

router.options('*', cors()) 

router.get('/', cors(), (req, res) => {  
  res.json('ok')
})

app.listen(3000, () => console.log('running at port 3000'))

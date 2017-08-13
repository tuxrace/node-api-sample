const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()

// app.use(cors())
app.use('/', router)
const key = '3h9xgo4w'

router.options('*', cors()) 

router.get('/', cors(), (req, res) => {  
  res.json('ok')
})

app.listen(3000, () => console.log('running at port 3000'))

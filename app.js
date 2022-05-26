/**
 * The app dependencies
 */
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

/**
 * The route/controller
 */
const { controller } = require('./controllers/converterController')
const app = express()
const port = 3000

app.use(helmet())
app.use(cors())
app.use(morgan('combined'))

/**
 * Defining a route
 */
app.get('/convert-to-roman-numbers', controller)

/**
 * Start listening
 */
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

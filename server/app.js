const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const { configDB } = require('./db')
const { APP_PORT } = require('./env')
const expressValidator = require('express-validator')
const noSniff = require('dont-sniff-mimetype')
const CronJob = require(cron).CronJob

const resetDB = require('./runner')

const users = require('./routes/user')
const entries = require('./routes/entries')

configDB()

new CronJob('*/20 * * * * *', () => {
  resetDB()
}, null, true, 'America/New_York')

const app = express()
app.use(passport.initialize())
require('./passport')(passport)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(expressValidator())

app.use('/api/users', users)
app.use('/api/entries', entries)

// Sets "X-Content-Type-Options: nosniff".
app.use(noSniff())

app.get('/', (req, res) => {
    res.send('<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>')
})

const PORT = APP_PORT || 5000
app.listen(PORT, () => console.log(`'Ello ${APP_NAME}.`))

function handle (signal) {
    errorOut('=> Received event:', signal)
  }
  
  async function closeGracefully (signal) {
    operation('=> Received signal to terminate:', signal)
  
    // await db.close() if we have a db connection in this app
    // await other things we should cleanup nicely
    process.exit()
  }
  
  process.on('SIGINT', closeGracefully)
  process.on('SIGTERM', closeGracefully)
  process.on('SIGHUP', handle)
  
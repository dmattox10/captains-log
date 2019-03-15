var express = require('express')
var port = process.env.PORT || 8888
var mongoose = require('mongoose')
var passport = require('passport')
var cookieParser = require('cookie-parser') //??
var bodyParser = require('body-parser')
var session = require('express-session') //??
var expressValidator = require('express-validator')

var configDB = require('./config/database.js')

var app = express()
mongoose.connect(configDB.url, { useNewUrlParser: true })
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;
// IMPLEMENT JWT
// require('./config/passport')(passport) 

//require('./routes/index.js')(app/*, passport*/) // Do I need passport?
//require('./routes/fourohfour.js')(app/*, passport*/) // Do I need passport?

require('./config/passport');

app.use(cookieParser) //??
app.use(bodyParser.urlencoded({
    extended: false // why?
}))

app.use(expressValidator)
app.use(require('express-promise')())

app.use('/controllers', express.static(__dirname + 'controllers'))
//app.use('/models', express.static(__dirname + 'models')) // I'm not sure I should be doing this one!

app.use(session({ secret: 'IWillChangeThisInProdIPromiseThisTimeForRealIMeanIt'}))

app.use(passport.initialize())
app.use(passport.session())

app.listen(port)
console.log('the magix on port ' + port)
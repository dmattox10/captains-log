require('dotenv').config()

const {
  APP_NAME,
  APP_PORT,
  MONGO_USER,
  MONGO_PASS,
  MONGO_PORT,
  ENVIRONMENT,
} = process.env

const MONGO_URI = (env = ENVIRONMENT) => {
    let URI = ''
    if (env === 'staging') {
        URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@mongo:27017/${APP_NAME}?authSource=admin`
    } else {   
        URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${APP_NAME}?authSource=admin`
    }
    return URI
}

module.exports = {
  APP_PORT,
  APP_NAME,
  MONGO_URI,
  ENVIRONMENT
}

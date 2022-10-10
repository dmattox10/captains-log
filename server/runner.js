const Entry = require('../models/entry')

exports.resetDB = async () => {
  const DB = await Entry.find()
  const idsArray = []
  DB.forEach(entry => idsArray.push(entry._id))
  Entry.deleteMany({ id: idsArray })
}


module.exports = {
  database:'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds247357.mlab.com:47357/isal',
  secret:'nonu'
}

/*
module.exports = {
  database:'mongodb://localhost:27017/isal',
  secret:'nonu'
}
*/

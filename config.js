module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Gibberishwqeqweqeq',
  DB_CONNECTION: process.env.DB_CONNECTION || 'localhost/',
  DB_COLLECTION: process.env.DB_COLLECTION || 'results',
  URL: process.env.URL || 'http://localhost:3000'
}

const { Pool } = require('pg')

const pool = new Pool({
  user: 'dilven',
  host: 'localhost',
  database: 'shop',
  password: 'password',
  port: 5432
})

module.exports = {
  pool
}
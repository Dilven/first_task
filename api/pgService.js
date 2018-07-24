const { Pool } = require('pg')

const pool = new Pool({
  user: 'dilven',
  host: 'db',
  database: 'shop',
  password: 'password',
  port: 5432
})

module.exports = {
  pool
}
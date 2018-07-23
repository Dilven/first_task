const { Client } = require('pg')

const connectionString = 'postgresql://dilven:password@localhost/shop';

const client = new Client({
  connectionString: connectionString,
})

module.exports = {
  client
}
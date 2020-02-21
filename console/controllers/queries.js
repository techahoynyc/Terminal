'use strict';

const { loggers } = require('winston')
const logger = loggers.get('ccterminal-logger')

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: 'localhost',
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
})

exports.getHome = function(req, res) {
  logger.info('querying home')
  logger.info(`password:${password}`)
  var ip = 0
  pool.query('SELECT * from users', (error, results) => {
    if (error) {
      logger.error(error)
    }
    var data = results.rows;
    var firstname = results.rows[0].username
    logger.info(`firstusername: ${firstname}`)
    console.log(data);
    res.render('main.hbs', {users: data} );
  });
};

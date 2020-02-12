const redis = process.env.REDIS_HOST || 'localhost';
const redisPort = process.env.REDIS_PORT || 6379;
const appPort = process.env.APP_PORT || 3000;

module.exports = require('yargs')
  .usage('Usage: $0 [options]')
  .alias('u', 'url')
  .describe('u', 'Application URL')
  .default('u', 'http://127.0.0.1:' + appPort)
  .alias('p', 'port')
  .describe('p', 'Port number for the Express application')
  .default('p', appPort)
  .describe('redis-host', 'Redis Server hostname')
  .default('redis-host', redis)
  .describe('redis-port', 'Redis Server port number')
  .default('redis-port', redisPort)
  .describe('redis-pass', 'Redis Server password')
  .default('redis-pass', false)
  .describe('redis-db', 'Redis DB index')
  .default('redis-db', 0)
  .help('h')
  .alias('h', 'help')
  .argv;

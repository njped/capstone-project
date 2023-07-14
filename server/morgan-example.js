const express = require('express');
const morgan = require('morgan');
const winston = require('winston')

const app = express();

const PORT = process.env.PORT || 5000

app.use(morgan('combined'))
app.use(express.urlencoded({extended: false}))
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({filename: 'logfile.log'})
  ]
})

app.get('/', (req, res) => {
  logger.info('Home Page Accessed')
  res.send('Hello, Winston and Morgan')
})

app.post('/addUser', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  logger.info(`${name} and ${email} has been logged`)
  res.send(`hello ${name} at ${email}`);
})

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})
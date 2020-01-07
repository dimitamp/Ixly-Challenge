const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const port = 4000;
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(logger('dev'));
}
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/api/v1/oauth2/token', (req, res, next) => {
  const {email, password} = req.body;
  if (email === 'admin@ixly.nl' && password === 'Test123') {
    return res.json({
      user: {
        id: 'fafa78787eafs78',
        email: 'admin@ixly.nl',
        role: 'admin'
      },
      token: 'fsdf4aw6584f8wew489c4adc7asdc894sc9as7987897'
    });
  } if (email === 'admin@ixly.nl') {
    return res.status(401).json({message: 'Authentication error: Incorrect password'});
  } 
  return res.status(404).json({message: 'Resources error: User doesnt exist'});
});

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`NodeJS app listening on port ${port}. \nMode: ${process.env.NODE_ENV}`));

module.exports = app;

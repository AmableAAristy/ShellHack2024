const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Auth0 configuration
const authConfig = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET
};

// Middleware to validate JWT
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),
  audience: authConfig.clientId,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256']
});

app.get('/secure', checkJwt, (req, res) => {
  res.send({ message: 'This is a secure endpoint accessible only with a valid token' });
});

app.post('/gemini', async (req, res) => {
  try {
    const response = await axios.post('https://gemini-api-url', req.body, {
      headers: {
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`
      }
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

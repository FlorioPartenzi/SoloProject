const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const router = require('./router');
const prisma = require('./model/index');
const { checkAuth } = require('./middleweare/auth');
const { FIREBASE_SERVICE_ACCOUNT } = process.env;

const PORT = 3001;
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', checkAuth);
app.use(router);

(async function Bootstrap() {
  try {
    await prisma.$connect();
    console.log('connected to Database');
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

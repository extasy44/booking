import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB Connected'))
  .catch((err) => {
    console.log('DB Connection error: ', err);
  });

//middlewares
app.use(cors());
app.use(morgan('dev'));

//route middleware
fs.readdirSync('./routes').map((r) =>
  app.use('/api', require(`./routes/${r}`))
);

const port = process.env.PORT || 8000;

app.listen(8000, () => console.log('Server is running on port', port));

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

const user = process.env.MONGO_DB_ATLAS_USER;
const password = process.env.MONGO_DB_ATLAS_PASSWORD;

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0-hfyur.gcp.mongodb.net/aircnc?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);

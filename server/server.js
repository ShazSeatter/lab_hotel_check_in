const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());   // Allows us to get the req.body in our router

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');   // Imports createRouter Function

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('hotel');    // Grab the birds database that is created when we - npm run seeds
    const bookingsCollection = db.collection('bookings');    // Grab our sightings collection from the birds database
    const bookingsRouter = createRouter(bookingsCollection);    // Pass the sightings collecion to the creatRouter function 
    app.use('/api/bookings', bookingsRouter);   // Let express know the path to access the router for our sightings collection
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
import './seedData';
import './db/index.js';
import dotenv from 'dotenv';
import express from 'express';
//updating index.js to use the new movies routing script
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import usersRouter from './api/users';

dotenv.config();

// eslint-disable-next-line no-unused-vars
const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    // eslint-disable-next-line no-undef
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
  };

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT;

app.use(express.json());
app.use('/api/movies', moviesRouter); //movies router
app.use('/api/genres', genresRouter); //genres router
app.use('/api/users', usersRouter); //users router
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
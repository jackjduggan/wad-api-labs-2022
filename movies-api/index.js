/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import dotenv from 'dotenv';
import express from 'express';
//updating index.js to use the new movies routing script
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import './db';
import './seedData';
import usersRouter from './api/users';
import session from 'express-session';
// replace existing import with passport strategy​
import passport from './authenticate';

dotenv.config();

// eslint-disable-next-line no-unused-vars
const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

//session middleware
// replace app.use(session([... with the following:
app.use(passport.initialize());

// eslint-disable-next-line no-undef
const port = process.env.PORT;

app.use(express.json());

app.use('/api/genres', genresRouter); //genres router
app.use('/api/users', usersRouter); //users router

app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
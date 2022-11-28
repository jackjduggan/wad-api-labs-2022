import './seedData';
import './db/index.js';
import dotenv from 'dotenv';
import express from 'express';
//updating index.js to use the new movies routing script
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import usersRouter from './api/users';

dotenv.config();

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT;

app.use(express.json());


app.use('/api/movies', moviesRouter); //movies router
app.use('/api/genres', genresRouter); //genres router
app.use('/api/users', usersRouter); //users router

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
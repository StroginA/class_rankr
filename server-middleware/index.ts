import express from 'express';
import sessions from './routes/sessions';
import users from './routes/users'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessions);
app.use(users);

module.exports = {
  path: '/api',
  handler: app
}
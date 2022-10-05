import express from 'express';
import sessions from './routes/sessions'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessions);

module.exports = {
  path: '/api',
  handler: app
}
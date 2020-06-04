const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const message = 'Hello Cloud Gurus!'
const fullMessage = `${message}\n`
const message = 'Hello Cloud Gurus!';
const fullMessage = `${message}\n`;

const server = http.createServer((request, response) => {
  response.statusCode = 200;

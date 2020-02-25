'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const delay = require('express-delay');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(delay(1000));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

let users = [
    {id: 'MY0001', nom: 'MEDDAH', prenom: 'Yacine', job: 'Web Developer'},
    {id: 'HR0002', nom: 'HALTER', prenom: 'Romain', job: 'Web Developer'},
    {id: 'CA0003', nom: 'CROIN', prenom: 'Antoine', job: 'Web Developer'},
    {id: 'HO0004', nom: 'HANAFI', prenom: 'Oulaya', job: 'Web Developer'},
    {id: 'TH0005', nom: 'TRAORE', prenom: 'Harouna', job: 'Web Developer'},
    {id: 'TL0006', nom: 'TUGAYE', prenom: 'Loic', job: 'Web Developer'},
    {id: 'CM0007', nom: 'CHAMOT', prenom: 'Maxime', job: 'Mobile Developer'},
    {id: 'BW0008', nom: 'BOURGUIBA', prenom: 'Wassim', job: 'Web Developer'},
    {id: 'SC0009', nom: 'SYVERY', prenom: 'Chloé', job: 'HR Manager'},
];


app.post('/login', (request, result) => {
  const {username, password} = request.body;
  if (username === password && username ==='admin') {
    return result.json("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXX0.qETMObDCoQWD58kz67wQOUzCe8ZxJ5i5t2R9ccI0shk");
  }
  if (username === password && username ==='user') {
    return result.json("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzZXIiLCJpYXQiOjE1MTYyMzkwMjIsInJvbGVzIjpbIlVTRVIiXX0.ADtuYXqxYBaZ5oMFyBJi4NrUzA69Lw9JjO3coe-YeGg");
  }
  return result.send(401);
});

app.get('/users', (request, result) => {
    return result.json(users);
});
app.get('/users/:id', (request, result) => {
    return result.json(_.find(users, user => user.id === request.params.id));
});
app.post('/users', (request, result) => {
    users.push(request.body);
    return result.json(users);
});
app.delete('/users/:id', (request, result) => {
    _.remove(users, {id: request.params.id});
    return result.json(users);
});
app.put('/users/:id', (request, result) => {
    users = _.map(users, a => a.id === request.params.id ? Object.assign(a, request.body) : a);
    return result.json(users);
});

app.listen(process.env.NGX_SERVER_PORT, function () {
    console.log(`Users server listening on port ${process.env.NGX_SERVER_PORT}`);
});

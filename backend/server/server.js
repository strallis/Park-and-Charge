// Server for the ParkShark app

const express = require("express");
const path = require('path');
const http = require('http');
require('better-logging')(console);

module.exports = () => {

  const app = express();
  const httpServer = http.Server(app);

  // Setup mysql
  // TAKE BACK
  var mysql = require('mysql');

// for local setup

// TAKE BACK
// var connection = mysql.createConnection({
//   host: '2001:6b0:1:1300:250:56ff:fe01:25a',
//   user: 'strall_admin',
//   password: 'Be7phie3',
//   database: 'strall'
// })

  // Setup express
    app.use((req, res, next) => {
      // Logs each incoming request
      console.info(`${console.color.Dark_Gray} ${req.ip} ${console.color.RESET} ${req.path} ${req.body || ''}`)
      next()
    })

    app.use(
      express.json() /*
          This is a middleware, provided by express, that parses the body of the request into a javascript object.
          It's basically just replacing the body property like this:
          req.body = JSON.parse(req.body)
      */
    )

    app.use(
      express.urlencoded({
        extended: true
      })
    )

    // app.get('/user', function(req, res){
    //   //const {userName} = req.body.userName;
    //   console.log('bbbbbb');
    //   connection.query('SELECT * FROM users', function(error, rows, fields){
    //         if(error) console.log(error);
    //
    //         else{
    //             console.log(rows);
    //             res.send(rows);
    //
    //         }
    //
    //   });
    // });

    // app.listen(3001, () =>
    //   console.log('Express server is running on localhost:3001')
    // );

    // // Get routings
    // app.get('/ParkShark_api/test', (req, res) => {
    //   console.log("Welcome to the ParkShark API");
    //   console.log('Strallis the chopper')
    //   });

    // TAKE BACK in school
    // return {
    //   app,
    //   connection,
    //   listen: (port, cb) => httpServer.listen(port, cb),
    // };
    return {
      app,
      listen: (port, cb) => httpServer.listen(port, cb),
    };
  };

# social-network-api

## Description

The [Social Network API](https://github.com/CollyLee/social-network-api) is a simulated back-end database for a social networking site. It has the database and server routes needed to manage users, create posts ("thoughts"), and add reactions to those posts. It uses MongoDB/Mongoose for the database, and the Express server routes can be tested via Insomnia.

## Installation

No special installation is needed for this application. You will need a program such as Insomnia to test the routes, as the application does not have a front-end.

## Usage

A full video tutorial on how to access and use the database connections can be found [here](https://drive.google.com/file/d/1qAVJZ-WVlx_UgOAjumnOFsbQT0oWNk7C/view?usp=sharing).

To start up the server, the command "node server.js" needs to be entered into the terminal. This will create a server connection to localhost:3001. From there, the routes can be tested in Insomnia. In Insomnia, the different Get, Put, Post, and Delete routes can be tested. The full server paths that need to be used with localhost:3001 can be found in the 2 index.js files in the routes folder.

For creating and editing thoughts and reactions, provide the request body in JSON format, as seen in the example below:

![screenshot of a Thought being created](./assets/Screenshot%202023-05-15%20194837.png)

## Credits

A huge thank you to Dennis Itua for helping get the Reaction route up and running during a tutoring session!
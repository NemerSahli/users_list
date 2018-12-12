import React from 'react';

export default function About() {
  return (
    <div className="container mt-5">
      <h1 className="display-4">Users List</h1>
      <p className="lead">
        Here a task to Create a React App „Users List“ in which you can create,
        edit and delete users. Create a NodeJS backend with the DB of your
        choice Mongo, SQL or JSON flatfiles Implement a route /login that checks
        for the user/password combination on the backend Decide whether you use
        Sessions or JWT. Add the api endpoints POST /user, PUT /user and DELETE
        /user. Implement the frontend like the following template and add
        functionality to create, change and delete user. Take a look into
        Reactstrap Modals.
      </p>
      <p>Developed by Nemer EL-Sahli</p>
      <p className="text-secondary">Version 1.0.2</p>
    </div>
  );
}

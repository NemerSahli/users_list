import React from 'react';
import { Link } from 'react-router-dom';
export default function SingUpSuccessful() {
  return (
    <div>
      <h1>Sign up Successful</h1>
      <Link to="/">Go to login</Link>
    </div>
  );
}

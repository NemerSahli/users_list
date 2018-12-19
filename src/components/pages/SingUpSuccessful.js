import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const SingUpSuccessful = props => {
  return (
    <Row>
      <Col sm="12">
        <Card body>
          <CardTitle>SignUp Successful</CardTitle>
          <CardText>
            Thank you for registration in Users list App please press on the
            button below to login
          </CardText>
          <Link to="/">
            <Button>Go to login </Button>
          </Link>
        </Card>
      </Col>
    </Row>
  );
};
export default SingUpSuccessful;

import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const CardView = (props) => {
  const { title, img, price, name } = props.card;
  return (
    < >
      <Col style={{ minHeight: '550px' }} className='mx-auto' lg={4}>
        <Card>
          <Card.Img style={{ height: '300px' }} variant="top" src={img} />
          <Card.Body>
            <Card.Title sd> Name : {name}</Card.Title>
            <p>{title} </p>
            <Card.Text>
              <h5> Price: {price} </h5>
            </Card.Text>
            <Card.Footer>
              <Button style={{ backgroundColor: '#37474f' }} className='text-decoration-none mt-3 w-100  border-0'> Details</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardView;
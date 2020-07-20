import React from 'react';

import {
  Container,
  Col,
  Button,
  Form
} from 'react-bootstrap'

import readURL from "../../utilits/readURL";

import './ProductForm.scss'

function ProductForm(props) {
  // let { description, photo } = props.product;
  let description = '', photo;
  return (
    <Container id="product-form" md={8} offset={2}>
      <Form as={Col} size="sm">
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control size="sm" type="text" placeholder="" />
          <Form.Text className="text-muted">
            It should be 20-60 signs
          </Form.Text>
        </Form.Group>

        <Form.Row id="product-img-form" className="justify-content-around align-items-center">
          <Form.Group as={Col} className="col-12 col-sm-5 col-md-4 d-flex justify-content-center">
            <img id="blah"
                 src={`${photo || "http://placehold.it/200"}`}
                 alt={`product-${ description }`} />
          </Form.Group>
          <Form.Group as={Col} className="col-12 col-sm-5 col-md-4">
            <label htmlFor="form-input-file" className="form-file-label">
              Product image:
            </label>
            <input id="form-input-file"
                   type="file"
                   className="form-control-file"
                   onChange={readURL}/>
          </Form.Group>

        </Form.Row>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Product description:</Form.Label>
          <Form.Control size="sm" as="textarea" rows="3" />
          <Form.Text className="text-muted">
            It should be less then 200 signs
          </Form.Text>
        </Form.Group>

        <Form.Row className="align-items-start">
          <Form.Group as={Col} className="col-12 col-md-4">
            <Form.Label>Price:</Form.Label>
            <Form.Control size="sm" type="text" placeholder="" />
            <Form.Text className="text-muted">
              Max price 99999999.99$
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="col-12 col-md-4">
            <Form.Label>Sale percent:</Form.Label>
            <Form.Control size="sm" type="text" placeholder="" />
            <Form.Text className="text-muted">
              Should be 10-90%
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="col-12 col-md-4">
            <Form.Label>End date sale:</Form.Label>
            <Form.Control size="sm" type="date" placeholder="" />
            <Form.Text className="text-muted">
              Should be 10-90%
            </Form.Text>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ProductForm;

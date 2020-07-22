import React, { useState } from 'react';
import {
  Container,
  Col,
  Button,
  Form,
  Spinner
} from 'react-bootstrap'

import './ProductForm.scss'

import readURL from "../../utilits/readURL";
import {
  clearProductForm,
  updateProductForm
} from "../../redux/actions";
import { connect } from "react-redux";

function ProductForm(props) {

  const { title, description, photo, price, sale_percent, end_sale_period } = props.productForm;

  const changeTitleHandler = (e) => props.updateForm({...props.productForm,title: e.target.value})
  const changeDescriptionHandler = (e) => props.updateForm({...props.productForm,description: e.target.value})
  const changePhotoHandler = (e) => {
    const imageFile = e.target.files[0];

    if (imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      props.updateForm({...props.productForm,title: imageFile})
      readURL(e)
    }
  };
  const changePriceHandler = (e) => props.updateForm({...props.productForm,price: e.target.value})
  const changeSalePercentHandler = (e) => props.updateForm({...props.productForm,sale_percent: e.target.value})
  const changeEndSalePeriodHandler = (e) => props.updateForm({...props.productForm,end_sale_period: e.target.value})

  const [validated, setValidated] = useState(false);

  const handleSubmit = (saveHandler) => (event) => {
    event.preventDefault();
    let sendForm = true;
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();

      sendForm = false;
      console.log('form is not correct')
    }


    setValidated(true);

    if(sendForm) {
      console.log('form is  correct')
      saveHandler(props.productForm)
    }
  };

  const today = Date.now();
  console.log(today)
  const isValidTitleInput = (title.length >= 20 && title.length <= 60),
    isValidDescInput = (description.length > 0 && description.length <= 200),
    isValidPriceInput = (price > 0 && price <= 99999999.99),
    isValidSalePercentInput = ( sale_percent >= 10 && sale_percent <= 90 ),
    isValidEndSalePeriodInput = true /*(new Date(end_sale_period) >
      (new Date( `${new Date(today).getFullYear()}-${new Date(today).getMonth()}-${new Date(today).getDay()}`)))*/
  // console.log('User',(new Date(end_sale_period)))
  console.log('Date',(new Date( `${new Date(today).getFullYear()}-${new Date(today).getMonth()}-${new Date(today).getDay()}`)))
  return (
    <Container id="product-form" md={8} offset={2}>
      <Form  validated={validated} onSubmit={handleSubmit(props.saveHandler)}>
        <Form.Group>
          <Form.Label>Title: *</Form.Label>
          <Form.Control size="sm"
                        required
                        type="text"
                        isValid={ isValidTitleInput }
                        value={ title }
                        onChange={ changeTitleHandler }
          />
          <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            It should be 20-60 signs
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Row id="product-img-form" className="justify-content-around align-items-center">
          <Form.Group as={Col} className="col-12 col-sm-5 col-md-4 d-flex justify-content-center">
            <img id="blah"
                 src={`${ photo || "http://placehold.it/200"}`}
                 alt={`product-${ description }`} />
          </Form.Group>
          <Form.Group as={Col} className="col-12 col-sm-5 col-md-4">
            <label htmlFor="form-input-file" className="form-file-label">
              Product image: *
            </label>
            <input id="form-input-file"
                   required

                   type="file"
                   className="form-control-file"
                   onChange={ changePhotoHandler }/>
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Product description:</Form.Label>
          <Form.Control size="sm"
                        as="textarea"
                        rows="3"
                        isValid={ isValidDescInput }
                        value={ description }
                        onChange={ changeDescriptionHandler }
          />
          <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            It should be less then 200 signs
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Row className="align-items-start">
          <Form.Group as={Col} className="col-12 col-md-4">
            <Form.Label>Price: *</Form.Label>
            <Form.Control size="sm"
                          required
                          type="number"
                          isValid={ isValidPriceInput }
                          value={ price }
                          onChange={ changePriceHandler }
            />
            <Form.Control.Feedback>
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Have to be between 0.00 - 99999999.99$
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="col-12 col-md-4">
            <Form.Label>Sale percent:</Form.Label>
            <Form.Control size="sm"
                          type="number"
                          isValid={ isValidSalePercentInput}
                          value={ sale_percent }
                          onChange={ changeSalePercentHandler }
            />
            <Form.Control.Feedback>
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Have to be between 10-90%
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="col-12 col-md-4">
            <Form.Label>End date sale:</Form.Label>
            <Form.Control size="sm"
                          required={isValidSalePercentInput}
                          disabled={!isValidSalePercentInput}
                          type="date"
                          isValid={ isValidEndSalePeriodInput }
                          value={ end_sale_period }
                          onChange={ changeEndSalePeriodHandler }
            />
            <Form.Control.Feedback>
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Have to be greater then today
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Col className="d-flex justify-content-around">
          <Button
            variant="warning"
            onClick={ props.clearForm }
          >
            Clear form
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={ props.productForm.isPosting && true }
          >
            { props.productForm.isPosting &&
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            }
            Submit form
          </Button>
        </Col>
      </Form>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearForm: () => dispatch(clearProductForm()),
    updateForm: (productForm) => dispatch(updateProductForm(productForm))
  }
}

export default connect(undefined, mapDispatchToProps)(ProductForm);

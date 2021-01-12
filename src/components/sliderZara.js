import React, { Component } from 'react';
import '../App.css';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const txtHead = {
  title: 'YOUR LIFE'
}

const dataslide = {
  datasearch: [
    {
      gift: 'Shoes',
      colour: 'black',
      name: 'Nike Air Max 200 Mens Shoe',
      merk: 'Nike',
      price: 75
    },
    {
      gift: 'Shoes',
      colour: 'white',
      name: 'Adidas Originals U_path Run',
      merk: 'Adidas',
      price: 76
    }
  ]
}

class Header extends Component  {
  render() {
    return (
      <div>
        <Jumbotron className="topup">
          <Container>
            <Row xs="2">
              <Col>
                <h1 className="display-3 head-title text-left">{ txtHead.title }</h1>
                <p className="lead head-sub-title">COMFORTABLE WALKING 
                  <span className><a>ANYWHERE</a></span>
                </p>
              </Col>
              <Col>
                <hr className="my-2" right />
                
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Header;
import React, { Component } from 'react'
import '../App.css'
import { Container, Row, Col } from 'reactstrap'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap'

class sepatuSantai extends Component {
    render() {
        if(this.props.merk == 'Adidas') {
            return (
                <div style={{ margin: 'auto'}} id="sec-pil">
                    <Col>
                        <Card className="cardshadow">
                            <CardImg top width="100%" src={ this.props.img } alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="text-left font-lato">{ this.props.nama }</CardTitle>
                            <CardText className="foot-card">Rp. { this.props.harga } <span><a href="#">Buy</a></span></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            )
        } else {
            return null
        }

    }
}

export default sepatuSantai;
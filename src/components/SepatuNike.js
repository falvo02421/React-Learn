import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap'

class sepatuSantai extends Component {
    render() {
        if(this.props.merk == 'Nike') {
            return (
                <div style={{ margin: 'auto'}}>
                    <Col>
                        <Card className="shadow">
                            <CardImg top width="100%" src={ this.props.img } alt="Card image cap" />
                            <CardBody>
                            <CardTitle>{ this.props.nama }</CardTitle>
                            <CardText>Rp. { this.props.harga }</CardText>
                            <CardText>
                                <small className="text-muted">{ this.props.stok }</small>
                            </CardText>
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
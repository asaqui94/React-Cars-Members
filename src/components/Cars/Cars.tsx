import React, {useState, useEffect} from 'react';
import {useGetData} from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col,Row } from 'react-bootstrap';
import Logo2 from '../../assets/img/Logo2.png';

export const Cars = () => {

    let {carData, getData} = useGetData();
    console.log(carData)

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Hello Carpi's Members!</h1>
                        <p>Here are your current collection of cars!</p>
                        <Button>Create New Car</Button>
                    </Jumbotron>
                </Col>
            </Row>

            {/* Row to display Data */}
            <Row>
                <Col>
                    <div>
                        {carData.map( (item:any) => (
                            <div key={item.id}>
                                  <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={Logo2} />
                                    <Card.Body>
                                        <Card.Title>
                                            { item.name }
                                        </Card.Title>
                                        <Card.Text>
                                            {item.model}
                                        </Card.Text>
                                        <Card.Text>
                                            { item.price }
                                        </Card.Text>
                                        <Card.Text>
                                            { item.year }
                                        </Card.Text>

                                        <Button variant="danger">Delete</Button>
                                        <Button variant="primary">Update</Button>
                                    </Card.Body>   
                                  </Card>      
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Image from '../assets/img/hero-carousel/hero-carousel-3.svg'
const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="">
          <img className="img-fluid" src={Image} alt="Hero logo" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to home page</h1>
          <p className="">
            Et voluptate esse accusantium accusamus natus reiciendis quidem
            voluptates similique aut.
          </p>
          <Button className="mr-3" variant="primary">
            Get Started
          </Button>
          <Button variant="info">Watch Video</Button>
        </Col>
        <Outlet />
      </Row>
    </Container>
  )
}

export default Home

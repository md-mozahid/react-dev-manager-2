import React from 'react'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action as={NavLink} to="profile">
                Profile
              </ListGroup.Item>
              <ListGroup.Item action as={NavLink} to="history">
                History
              </ListGroup.Item>
              <ListGroup.Item action as={NavLink} to="contact-list">
                Contact List
              </ListGroup.Item>
              <ListGroup.Item action as={NavLink} to="security">
                Security
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Outlet />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

export default Dashboard

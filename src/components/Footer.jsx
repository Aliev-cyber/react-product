import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




const Footer = () => {
  return (
    <div> <Navbar expand="lg" className="bg-primary ">
    <Container>
      <Navbar.Brand  href="#">Footer</Navbar.Brand>
    </Container>
  </Navbar>
 </div>
  )
}

export default Footer
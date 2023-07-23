
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 export function HeaderSec() {
    return(
        <>
        <Container fluid className='contain'>
      <Row className='row1'>
        <Col  xs={6} md={4} className='coll1'><b>TRAVELLING</b></Col>
      </Row>
      <Row className='row2'>
        <Col xs={6} md={4} className='coll2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusantium facere officiis maiores aliquid, quaerat cumque alias earum quis excepturi. Alias saepe, quibusdam placeat eaque ipsum porro rerum aliquid repudiandae.
        </Col>
      </Row>
    </Container>
        </>
    );
}
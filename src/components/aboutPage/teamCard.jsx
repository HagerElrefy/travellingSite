
import Card from 'react-bootstrap/Card';
import './catSection.css';
export default function teamCard(props){
    let photo = props.photo;
    let pag = props.pag;
    return(
        <>
        <Card style={{ width: '20rem' }} className='card1'>
      <Card.Img variant="top" src={photo} style={{ height : '30vh' }}/>
      <Card.Body>
        <span>{pag}</span>
      </Card.Body>
    </Card>
        </>
    );
}
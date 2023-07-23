import './contryCard.css'
import Card from 'react-bootstrap/Card';
export default function ContryCard(props) {
    let item = props.item;
   
    return(
        <>
       
        
       
           <div className="col-6 col-md-3">
        <Card className='h-100'>
        <Card.Img variant="top" src={item.logo} className="cardImg" />
        <Card.Body>
          <Card.Title>{item.country}</Card.Title>
          <Card.Text>
            {"established in : " + item.established}
          </Card.Text>
          <Card.Text>
            {"head_quaters : " +  item.head_quaters}
          </Card.Text>
          <Card.Text>
            {"slogan : " + item.slogan}
          </Card.Text>
          <span> Website : </span><Card.Link href={item.website}  >{item.website }</Card.Link>
        </Card.Body>
      </Card> 
        </div>       
       
        
         
        </>
    );
}
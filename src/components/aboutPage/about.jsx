import team from './team_2.jpg';

import Card from 'react-bootstrap/Card';
import './about.css';
export function About() {
    return(
        <>
        <div className="aboutDiv">
          <p className='aboutP_1'><b>ABOUT</b></p>
          <p className='aboutP_2'>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque</p>
          <p className='aboutP_2'>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore reprehenderit voluptatem! Eligendi praesentium quis explicabo, doloribus fuga quisquam accusamus omnis? Mollitia at repellat error consequatur libero eligendi, natus cum.</p>
        </div>
        <div> <p className='aboutP_1_team'><b>Our Team</b></p></div>
        <div className="cardAboutDiv" >
         
          <Card style={{ width: '18rem' }} className="aboutCard">
            <Card.Img variant="top" src={team} />
            <div class="overlay">
            <div class="text">devoloper1</div>
          </div>
          </Card>
          <Card style={{ width: '18rem' }} className="aboutCard">
            <Card.Img variant="top" src={team} />
            <div class="overlay">
            <div class="text">devoloper2</div>
          </div>
          </Card>
          <Card style={{ width: '18rem' }} className="aboutCard">
            <Card.Img variant="top" src={team} />
            <div class="overlay">
            <div class="text">devoloper3</div>
          </div>
          </Card>
          <Card style={{ width: '18rem' }} className="aboutCard">
            <Card.Img variant="top" src={team} />
            <div class="overlay">
            <div class="text">devoloper4</div>
          </div>
          </Card>
        </div>
        </>
    );
}
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import contact from './contact.jpg';
import InputGroup from 'react-bootstrap/InputGroup';
import './contact.css';
export function Contact() {
    return(
        <>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className='imgDiv'> <img src={contact} alt="contact image"/></div>
              </div>
              <div className="col  bg-light rounded" style={{margin : '2%'}}>
                <div className='formDiv'>
                <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text>First and last name</InputGroup.Text>
                  <Form.Control aria-label="First name" />
                  <Form.Control aria-label="Last name" />
                </InputGroup>
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-at"></i> Email</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-key"></i> password</InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" />
                </InputGroup>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remmber Me"/>
                  </Form.Group>

                  <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-comment"></i>  comment</InputGroup.Text>
                  <Form.Control as="textarea" rows={3} />
                </InputGroup>

                  <Button variant="primary" type="submit">
                    Send
                    </Button>
            </Form>
                </div>
              </div>
            </div>
          </div>


          
        </>
    );
}
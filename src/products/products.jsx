import ContryCard from "./contryCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './contryCard.css';
export default function Products(props) {
    let data = props.data;
    let arrData = [];
    for (let i = 0; i < 20; i++) {
        arrData[i] = data[i]; 
    }
    console.log(arrData);
    let showData = () => {
       return arrData.map((item) => {
                console.log(item);
              return <ContryCard item={item} />
       })
       
    }
    return(

        <> 
           <div className="row g-2 bg-light rounded">
            {showData()}
            </div>      
        </>
    );
}
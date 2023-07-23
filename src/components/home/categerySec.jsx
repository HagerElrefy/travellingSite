import './catSection.css';
import contact from "./contact.jpg";
import countries from "./countries.jpg";
import about from "./about.jpg";
import MyCard from "./catCard.jsx";
export default function Categry() {
    return(
        <>
        <div className='div1'>
        <MyCard photo = {about} pag = {"about"} />
        <MyCard photo = {countries} pag = {"countries"}/> 
        <MyCard photo = {contact} pag = {"contact us"}/>  
        </div>
        </>
    );
}
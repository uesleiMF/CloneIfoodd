import { Container, Social } from './styles';
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
     
      <Social>
               
             <a href="https://www.facebook.com/BlueEdTechBr/">
                 
                 <FaFacebookSquare/>
               </a>
                           
               <a href="https://www.instagram.com/blue_edtech_br/">
                 
                 <GrInstagram/>
               </a>
               
        </Social>
     
      <span>BLUE EDTECH </span>
      <span>ESCOLA DE PROGRAMAÇÃO</span>
      
        </Container>
  )
}
import { Link } from "react-router-dom"
import { Container, Row ,Col} from "reactstrap";
import Footer from "../../Components/Header/Footer";
import Cars from "./car";
import Crousel from "./Carousel";
import image1 from "./offer-706850__340.jpg"

import "./home.css"
import SignUpCard from "./SignUpCard";

const Home = () => {

    return (
        
<Container className="shadow">
        <div  > 
            <nav class="navbar navbar-info bg-light  ">
                <div class="container-fluid shadow">
                    <span >
                        <h1 className="mt-2 mb-2 shadow" class="markee" > Welcome To Restaurant Management System</h1>
                        <h2 className=" mt-2 mb-2 shadow" class="markee3">Swad-Anand</h2>
                        <marquee className="shadow" behavior="scroll" direction="left" scrollamount="10" class="markee1" >
                        Order your food online and get free Delivery !!!!!</marquee>
                    </span>
                </div>
            </nav>
        </div>
    <div>
    <Crousel /> 
    <SignUpCard/>
        
        </div>

        </Container>

    )
}

export default Home;


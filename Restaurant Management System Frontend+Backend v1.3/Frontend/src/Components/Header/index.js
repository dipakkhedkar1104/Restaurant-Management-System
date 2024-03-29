import { useNavigate } from 'react-router';
import './index.css'

import RLogo from './RLogo.png'
import RLogo1 from './RLogo1.png'
import RLogo2 from './RLogo2.png'

import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import CustomerSignUp from '../../Pages/Customer/CustomerSignUp';

const Header = () => {

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.clear()
        navigate("/")
    }

    return (
        
          
        <Container style={{ 
            background: "linear-gradient(to right, rgba(180, 150, 180, 0.9), rgba(185, 250, 150, 0.9))",
            textAlign: "center"
          }}>
        <div className="d-flex flex-md-row align-items-center p-2 px-md-4 mb-3 bg-red border-bottom ">
            <div className="logo-container">
                {/* <img className="logo card shadow" src={RLogo2} alt="logo" /> */}
                <img className="logo rounded-circle" src={RLogo2} alt="logo" />

            </div>
            
            <nav class="navbar navbar-danger shadow">
  <div class="container-fluid">
    <div>
      <Link class="navbar-brand" to="/" className="title">Swad-Anand</Link>
      <h6>Bringing Anand (Joy) to Every Swad (Taste)</h6>
    </div>  
  </div> 
</nav>

  
            {(sessionStorage["personType"] === "customer" && sessionStorage["loginStatus"] === "1") ?
                <div className='d-flex align-items-center flex-md-row '>
                    <nav className="my-5 my-md-3 mr-md-3 " >
                        <Link className="p-2 text-dark" to="/customer/home" >Home</Link>
                        <Link className="p-2 text-dark" to="/customer/orders">All Orders</Link>
                        <Link className="p-2 text-dark" to="/customer/cart">Cart</Link>
                        {/* <Link className="p-2 text-dark" to="/customer/home">Hello {name}</Link> */}
                    </nav>
                    <a className="btn btn-outline-primary" href="customer/signin" onClick={() => logout()}>Log Out</a>
                </div>
                : <div></div>
            }
            {(sessionStorage["personType"] === "manager" && sessionStorage["loginStatus"] === "1") ?
                <div className='d-flex align-items-center'>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-dark" to="/manager/home">Home</Link>
                        <Link className="p-2 text-dark" to="/manager/restaurantmenu">Restaurant Menu</Link>
                        <Link className="p-2 text-dark" to="/manager/allorders">All Orders</Link>
                    </nav>
                    <a className="btn btn-info" href="#" onClick={() => logout()}>Log Out</a>
                </div>
                : <div></div>
            }
            {(sessionStorage["personType"] === "deliveryPerson" && sessionStorage["loginStatus"] === "1") ?
                <div className='d-flex align-items-center'>
                    <nav className="my-2 my-md-0 mr-md-3">
                    <b><Link className="p-2 text-dark" to="/dp/home">Home</Link></b>
                        <Link className="p-2 text-dark" to="/dp/allorders">All Orders</Link>
                    </nav>
                    <a className="btn btn-primary" href="#" onClick={() => logout()}>Log Out</a>
                </div>
                : <div></div>
            }
        </div>
        </Container>
        
    )
}

export default Header

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from '../../../config';
import restro1Image from "../../../images/Restaurant1.jpg";
import restro2Image from "../../../images/restro22.png";
import restro3Image from "../../../images/Restaurant44.jpg";

const CustomerHome = () => {
    const loginStatus = sessionStorage['loginStatus'];
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate();

    const loadRestaurants = () => {
        const url = `${URL}/restaurants`;
        axios.get(url).then((response) => {
            const result = response.data;
            if (result.status === "SUCCESS") {
                setRestaurants(result.data);
            } else {
                toast.error(result.message);
            }
        });
    };

    useEffect(() => {
        loadRestaurants();
    }, []);

    const getRestaurantImage = (index) => {
        if (index % 3 === 0) {
            return restro1Image;
        } else if (index % 3 === 1) {
            return restro2Image;
        } else {
            return restro3Image;
        }
    };

    return (
        loginStatus === '1' ?
            <div className="container shadow"                
             style={{ 
                background: "linear-gradient(to right, lightcoral, Lightgreen)",
                padding: "20px",
                borderRadius: "10px"
              }}>
                <div className="rows shadow"                 
                style={{ 
                    background: "linear-gradient(to right, lightgray, Lightyellow)",
                    padding: "20px",
                    borderRadius: "10px",
                    marginBottom:"15px"
                  }}>
                    <div className="col-sm-6 offset-sm-3 mt-4 mb-4 ">
                        <h2 className="text-center"><b>Our Featured Restaurants</b></h2>
                        <p className="text-center">Explore a variety of cuisines from our selected restaurants</p>
                    </div>
                </div>
                <div className="row shadow ">
                    {restaurants.map((rest, index) => (
                        <div key={rest.id} className="col-md-4 mb-4 shadow">
                            <div className="card shadow" style={{ backgroundColor: 'light', background: "linear-gradient(to right, lightyellow, Lightpink)" }}>
                                <img src={getRestaurantImage(index)} className="card-img-top shadow" style={{ width: 'auto', height: 'auto' }} alt={rest.name} />
                                <div className="card-body shadow d-flex flex-column justify-content-center">
                                    <h5 className="card-title text-center " style={{ color: "red" }}><b>{rest.name}</b></h5>
                                    <p className="card-text">{rest.description}</p>
                                    <button
                                        className="btn btn-primary mx-auto"
                                        onClick={() => navigate("/customer/fooditems", { state: { restId: rest.id, restName: rest.name } })}
                                    >
                                        View Food Items
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            : <div>You have not Signed In. Please <Link to="/customer/signin">Sign In here</Link></div>
    );
};

export default CustomerHome;

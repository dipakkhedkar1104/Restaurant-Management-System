import FoodItemHorizontal from "../FoodItemHorizontal";
import './index.css'

const CustomerOrder = (props) => {
    let total = 0;
    props.foodItems.forEach(item => {
        total += item.foodPrice;
    })


    return (
        <div className="customer-order-container card col-sm-8 offset-sm-3 mt-4 mb-4"                 style={{ 
            background: "linear-gradient(to right, lightgreen, Lightyellow)",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h4>Order No: {props.orderId}</h4>
            {
                props.foodItems.map(foodItem => 
                    <FoodItemHorizontal
                
                        key={foodItem.foodItemId}
                        imagePath={foodItem.foodItemUrl}
                        name={foodItem.foodName}
                        quantity={foodItem.foodQuantity}
                        displayQuantityCounter={false}
                        price={foodItem.foodPrice}
                        displayEdit={false}
                    />
                )
            }
            <div className="row" >
                <div className="col mt-3 card"                 style={{ 
                    background: "linear-gradient(to right, lightyellow, Lightgray)",
                    padding: "20px",
                    borderRadius: "10px"
                  }}>
                    <h4>Restaurant Details</h4>
                    <span className="small-bold-title">{props.restaurant.name}</span> <br />
                    <div>{props.restaurant.adressText}</div>
                    <div>{props.restaurant.pinCode}</div>
                </div>
                <div className="col mt-3 card"                 style={{ 
                    background: "linear-gradient(to right, lightblue, Lightgray)",
                    padding: "20px",
                    borderRadius: "10px"
                  }}>
                    <h4>Order Status</h4>
                    <span className="small-bold-title text-capitalize">{props.status}</span>
                    <div 
                    style={{
                        color:"green", 
                        fontWeight:"bold"
                        }} >Order total: Rs {total}</div>
                </div>
            </div>
        </div>
    )
}

export default CustomerOrder
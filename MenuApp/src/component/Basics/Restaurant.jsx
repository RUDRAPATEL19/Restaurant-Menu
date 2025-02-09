import React from "react";

const Restaurant = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">1</span>
                <span className="card-author subtle" style={{color: "red"}}>Breakfast</span>
                <h2 className="card-title">Noodles</h2>
                <span className="card-description subtle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero voluptates iste quas molestiae blanditiis rem?
                </span>
                <div className="card-read">Read</div>
            </div>
            <img src="https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794.jpg" alt="images" className="card-media" />

            <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </>
  );
};

export default Restaurant;

import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./assets/beli-tz.jpg')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
            The Most Comprehensive online bookShop is LIBE-TZ
             On The Market - Try Now and get your preferred book and start to read forever
             . Get books for medium price invite others and be 
             

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
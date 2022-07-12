import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="homeContainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <h1>Solutions</h1>
            <p>
              The purpose of this website is to make the communication between
              the members of the group easier by giving access to a proccessed
              statistics of our different members
            </p>
          </div>
          <div className="col">

          </div>
        </div>
        <div className="row">
          <div className="col">
<img src="/images/blueW.jpeg" className="img-fluid" alt="..."/></div>
        </div>
        <div className="row">
          <div className="col"><img src="/images/join2.jpeg" class="img-fluid" alt="..."/></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

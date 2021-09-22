import React, { useState } from "react";

import "./Dashboard.scss";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Icon } from "../../assets/svgs/Icon";
import Charts from "../../components/Charts";
import FooterDashboard from "../../components/FooterDashboard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Dashboard(props) {
  
  var sum = localStorage.getItem("sum");
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    var p = document.getElementById("content__chart");
    p.addEventListener("click", loadings);
  }, [loading]);

  function loadings(e) {
    e.preventDefault();
    setLoading(loading + 1);
  }

  return (
    <>
      <SideBar />
      <Header />
      <div className="container">
        {/* <div className="sidebar "><SideBar /></div> */}
        <div className="content">
          {/* <div className="header"><Header /></div> */}
          <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard__customize">
              <p>Good to see you again, James</p>
              <p className="p2">
                Customize <Icon.Setting />
              </p>
            </div>
          </div>
          <div className="title">
            <p>App Spent Summary</p>
            <div className="title__btn">
              <button>
                <Icon.Filter /> Filter <Icon.IconDropdown />
              </button>
              <button>
                Monthly
                <Icon.IconDropdown />
              </button>
            </div>
          </div>
          <div className="charts" id="charts">
            <Charts />
            <div className="charts__details">
              <h3>${sum}</h3>
              <p>
                Spent this month{" "}
                <span className="span1">
                  56% <Icon.Increase />
                </span>
              </p>
              <Link to="/report">
                <button>All Spent Summary {">"}</button>
              </Link>
              <h3>36</h3>
              <p>
                <span>8</span>{" paid"} <span>24</span> free
              </p>
              <button>All Apps {">"}</button>
            </div>
          </div>
          <FooterDashboard />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

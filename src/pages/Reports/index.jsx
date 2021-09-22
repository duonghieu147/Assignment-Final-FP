import React, { useState, useEffect } from "react";

import "./Reports.scss";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import TableRight from "../../components/TableRight";
import TableLeft from "../../components/TableLeft";
import { Icon } from "../../assets/svgs/Icon";
import { Button } from "antd";

// import { useSelector, useDispatch } from "react-redux";
// import { getReportList as listReport } from "../../Redux/actions/reportAction";

function Reports(props) {


  const [load, setLoad] = useState(0);

  let img_user = localStorage.getItem("img");
  let name_user = localStorage.getItem("name");
  let sales_user = localStorage.getItem("sales");

  function loadings(e) {
    e.preventDefault();
    activeCard();
  }
  function activeCard() {
    var btns = document.getElementsByClassName("table__card");
    // console.log(btns);
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    setLoad(load + 1);
  }
  document.addEventListener("click", loadings);

  return (
    <>
      <SideBar />
      <Header />
      <div className="container">
        <div className="content">
          <div className="table">
            <TableLeft />
            <div className="table__right">
              <div className="table__right__top">
                <div className="top__left">
                  <img id="img_user" src={img_user} />
                  <p id="name_user">{name_user}</p>
                </div>
                <div className="top__right">
                  <div className="balance">
                    <p>Account balance:</p>
                    <span id="sum_user">{sales_user}</span>
                  </div>
                  <button>...</button>
                </div>
              </div>
              <div className="table__right__nav">
                <p>
                  <a className="active" href="#">
                    Activities
                  </a>
                </p>
                <p>Transfer</p>
                <p>Automatic Transfer</p>
                <p>Budgets</p>
                <p>Notifications</p>
                <p>Cards</p>
              </div>
              <hr />
              <div className="dropdown">
                <div className="dropdow__left">
                  <div className="dropdown__days">
                    <Button>
                      <Icon.IconDay />
                      Last 30 days <Icon.IconDropdown />
                    </Button>
                  </div>
                  <div className="dropdown__filter">
                    <Button>
                      Filter by <Icon.IconDropdown />
                    </Button>
                  </div>
                </div>
                <div className="dropdown__page">
                  <p>Page 1 of 4</p>
                  <Button> {"<"} </Button>
                  <Button>{">"} </Button>
                </div>
              </div>
              <div className="table__main">
                <TableRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;

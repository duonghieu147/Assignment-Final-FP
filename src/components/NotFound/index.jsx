import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import "./index.scss";
function NotFound() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="page__not__found">Page not found</div>
    </>
  );
}

export default NotFound;

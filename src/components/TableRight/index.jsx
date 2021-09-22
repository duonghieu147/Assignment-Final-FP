/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Table } from "antd";
import "antd/dist/antd.css";

import "./TableRight.scss";
import { Icon } from "../../assets/svgs/Icon";
// import dbreports from '../../api/page.json';

import { useSelector, useDispatch } from "react-redux";
import { getReportList as listReport } from "../../Redux/actions/reportAction";

const columns = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (text, record) => (
      <>
        <div className="type">
          <Icon.TypeCard1 />
          <p>{record.type}</p>
        </div>
      </>
    ),
  },
  {
    title: "Where",
    dataIndex: "where",
    key: "where",
    render: (text, record) => (
      <div className="where">
        <Icon.Spotify />
        <p>{record.where}</p>
      </div>
    ),
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text, record) => {
      return (
        <div className="description">
          <p>{record.description}</p>
        </div>
      );
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text, record) => {
      return (
        <div className="amount">
          <b>
            {record.amount.charAt(0) == "-" ? (
              <p style={{ color: "#E92C2C" }}>{record.amount}</p>
            ) : (
              <p style={{ color: "#00BA34" }}>{record.amount}</p>
            )}
          </b>
        </div>
      );
    },
  },
  {
    title: "Date",
    key: "date",
    dataIndex: "date",
    render: (text, record) => {
      return (
        <>
          <div className="date">
            <div>
              <p className="date__date">{record.date}</p>
              <p className="date__time">{record.time}</p>
            </div>
            <b>{record.date[2] ? <Icon.IconAttach /> : <Icon.TypeCard2 />}</b>
            <Icon.ThreeDot />
          </div>
        </>
      );
    },
  },
];

function TableRight(props) {
  const dispatch = useDispatch();
  const getReportList = useSelector((state) => state.getReportList);
  // console.log(getReportList.report);
  const { report, loading, error } = getReportList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(report);
  useEffect(() => {
    dispatch(listReport(userInfo));
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={report} />
      <div className="inputPage">
        <p>Go to</p>
        <input value="10"></input>
        <p>Page</p>
      </div>
    </>
  );
}

export default TableRight;

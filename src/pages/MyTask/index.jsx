/* eslint-disable react-hooks/exhaustive-deps */
import { Spin, Calendar } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../assets/svgs/Icon";
import Header from "../../components/Header";
import AddTaskModal from "../../components/Modal/AddTask";
import SideBar from "../../components/SideBar";
import { getTask } from "../../Redux/actions/taskAction";
import "./index.scss";
import TaskDate from "./TaskDate";

moment.updateLocale("en", {
  weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
});

function MyTask() {
  const dispatch = useDispatch();
  //current moment
  const [currentMoment, setCurrentMoment] = useState(moment());
  //modal
  const [isModalAdd, setIsModalAdd] = useState(false);

  const { loading, tasks } = useSelector((state) => state.getTaskList);
  const { userInfo } = useSelector((state) => state.userLogin);
  //console.log(tasks, userInfo);
  useEffect(() => {
    dispatch(getTask(userInfo));
  }, []);

  const showModalAdd = () => {
    setIsModalAdd(true);
  };

  const headerRender = (object) => {
    return (
      <div className="task__bottom-header">
        <div className="task__bottom-header-month">
          {moment(object.value).format("MMMM YYYY")}
          {/* .toString */}
        </div>
        <div
          className="task__bottom-header-today"
          onClick={() => {
            setCurrentMoment(moment());
          }}
        >
          Today
        </div>
        <Icon.Back
          className="task__bottom-header-back"
          onClick={() => {
            setCurrentMoment(moment(currentMoment).subtract(1, "M"));
          }}
        />
        <Icon.Next
          className="task__bottom-header-next"
          onClick={() => {
            setCurrentMoment(moment(currentMoment).add(1, "M"));
          }}
        />
      </div>
    );
  };

  const dateCellRender = (value) => {
    return <TaskDate value={value} tasks={tasks} />;
  };

  return (
    <>
      <Header />
      <SideBar />

      <div className="task">
        <div className="task__header">
          <div className="task__header-item">
            <span>Calender View</span>

            <Icon.Dropdown className="task__header-item-icon-5" />
          </div>
          <div className="task__header-item">
            <Icon.Colla className="task__header-item-icon" />
            <span>Collaborative</span>
            <Icon.Dropdown className="task__header-item-icon-5" />
          </div>
          <div className="task__header-item">
            <div onClick={showModalAdd} className="task__header-item-add">
              + Add Task
            </div>
            <AddTaskModal
              isModalAdd={isModalAdd}
              setIsModalAdd={setIsModalAdd}
            />
          </div>
          <div className="task__header-item">
            <Icon.Card className="task__header-item-icon" />
            <span>Custom Card</span>
          </div>
          <div className="task__header-item">
            <Icon.FilterTask className="task__header-item-icon-1" />
            <span>Filter</span>
          </div>
          <div className="task__header-item">
            <Icon.GroupHeader className="task__header-item-icon-2" />
            <span>Grouping</span>
          </div>
          <div className="task__header-item">
            <Icon.Action />
          </div>
        </div>
        {loading ? (
          <Spin size="large">
            <Calendar
              value={currentMoment}
              dateCellRender={dateCellRender}
              headerRender={headerRender}
              onChange={(moment) => {
                setCurrentMoment(moment);
              }}
            />
          </Spin>
        ) : (
          <Calendar
            value={currentMoment}
            dateCellRender={dateCellRender}
            headerRender={headerRender}
            onChange={(moment) => {
              setCurrentMoment(moment);
            }}
          />
        )}
      </div>
    </>
  );
}

export default MyTask;

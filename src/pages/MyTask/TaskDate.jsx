import moment from "moment";
import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskDate({ value, tasks }) {
  const date = moment(value).date();
  const month = moment(value).month();

  const [more, setMore] = useState({ display: "none" });
  const [less, setLess] = useState({});

  //console.log(date, month);

  const numTask = tasks?.filter(
    (item) => item.dateId === date && item.monthId === month + 1
  ).length;
  //console.log(numTask);

  let count = 0;
  let seeMore = false;

  return (
    <>
      {tasks?.map((item) => {
        if (item.dateId === date && item.monthId === month + 1) {
          count += 1;
          if (count <= 2) {
            return <TaskItem key={item.id} item={item} />;
          } else {
            if (!seeMore) {
              seeMore = true;

              return (
                <div key={item.id}>
                  <div
                    onClick={() => {
                      setMore({});
                      setLess({ display: "none" });
                    }}
                    style={less}
                    className="action__more"
                  >
                    +{numTask - 2} more
                  </div>
                  <div style={more}>
                    <TaskItem item={item} />
                  </div>
                  {numTask === 3 && (
                    <div
                      onClick={() => {
                        setMore({ display: "none" });
                        setLess({});
                      }}
                      style={more}
                      className="action__less"
                    >
                      less
                    </div>
                  )}
                </div>
              );
            } else if (count === numTask) {
              return (
                <div key={item.id}>
                  <div style={more}>
                    <TaskItem item={item} />
                  </div>

                  <div
                    onClick={() => {
                      setMore({ display: "none" });
                      setLess({});
                    }}
                    style={more}
                    className="action__less"
                  >
                    less
                  </div>
                </div>
              );
            } else {
              return (
                <div key={item.id} style={more}>
                  <TaskItem item={item} />
                </div>
              );
            }
          }
        }
      })}
    </>
  );
}

export default TaskDate;

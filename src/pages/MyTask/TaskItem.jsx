import React, { useState } from "react";
import EditTaskModal from "../../components/Modal/EditTask";

function TaskItem({ item }) {
  //console.log(item);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const showModalEdit = () => {
    setIsModalEdit(true);
  };
  return (
    <div>
      <p className={`events-status-${item.status}`}>
        {item.content}{" "}
        <span className="events-action" onClick={showModalEdit}>
          ...
        </span>
        <EditTaskModal
          isModalEdit={isModalEdit}
          setIsModalEdit={setIsModalEdit}
          item={item}
        />
      </p>
    </div>
  );
}

export default TaskItem;

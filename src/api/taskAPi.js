import axiosClient from "./axiosClient";
//import Cookie from "js-cookie";
// const userInfo = Cookie.getJSON("userInfo");
// console.log(userInfo);
async function getTasks(params) {
  const url = "/api/tasks";
  return await axiosClient.get(url, {
    headers: { Authorization: `Bearer ${params.token}` },
    params: {
      userId: params.id,
    },
  });
}
async function addTasks(task, userInfo) {
  const url = "/api/tasks";
  return await axiosClient.post(
    url,
    {
      userId: task.userId,
      status: task?.status,
      content: task?.content,
      monthId: task?.monthId,
      dateId: task?.dateId,
    },

    {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    }
  );
}
async function updateTasks(task, userInfo) {
  const url = `/api/tasks/${task?.id}`;
  return await axiosClient.patch(
    url,
    {
      userId: task.userId,
      status: task?.status,
      content: task?.content,
    },
    {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    }
  );
}
async function deleteTasks(id, userInfo) {
  const url = `/api/tasks/${id}`;
  return await axiosClient.delete(url, {
    headers: { Authorization: `Bearer ${userInfo.token}` },
  });
}

const taskApi = {
  getTasks,
  addTasks,
  updateTasks,
  deleteTasks,
};
export default taskApi;

import axiosClient from "./axiosClient";
const url = "/api/charts";
async function getCharts(params) {
  return await axiosClient.get(url, {
    headers: { Authorization: `Bearer ${params.token}` },
  });
}

const chartApi = {
  getCharts,
};

export default chartApi;

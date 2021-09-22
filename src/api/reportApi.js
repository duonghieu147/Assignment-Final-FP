import axiosClient from "./axiosClient";

async function getReport(params) {
  const url = "/api/activities";
  return await axiosClient.get(url, {
    headers: { Authorization: `Bearer ${params.token}` },
  });
}

const reportApi = {
  getReport,
};
export default reportApi;

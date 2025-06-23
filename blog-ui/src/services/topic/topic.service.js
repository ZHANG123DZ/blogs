import httpRequest from "../../utils/httpRequest";

export const getAll = async () => {
  try {
    const res = await httpRequest.get("/topics");
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getOne = async (id) => {
  try {
    const res = await httpRequest.get(`/topics/${id}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const create = async (data) => {
  try {
    const res = await httpRequest.post(`/topics`, data);
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const update = async (id, data) => {
  try {
    const res = await httpRequest.patch(`/topics/${id}`, data);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const destroy = async (id) => {
  try {
    const res = await httpRequest.del(`/topics/${id}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAll,
  getOne,
  create,
  update,
  destroy,
};

import httpRequest from "../../utils/httpRequest";

export const getAll = async () => {
  try {
    const res = await httpRequest.get("/posts");
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getOne = async (id) => {
  try {
    const res = await httpRequest.get(`/posts/${id}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const create = async (data) => {
  try {
    const res = await httpRequest.post(`/posts`, data);

    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const update = async (id, data) => {
  try {
    console.log(id);
    const res = await httpRequest.patch(`/posts/${id}`, data);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const destroy = async (id) => {
  try {
    const res = await httpRequest.del(`/posts/${id}`);
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

import httpRequest from "../../utils/httpRequest";

export const getAll = async (post_id) => {
  try {
    const res = await httpRequest.get(`/posts/${post_id}/comments`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getOne = async (post_id, id) => {
  try {
    const res = await httpRequest.get(`/posts/${post_id}/comments/${id}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const create = async (post_id, data) => {
  try {
    const res = await httpRequest.post(`/posts/${post_id}/comments`, data);
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const update = async (post_id, id, data) => {
  try {
    const res = await httpRequest.patch(
      `/posts/${post_id}/comments/${id}`,
      data
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const destroy = async (post_id, id) => {
  try {
    const res = await httpRequest.del(`/posts/${post_id}/comments/${id}`);
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

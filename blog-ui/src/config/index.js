//Ở đây chỉ định tên các route

const config = {
  routes: {
    blogs: "/",
    post: "/posts/:slug",
    topic: "/topics/:slug",
    createPost: "/posts/create",
    editPost: "/posts/:slug/edit",
    notFound: "*",
  },
};

export default config;

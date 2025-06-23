import Blogs from "@/page/Blogs";
import config from "../config";
import NotFound from "../page/NotFound/index.jsx";
import ArticleDetail from "@/page/ArticleDetail";
import PostCreate from "@/page/PostCreate";
import PostEdit from "@/page/EditPost";

const routes = [
  {
    path: config.routes.blogs,
    component: Blogs,
  },
  {
    path: config.routes.post,
    component: ArticleDetail,
  },
  {
    path: config.routes.topic,
    component: Blogs,
  },
  {
    path: config.routes.createPost,
    component: PostCreate,
  },
  {
    path: config.routes.editPost,
    component: PostEdit,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
  },
];

export default routes;

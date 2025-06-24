import { useEffect, useState } from "react";
import styles from "./ArticleCard.module.scss";

import postService from "@/services/post/post.service";
import { Link, useParams } from "react-router-dom";
import nestComments from "@/function/nestComments";

function ArticleDetail() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const getAll = async () => {
      try {
        const postData = await postService.getOne(slug);
        setComments(nestComments(postData.data.Comments));
        setPost(postData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, [slug]);

  const deletePost = async () => {
    try {
      if (window.confirm("Bạn xác nhận xóa bài viết")) {
        await postService.destroy(slug);
      }
      window.alert("Xóa bài viết thành công");
    } catch (err) {
      window.alert("Xóa bài viết thất bại");
      console.log(err);
    }
  };

  return (
    <div>
      {post && (
        <>
          <h2 className={styles.DivTitle}>{post.title}</h2>
          <p className={styles.Description}>{post.content}</p>
          <span>Trang thai hoat dong: {post.status}</span>

          <br />
          <div className={styles.DivEditPost} style={{ margin: "50px" }}>
            <Link to={`/posts/${slug}/edit`}>Sửa bài viết</Link>
          </div>
          <button className={styles.DeletePost} onClick={() => deletePost()}>
            Xóa bài viết
          </button>
          <div>
            <div style={{ fontSize: "18px" }}>Comments</div>
            <br />
            <ul style={{ marginLeft: "20px", listStyleType: "none" }}>
              {comments.map((item) => (
                <li key={item.id} style={{ marginBottom: "8px" }}>
                  <div>{item.content}</div>
                  {item.children && item.children.length > 0 && (
                    <CommentTree comments={item.children} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ArticleDetail;

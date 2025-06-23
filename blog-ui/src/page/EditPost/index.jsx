import { useEffect, useState } from "react";
import styles from "./EditPost.module.scss";
import { useParams } from "react-router-dom";
import postService from "@/services/post/post.service";
import topicService from "@/services/topic/topic.service";

function PostEdit({ onSubmit }) {
  const [post, setPost] = useState({});
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { slug } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const postData = await postService.getOne(slug);
        setPost(postData.data);
        setTitle(postData.data.title);
        setContent(postData.data.content);
        setTopic(postData.data.Topic.topic_name);
      } catch (error) {
        console.error("Không thể tải bài viết:", error);
      }
    };

    getPost();
  }, [slug]);

  const submitForm = async () => {
    let topic_id;
    try {
      topic_id = await topicService.getOne(topic);
    } catch (err) {
      topic_id = await topicService.create({ topic_name: topic });
    }
    topic_id = topic_id.data.id;

    try {
      const updated = await postService.update(slug, {
        title,
        content,
        topic_id,
      });
      setPost(updated.data);
      if (onSubmit) onSubmit(updated.data);
    } catch (error) {
      console.error("Cập nhật thất bại:", error);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
    >
      <p>Nhập topic muốn sửa</p>

      <input
        placeholder="Nhập topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <p>Nhập tiêu đề muốn sửa</p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tiêu đề mới"
      />

      <p>Nhập nội dung muốn sửa</p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nội dung mới"
      />

      <button type="submit">Lưu chỉnh sửa</button>
    </form>
  );
}

export default PostEdit;

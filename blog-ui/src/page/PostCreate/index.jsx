import { useState } from "react";
import styles from "./PostForm.module.scss";
import postService from "@/services/post/post.service";
import topicService from "@/services/topic/topic.service";

function PostCreate({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    setLoading(true);
    let topic_id;
    try {
      topic_id = await topicService.getOne(topic);
    } catch (err) {
      topic_id = await topicService.create({ topic_name: topic });
    }
    topic_id = topic_id.data.id;

    try {
      const post = await postService.create({ title, content, topic_id });

      if (onSubmit) onSubmit(post.data);

      // Reset form
      setTitle("");
      setContent("");
      setTopic("");
    } catch (error) {
      console.error("Tạo bài viết thất bại:", error);
    } finally {
      setLoading(false);
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
      <input
        placeholder="Tiêu đề bài viết"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />
      <input
        placeholder="Nhập topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        disabled={loading}
      />
      <textarea
        placeholder="Nội dung bài viết"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Đang tạo..." : "Tạo mới"}
      </button>
    </form>
  );
}

export default PostCreate;

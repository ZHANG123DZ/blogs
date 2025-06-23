import styles from "./ArticleCard.module.scss";

function ArticleCard({ data }) {
  return (
    <div className={styles.DivArticleCard}>
      <h2 className={styles.DivH2}>{data.title}</h2>
    </div>
  );
}

export default ArticleCard;

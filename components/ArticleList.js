import { ArticleItem } from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

export const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles && articles.map((article) => <ArticleItem key={article.id} article={article} />)}
    </div>
  );
};

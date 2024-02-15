import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articlesData';
import  './ArticleDetailScreen.css';

const ArticleDetailScreen = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <p>Author: {article.author}</p>
      <p>Published Date: {article.publishedDate}</p>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetailScreen;

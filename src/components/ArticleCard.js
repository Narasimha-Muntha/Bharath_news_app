import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css'; 
import { Card, Button } from 'react-bootstrap';

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <Card.Img variant="top" src={article.imageUrl} alt={article.title} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.summary}</Card.Text>
        <Link to={`/article/${article.id}`}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;

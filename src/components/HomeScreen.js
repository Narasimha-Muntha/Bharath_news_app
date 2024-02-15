import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArticleCard from './ArticleCard';
import articles from '../data/articlesData';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-3">Latest Articles</h1>
      <Row>
        {articles.map(article => (
          <Col md={4} key={article.id}>
            <ArticleCard article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;

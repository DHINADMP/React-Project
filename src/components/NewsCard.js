// src/components/NewsCard.js
import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <div className="news-card-header">
        <h3>{article.title}</h3>
        <button className="close-button">X</button>
      </div>
      <img src={article.urlToImage || 'https://via.placeholder.com/150'} alt={article.title} />
      <p>{article.description}</p>
      <div className="news-card-footer">
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default NewsCard;

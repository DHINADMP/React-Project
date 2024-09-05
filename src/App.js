// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import NewsCard from './components/NewsCard';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [view, setView] = useState('grid'); // Default view
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=8692a8c9fa904a8f9ea800e4db50a5f5'
        );
        setArticles(response.data.articles);                                                      
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="app-container">
      <Sidebar setView={setView} />
      <div className={`news-container ${view}`}>
        {currentArticles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;

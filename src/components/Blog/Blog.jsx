import React from "react";
import { useState } from "react";
import * as blogs from './blogs.json'

const Blog = () =>{
  const [radioValue, setRadioValue] = useState('all');

  const tags = [
    { key: 'all', name: 'All', count: 10 },
    { key: 'rubyonrails', name: 'Ruby On Rails', count: 2 },
    { key: 'bookreview', name: 'Book Review', count: 3 },
    { key: 'softwaredevelopment', name: 'Software Development', count: 2 },
    { key: 'react', name: 'React', count: 1 },
    { key: 'internship', name: 'Internship', count: 2 }
  ]
  const renderInputElements = tags.map((tag) => (
    <input 
      type="radio" 
      id={tag.key} 
      name="tag" 
      value={tag.key} 
      checked={radioValue === tag.key} 
      onChange={(e) => setRadioValue(e.target.value)}
    />
  ))

  const renderTags = tags.map((tag) => (
    <div className="post-tag">
      <label  htmlFor={tag.key} data-post={tag.key}>
        {`${tag.name} (${tag.count})`}
      </label>
    </div>
  ))

  const renderArticles = blogs.articles.map((article) => (
    <div className="article" data-post={article.key}>
      <h2 className="article-tile">
        <a href={article.link} target="_blank" rel="noopener">
          {article.title}
        </a>
      </h2>
      <div className="article-description">
        <p>{article.main_text}</p>
        <p>{article.sub_text}</p>
        <p className="details">{`${article.published_on} - ${article.reading_time}`}</p>
      </div>
    </div>
  ))

  return(
    <>
      <section id="blogs" className="container inner-container">
        <h1 className="section-title">Blogs <span className="title-icon">&#128466;</span></h1>
        <p>
          I write blogs on technology, books review and experiences. And it's publish on various platforms.
        </p>
      </section>
      <section id="articles" className="inner-container">
        {renderInputElements}
        <div className="post-tags">
          {renderTags}
        </div>
        <div className="main-content">
          {renderArticles}
        </div>
      </section>
    </>
  )
}

export default Blog;
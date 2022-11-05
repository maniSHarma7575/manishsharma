import React from "react";
import * as topics from './topics.json'

const LearnInPublic = () => {
  const renderSubChapter = (subChapter) => (
    <li>
      <input 
        className="topic-right"
        checked={subChapter.completed}
        type="checkbox"
        disabled
      />
      {subChapter.name}
    </li>
  )

  const renderChapter = (chapter) => (
    <div id={chapter.name}>
      <h3>{chapter.name}</h3>
      <ul className="ul-topics">
        {
          chapter.sub_chapters.map((subChapter) => renderSubChapter(subChapter))
        }
      </ul>
    </div>
  )

  const renderTopics = topics.fields.map((field) => (
    <div id={field.name}>
      <h2 className="main-heading">
        {field.name}
      </h2>
      <hr className="divider" />
      {
        field.chapters.map((chapter) => renderChapter(chapter))
      }
    </div>
  ))

  return(
    <>
      <section id="learnInPublicIntro" className="container inner-container">
        <h1 className="section-title">Learning In Public <span className="title-icon">&#127891;</span></h1>
        <p>
          Currently I am learning & focusing on the below topic. This page inspired by <a href="https://www.taniarascia.com/learn/" target="_blank">Tania Rascia</a>
        </p>
        <p align="center">
          <iframe 
            src="https://giphy.com/embed/Ae7SI3LoPYj8Q" 
            width="480" 
            height="290" 
            frameBorder="0" 
            class="giphy-embed" 
            allowFullScreen
          /> 
        </p>
      </section>
      <section id="learning_check_list" className="container inner-container">
        {renderTopics}
      </section>
    </>
  )
}

export default LearnInPublic;
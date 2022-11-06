import React from "react";
import checklists from './checklists.json';

const Checklist = () => {
  const totalChecked = () => {
    return Object.values(checklists).reduce((op, inp) => op + inp, 0);
  }

  const renderCheckList = () => {
    return(
      <>
        {
          Object.keys(checklists).map((key) => (
            <div
              className={`
                ${ checklists[key] ? 'item-active' : '' }
                list-item
              `}
              key={key}
            >
              {key}
            </div>
          ))
        }
      </>
    )
  }

  return(
    <section 
      id="life-checklist" 
      className="container inner-container"
    >
      <h1 className="section-title">Life Checklist <span className="title-icon">&#9989;</span></h1>
      <p>
        Page is Inspired from <a href="https://neal.fun/life-checklist/" target="_blank">Neal.fun</a>
      </p>
      <div>
        <progress
          value={totalChecked()}
          max={Object.keys(checklists).length}
        >
        </progress>
        <h3 className='text-center'>
            Completed {totalChecked()} / {Object.keys(checklists).length}{' '}
            items
        </h3>
      </div>
      <br />
      <div className="content-block">
        {renderCheckList()}
      </div>
    </section>
  )
}

export default Checklist;
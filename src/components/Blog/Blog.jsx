import React from "react";

const Blog = () =>{
  return(
    <>
      <section id="blogs" className="container">
        <h1 className="section-title">Blogs <span className="title-icon"></span>&#128466;</h1>
        <p>
          I write blogs on technology, books review and experiences. And it's publish on various platforms.
        </p>
      </section>
      <section id="articles" className="container">
        <input type="radio" id="all" name="tag" value="all" checked>
        </input>
        <input type="radio" id="rubyonrails" name="tag" value="rubyonrails">
        </input>
        <aside className="post-tags">
          <div className="post-tag">
            <label  for="all" data-post="all">
              All (3)
            </label>
          </div>
          <div className="post-tag" data-post="rubyonrails">
            <label for="rubyonrails">
              Ruby on Rails (2)
            </label>
          </div>
          <div className="post-tag" data-post="bookreview">
            <label for="bookreview">
              Book Review (1)
            </label>
          </div>
        </aside>
        <div className="main-content">
          <div className="article" data-post="rubyonrails">
            <h2 className="article-tile">
              <a href="https://www.elitmus.com/blog/technology/sidekiq-process-in-production-with-systemd-and-monit/" target="_blank">
                Sidekiq process in production with Systemd and Monit
              </a>
            </h2>
            <div className="article-description">
              <p>Recently, we have upgraded our Sidekiq version from 5.2 to 6.5. Before Sidekiq 6.0 we were managing the Sidekiq process directly using Monit. With the release of Sidekiq 6, the team has removed the daemonization, logfile, and pidfile command line arguments and sidekiqctl binary. Managing services manually is more error-prone, let our operating system do it for us. We have three options to go with systemd, upstart, and foreman. We decided to go ahead with the systemd.</p>
              <p className="details">Jun 29, 2022 - 10 min read</p>
            </div>
          </div>
          <div className="article" data-post="bookreview">
            <h2 className="article-tile">
              <a href="https://www.elitmus.com/blog/technology/sidekiq-process-in-production-with-systemd-and-monit/" target="_blank">
                Outliers: The story of Success - Book Review
              </a>
            </h2>
            <div className="article-description">
              <p>In outliers author survey the ingredients for the success. He wrote about the reason behind the success of great people like Bill Gates, Bill Joy, Joseph Flom, and the musical group Beatles. And how Chris Langan and Oppenheimer ended up with different stories. And how the culture, family, and friends play a role in determining individual success.</p>
              <p className="details">May 02, 2022 - 5 min read</p>
            </div>
          </div>
          <div className="article" data-post="rubyonrails">
            <h2 className="article-tile">
              <a href="https://www.elitmus.com/blog/technology/migration-from-paperclip-to-activestorage/" target="_blank">
                Migration from Paperclip to ActiveStorage
              </a>
            </h2>
            <div className="article-description">
              <p>How we migrated hundreds of thousands of attachments from Paperclip to ActiveStorage without downtime.</p>
              <p>At eLitmus, recently we migrated thousands of attachment records from Paperclip to Rails-owned ActiveStorage. Paperclip and Active Storage solve similar problems - uploading files to cloud storage like Amazon S3, Google Cloud Storage, or Microsoft Azure Storage. In our case, we are uploading files to Amazon s3. And then attach those files to Active Records objects. So migrating from one to another is straightforward data-rewriting.</p>
              <p className="details">May 21, 2021 - 10 min read</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog;
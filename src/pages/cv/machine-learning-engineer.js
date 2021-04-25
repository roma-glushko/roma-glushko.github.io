import React from "react"

import Layout from "../../components/theme/layout"
import SEO from "../../components/seo"
import MainNavigation from "../../components/theme/main-navigation"
import CvHeader from "../../components/cv/cv-header"
import ThemeSwitcher from "../../components/theme/theme-switcher"
import SocialLinks from "../../components/homepage/social-links"

import './cv.css'

const MachineLearningEngineerCV = () => {
  return (
    <Layout>
      <SEO
        isUniqueTitle={true}
        title={"Roman Glushko's Machine Learning Engineer CV"}
        className="experiment-view-page"
        pagePath='/cv/machine-learning-engineer'
        ogType="website"
        description="Roman Glushko's Machine Learning Engineer CV"
        keywords={[
          "machine learning engineer",
          "magento machine learning",
          "cv",
          "machine learning cv",
          "machine learning resume"
        ]}
      />
      <main className="cv cv-machine-learning-engineer">
        <div className="pdf-badge" onClick={() => window.print()} title="Save CV as a PDF file"><a>pdf</a></div>
        <header>
          <div className="theme-switcher">
            <ThemeSwitcher />
          </div>
          <MainNavigation space={"cv"} />
          <CvHeader position={`Machine Learning Engineer`} />
          <SocialLinks includeCV={false} />
        </header>
        <div className="cv-content">
          <div className="cv-content-column additional-column">
            <section>
              <h2 className={`notop-margin`}><span>Profile</span></h2>
              <ul>
                <li>Aspiring <strong>problem solver</strong> & ML engineer</li>
                <li><strong>5+ years</strong> of experience in <strong>software engineering</strong> and eCommerce development</li>
                <li><strong>3+ years</strong> of experience in <strong>technical management</strong></li>
                <li>Expertise in a broad variety of technical and business topics</li>
                <li>Constant, quick & curious learner</li>
                <li>Positive attitudes</li>
              </ul>
            </section>
            <section>
              <h2><span>Skills</span></h2>
              <ul>
                <li>Experience: tabular data processing, image processing, classification, regression, time series forecasting, image object detection, data analysis</li>
                <li>Languages: <strong>Python</strong>, Golang, PHP, WebDev Stack (JS & HTML & CSS)</li>
                <li>ML/DL Frameworks: PyTorch, Keras, Scikit-Learn</li>
                <li>Visualization: seaborn, plotly</li>
              </ul>
            </section>
            <section>
              <h2><span>Education</span></h2>
              <ul>
                <li><strong>Machine Learning Nanodegree</strong>, 2020-Present (6 months)</li>
                <li><strong>M.S. Computer Engineering</strong><br/> Khmelnytskyi National University, Ukraine, 2018</li>
              </ul>
            </section>
          </div>
          <div className="cv-content-column main-column">
            <section>
              <h2 className={`notop-margin`}><span>Projects</span></h2>
              <ul>
                <li>
                  <h3>Import hand-drawn wireframes from the photo</h3>
                  TBU
                </li>
                <li>
                  <h3>[Kaggle] HPA - Single Cell Classification</h3>
                  TBU
                </li>
                <li>
                  <h3>[Kaggle] Shopee - Price Match Guarantee</h3>
                  TBU
                </li>
              </ul>
              <div className="other-projects">
                <input type="checkbox" id="other-projects-collapse" />
                <label for="other-projects-collapse"><a>..click to show/hide other projects</a></label>
                <ul className="other-projects-list">
                  <li>
                    <h3>Mall Customer Segmentation</h3>
                    TBU
                  </li>
                  <li>
                    <h3>Digit Recognizer</h3>
                    TBU
                  </li>
                  <li>
                    <h3>Wine Quality</h3>
                    TBU
                  </li>
                  <li>
                    <h3>Ames House Pricing</h3>
                    TBU
                  </li>
                </ul>
              </div>
              <span className="other-projects-link">Other projects can be found on <a target="_blank" rel="noopener" href="https://github.com/roma-glushko?tab=repositories&q=machine-learning">GitHub</a> and <a target="_blank" rel="noopener" href="https://www.kaggle.com/glushko/code">Kaggle</a></span>
            </section>
            <section>
              <h2><span>Work Experience</span></h2>
              <ul>
                <li>
                  <strong>Tech Lead / Software Developer</strong>, Atwix; Ukraine — 2017-2020 (3.5 years)<br/>
                  Skills: Problem Solving, eCommerce, Marketing, Leadership, System Design, Problem Framing
                </li>
                <li>
                  <strong>eCommerce Magento Software Developer</strong>, Atwix; Ukraine — 2015-2017 (2 years)<br/>
                  Skills: Linux, Git, PHP, MySQL, Elasticsearch, Redis
                </li>
              </ul>
            </section>
            <section>
              <h2><span>Communication & Leadership</span></h2>
              <ul>
                <li>
                  <strong>Technical Leadership</strong> of Software Engineering Team (3.5 years) <br/>
                  Led cross-functional teams of different sizes (5-15 people incl. SEs, QA, PM, DevOps). Organized and optimized team processes. <br/> Took part in presentations and frequent calls with clients, project groomings, and delivered internal technical workshops. Advocated software engineer's needs behind C-level management.
                </li>
                <li>
                  Organized technical and business <a target="_blank" rel="noopener" href="https://www.atwix.com/magento/atwix-magenews-jun-2020/">newsletter</a> (led for 2 years) <br/>
                </li>
                <li>
                  Write <a target="_blank" rel="noopener" href="https://www.romaglushko.com/blog/">technical blog posts</a> and <a target="_blank" rel="noopener" href="https://www.romaglushko.com/thoughts/">thoughts about management</a> 
                </li>
              </ul>
            </section>
            <section>
              <h2><span>Hobby & Interests</span></h2>
              <ul>
                <li>Scooter driving</li>
                <li>Self-improvement</li>
                <li>Reading</li>
                <li>Blogging</li>
                <li>Open Source</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default MachineLearningEngineerCV
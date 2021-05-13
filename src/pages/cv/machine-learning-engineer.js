import React from "react"

import Layout from "../../components/theme/layout"
import SEO from "../../components/seo"
import MainNavigation from "../../components/theme/main-navigation"
import CvHeader from "../../components/cv/cv-header"
import ThemeSwitcher from "../../components/theme/theme-switcher"
import SocialLinks from "../../components/homepage/social-links"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

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
      <main itemscope itemtype="http://schema.org/Person" className="cv cv-machine-learning-engineer">
        <div className="pdf-badge" onClick={() => {
          trackCustomEvent({
            category: "cv",
            action: "download",
            label: "machine-learning",
          })
          window.print()
        }} title="Download CV as a PDF file"><a>pdf</a></div>
        <header>
          <div className="theme-switcher">
            <ThemeSwitcher />
          </div>
          <MainNavigation space={"cv"} />
          <CvHeader position={`Machine Learning Engineer`} />
          <SocialLinks />
        </header>
        <div className="cv-content">
          <div className="cv-content-column additional-column">
            <section itemscope itemtype="http://schema.org/ItemList">
              <dl>
                <dt><h2 className={`notop-margin`}><span itemprop="name">Profile</span></h2></dt>
                <ul>
                  <li itemprop="itemListElement">Aspiring <strong>problem solver</strong> & ML engineer</li>
                  <li itemprop="itemListElement"><strong>5+ years</strong> of experience in <strong>software engineering</strong> and eCommerce development</li>
                  <li itemprop="itemListElement"><strong>3+ years</strong> of experience in <strong>technical management</strong></li>
                  <li itemprop="itemListElement">Expertise in a broad variety of technical and business topics</li>
                  <li itemprop="itemListElement">Constant, quick & curious learner</li>
                  <li itemprop="itemListElement">Positive attitudes</li>
                </ul>
              </dl>
            </section>
            <section itemtype="http://schema.org/ItemList">
              <dl>
                <dt><h2><span itemprop="name">Skills</span></h2></dt>
                <ul>
                  <li itemprop="itemListElement">Experience: tabular data processing, image processing, classification, regression, time series forecasting, image object detection, data analysis</li>
                  <li itemprop="itemListElement">Languages: <strong>Python</strong>, Golang, PHP, WebDev Stack (JS & HTML5 & CSS3)</li>
                  <li itemprop="itemListElement">ML/DL Frameworks: PyTorch, Keras, Scikit-Learn</li>
                  <li itemprop="itemListElement">Visualization: Seaborn, Plotly</li>
                </ul>
              </dl>
            </section>
            <section>
              <h2><span>Education</span></h2>
              <ul>
                <li itemscope itemtype="http://schema.org/EducationalOrganization">
                  <strong>Machine Learning Nanodegree</strong>, 2020-Present (8 months)
                </li>
                <li itemscope itemtype="http://schema.org/EducationalOrganization">
                  <strong>M.S. Computer Engineering</strong><br/> <span itemprop="name">Khmelnytskyi National University</span>, Ukraine, 2018
                </li>
              </ul>
            </section>
          </div>
          <div className="cv-content-column main-column">
            <section className="projects">
              <h2 className={`notop-margin`}><span>Projects</span></h2>
              <ul>
                <li className="project">
                  <h3>Wireframe Scanner</h3>
                  <div className="project-description">
                    <a href="https://www.commerceframe.com/" target="blank">CommerceFrame</a>, my side project about swift eCommerce wireframing, needs a functionality to import wireframes that were drawn on a piece of paper or a whiteboard.
                    The project includes problem framing, collecting and labeling dataset.
                  </div>
                  <ul className="project-details">
                    <li><strong>Skills</strong>: Problem Framing, Data Collection, Data Labeling, Image Data, Python, PyTorch, Object Detection</li>
                  </ul>
                </li>
                <li className="project">
                  <h3>[Kaggle] Shopee - Price Match Guarantee</h3>
                  <div className="project-description">
                    The Shopee marketplace has a price match guarantee program. 
                    They needed a model that could automate process of finding marketplace lots with similar product offerings and prices, despite marketing strategy, product titles and images which merchants might use. 
                    <br/><br/>
                    Got to Top 45% of submitters on Kaggle. Got <a href="https://www.kaggle.com/c/shopee-product-matching/discussion/236496" target="blank">gold and silver medals</a> for providing deep insights on the domain and problem goal.
                  </div>
                  <ul className="project-details">
                    <li><strong>Skills</strong>: eCommerce, Tabular & Image Data, Python, Keras, Data Processing, embeddings</li>
                    <li>Links: <a href="https://www.kaggle.com/c/shopee-product-matching" target="blank">Competition</a></li>
                  </ul>
                </li>
                <li className="project">
                  <h3>[Kaggle] HPA - Single Cell Classification</h3>
                  <div className="project-description">
                    Human Protein Atlas organization was interested in finding patterns of protein distribution inside of the single cell. This should helped to understand role of different proteins in disease development, medical treatment impact, etc.<br/>
                    Based on 150Gb of 4-layers human cells images, it was needed to segments each cell and predict in which organelle of the cell the protein of interest were located. 
                    Provided dataset contained only inaccurate image-level labels (not directly connected to particular cells).
                    <br/><br/>
                    Got to Top 15% of submitters on Kaggle.
                  </div>
                  <ul className="project-details">
                    <li><strong>Skills</strong>: Biology, Image Medical Data, Weakly-Supervised Learning, Data Analysis, Data Processing, Instance Segmentation, Multi-Label Classification</li>
                    <li>Links: <a href="https://www.kaggle.com/c/hpa-single-cell-image-classification" target="blank">Competition</a></li>
                  </ul>
                </li>
              </ul>
              <div className="other-projects">
                <input type="checkbox" id="other-projects-collapse" />
                <label for="other-projects-collapse"><a>..click to show/hide other projects</a></label>
                <ul className="other-projects-list">
                  <li className="project">
                    <h3>Mall Customer Segmentation</h3>
                    <div className="project-description">
                    Analyzed dataset of mall customers and segment them according to their spending patterns.
                    <br/><br/>
                    Got <a href="https://www.kaggle.com/glushko/mall-customer-segmentation" target="blank">a silver medal on Kaggle</a> for the analysis.
                    </div>
                    <ul className="project-details">
                      <li><strong>Skills</strong>: Clustering, Tabular Data, Data Analysis, Python, Scikit-Learn, Plotly, Seaborn</li>
                      <li>Links: <a href="https://www.kaggle.com/glushko/mall-customer-segmentation" target="blank">Modeling</a> • <a href="https://github.com/roma-glushko/kaggle-mall-customer-segmentation" target="blank">Github</a></li>
                    </ul>
                  </li>
                  <li className="project">
                    <h3>Digit Recognizer</h3>
                    <div className="project-description">
                      Built a classifier to predict handwritten digits.
                      <br/><br/>
                      Got to Top 5% of submitters on Kaggle.
                    </div>
                    <ul className="project-details">
                      <li><strong>Skills</strong>: Classification, Image Data, Python, Keras, Scikit-Learn, CNN</li>
                      <li>Links: <a href="https://www.kaggle.com/glushko/digit-recognizer-0-99657-3-approaches-tpu" target="blank">Modeling</a> • <a href="https://github.com/roma-glushko/kaggle-digit-recognizer" target="blank">Github</a></li>                    
                    </ul>
                  </li>
                  <li className="project">
                    <h3>Wine Quality</h3>
                    <div className="project-description">Automated wine quality analysis based on results of physicochemical tests.</div>
                    <ul className="project-details">
                      <li><strong>Skills</strong>: Classification, Tabular Data, Data Analysis, Python, Scikit-Learn</li>
                      <li>Links: <a href="https://www.kaggle.com/glushko/wine-quality-domain-driven-eda-part-i" target="blank">Data Analysis</a> • <a href="https://www.kaggle.com/glushko/wine-quality-modelling-part-ii" target="blank">Modeling</a> • <a href="https://github.com/roma-glushko/kaggle-wine-quality" target="blank">Github</a></li>
                    </ul>
                  </li>
                  <li className="project">
                    <h3>Ames House Pricing</h3>
                    <div className="project-description">
                      Modeled house prices based on Ames Housing Dataset.
                      <br/> <br/>
                      Got to Top 4% of submitters on Kaggle.
                    </div>
                    <ul className="project-details">
                      <li><strong>Skills</strong>: Regression, Tabular Data, Real Estate, Data Analysis, Python, Scikit-Learn, XGBoost</li>
                      <li>Links: <a href="https://www.kaggle.com/glushko/house-prices-domain-driven-eda-part-i" target="blank">Data Analysis</a> • <a href="https://www.kaggle.com/glushko/house-prices-regression-modelling-part-ii" target="blank">Modeling</a> • <a href="https://github.com/roma-glushko/kaggle-house-prices" target="blank">Github</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <span className="other-projects-link">Other projects can be found on <a target="_blank" rel="noopener" href="https://github.com/roma-glushko?tab=repositories&q=machine-learning">GitHub</a> and <a target="_blank" rel="noopener" href="https://www.kaggle.com/glushko/code">Kaggle</a></span>
            </section>
            <section className="jobs">
              <h2><span>Work Experience</span></h2>
              <ul>
                <li itemscope itemtype="http://schema.org/Organization" className="job">
                  <strong itemprop="jobTitle">Tech Lead / Software Developer</strong>, <span itemprop="name">Atwix</span>; Ukraine — 2017-2020 (3.5 years)<br/>
                  <strong>Skills</strong>: Problem Solving, eCommerce, Marketing, Leadership, System Design, Problem Framing
                </li>
                <li itemscope itemtype="http://schema.org/Organization" className="job">
                  <strong itemprop="jobTitle">eCommerce Magento Software Developer</strong>, <span itemprop="name">Atwix</span>; Ukraine — 2015-2017 (2 years)<br/>
                  <strong>Skills</strong>: Linux, Git, PHP, MySQL, Elasticsearch, Redis
                </li>
              </ul>
            </section>
            <section itemscope itemtype="http://schema.org/ItemList" className="leadership">
              <dl>
                <dt><h2><span itemprop="name">Communication & Leadership</span></h2></dt>
                <ul>
                  <li itemprop="itemListElement">
                    <strong>Technical Leadership</strong> of Software Engineering Team (3.5 years) <br/>
                    Led cross-functional teams of different sizes (5-15 people incl. SEs, QA, PM, DevOps). Organized and optimized team processes. <br/> Took part in presentations and frequent calls with clients, project groomings, and delivered internal technical workshops. Advocated software engineer's needs behind C-level management.
                  </li>
                  <li itemprop="itemListElement">
                    Organized technical and business <a target="_blank" rel="noopener" href="https://www.atwix.com/magento/atwix-magenews-jun-2020/">newsletter</a> (led for 2 years) <br/>
                  </li>
                  <li itemprop="itemListElement">
                    Write <a target="_blank" rel="noopener" href="https://www.romaglushko.com/blog/">technical blog posts</a> and <a target="_blank" rel="noopener" href="https://www.romaglushko.com/thoughts/">thoughts about management</a> 
                  </li>
                </ul>
              </dl>
            </section>
            <section itemscope itemtype="http://schema.org/ItemList">
              <dl>
                <dt><h2><span itemprop="name">Hobby & Interests</span></h2></dt>
                <ul>
                  <li itemprop="itemListElement">Scooter driving</li>
                  <li itemprop="itemListElement">Self-improvement</li>
                  <li itemprop="itemListElement">Reading</li>
                  <li itemprop="itemListElement"><a rel="me" target="_blank" rel="noopener" href="https://www.romaglushko.com/">Blogging</a></li>
                  <li itemprop="itemListElement"><a target="_blank" href="https://github.com/roma-glushko">Open Source</a></li>
                </ul>
              </dl>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default MachineLearningEngineerCV
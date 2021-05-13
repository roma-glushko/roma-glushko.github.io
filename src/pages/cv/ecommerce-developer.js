import React from "react"

import Layout from "../../components/theme/layout"
import SEO from "../../components/seo"
import MainNavigation from "../../components/theme/main-navigation"
import CvHeader from "../../components/cv/cv-header"
import ThemeSwitcher from "../../components/theme/theme-switcher"
import SocialLinks from "../../components/homepage/social-links"

import './cv.css'

const eCommerceDeveloperCV = () => (
    <Layout>
      <SEO
        titleTemplate={"Roman Glushko's eCommerce Magento Developer CV"}
        className="experiment-view-page"
        pagePath='/cv/machine-learning-engineer'
        ogType="website"
        description="Roman Glushko's eCommerce Magento Developer CV"
        keywords={[
          "magento 2",
          "eCommerce Developer",
          "cv",
          "magento developer cv"
        ]}
      />
      <main className="cv cv-ecommerce-developer">
        <div className="pdf-badge"><a>pdf</a></div>
        <header>
          <div className="theme-switcher">
            <ThemeSwitcher />
          </div>
          <MainNavigation space={"cv"} />
          <CvHeader position={`eCommerce Magento Developer`} />
          <SocialLinks />
        </header>
        <div className="cv-content">
          <div className="cv-content-column additional-column">
            <section>
              <h2><span>Profile</span></h2>
              <ul>
                <li>5+ years of experience in Software Engineering and eCommerce development</li>
                <li>3+ years of experience in technical management</li>
                <li>Expertise in a broad variety of technical and business topics</li>
                <li>Constant, quick & curious learner</li>
                <li>Positive attitudes</li>
              </ul>
            </section>
            <section>
              <h2><span>Skills</span></h2>
              <ul>
                <li>TBU</li>
              </ul>
            </section>
            <section>
              <h2><span>Education</span></h2>
              <ul>
                <li><strong>Machine Learning Nanodegree</strong>, 2020-Present (6 months)</li>
                <li><strong>M.S. Computer Engineering</strong><br/> Khmelnytskyi National University, Ukraine, 2018</li>
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
          <div className="cv-content-column main-column">
            <section>
              <h2><span>Projects</span></h2>
              <ul>
                <li>
                  <h3>TBU</h3>
                  TBU
                </li>
              </ul>
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
                  Organized technical and business <a href="https://www.atwix.com/magento/atwix-magenews-jun-2020/">newsletter</a> (led for 2 years) <br/>
                </li>
                <li>
                  Write <a href="https://www.romaglushko.com/blog/">technical blog posts</a> and <a href="https://www.romaglushko.com/thoughts/">thoughts about management</a> 
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
)

export default eCommerceDeveloperCV
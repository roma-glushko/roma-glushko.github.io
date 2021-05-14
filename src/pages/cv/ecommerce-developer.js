import React from "react"

import Layout from "../../components/theme/layout"
import SEO from "../../components/seo"
import MainNavigation from "../../components/theme/main-navigation"
import CvHeader from "../../components/cv/cv-header"
import ThemeSwitcher from "../../components/theme/theme-switcher"
import SocialLinks from "../../components/homepage/social-links"
import BreadcrumbsRichSnippet from "../../components/theme/breadcrumbs-rich-snippet"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import './cv.css'

const MachineLearningEngineerCV = () => {
  return (
    <Layout>
      <SEO
        isUniqueTitle={true}
        title={"Roman Glushko's eCommerce Magento Developer CV"}
        className="cv-view-page"
        pagePath='/cv/ecommerce-developer'
        ogType="website"
        description="Roman Glushko's eCommerce Magento Developer CV"
        keywords={[
          "magento software engineer",
          "ecommerce developer",
          "cv",
          "certified ecommerce magento developer cv",
          "ecommerce magento developer resume"
        ]}
      />
      <main itemscope itemtype="http://schema.org/Person" className="cv cv-ecommerce-developer">
        <div className="pdf-badge" onClick={() => {
          trackCustomEvent({
            category: "cv",
            action: "download",
            label: "ecommerce-developer",
          })
          window.print()
        }} title="Download CV as a PDF file"><a>pdf</a></div>
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
            <section itemscope itemtype="http://schema.org/ItemList">
              <dl>
                <dt><h2 className={`notop-margin`}><span itemprop="name">Profile</span></h2></dt>
                <ul>
                  <li itemprop="itemListElement">Aspiring <strong>Problem Solver</strong> & Passionate Software Engineer</li>
                  <li itemprop="itemListElement"><strong>5+ years</strong> of experience in <strong>software engineering</strong> and eCommerce development</li>
                  <li itemprop="itemListElement"><strong>3+ years</strong> of experience in <strong>technical management of scrum teams</strong></li>
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
                  <li itemprop="itemListElement">Type of Services: Building eCommerce stores from scratch, Store Maintenance, Performance and SEO Audits, Extending of the default Magento setup, ERP/CRM/SaaS Integrations</li>
                  <li itemprop="itemListElement">Languages: <strong>PHP</strong>, Python, Golang, WebDev Stack (JS & HTML5 & CSS3)</li>
                  <li itemprop="itemListElement">Platforms: <strong>Magento 2 Open Source and Adobe Commerce(former Magento 2 Commerce)</strong>, Adobe Commerce Cloud</li>
                  <li itemprop="itemListElement">Software Engineering: Domain-Driven Design, SOLID, System Design</li>
                  <li itemprop="itemListElement">Management: Leading Scrum Teams, Product Owning, Problem Framing, Developer Mentoring, Giving Workshops</li>
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
                  <h3>B2B US Electrical Manufacturer</h3>
                  <div className="project-description">
                    The client was a big midwest US-based manufacturer of power units, electrical systems for home and office environments. They did not have a solid eCommerce platform and a lot of conversions happened during in-person sale meetings. Once COVID-19 struck the world, it became hardly possible to work that way. They urgently needed a viable eCommerce platform that would begin <strong>digitalization</strong> inside of the company. <br/><br/>
                    My team delivered their partner portal powered by <strong>Adobe Commerce Cloud just in 6 weeks</strong>. This included <strong>ERP integration, custom product configurator, importing all B2B company and product</strong> information. <br/><br/>
                    Also, I took part in concepts creation for the further features (package management capabilities for planned orders, integration with support system, B2B shipping, etc), B2C branch of their business.
                  </div>
                  <ul className="project-details">
                    <li><strong>Experience</strong>: Problem Framing, Requirement Gathering, Direct work with client team, Concept Creating, Adobe Commerce Cloud, Magento B2B, Building Magento 2 Store from scratch, Team Leading</li>
                  </ul>
                </li>
                <li className="project">
                  <h3>B2C US Kitchen Furniture Manufacturer and Retailer</h3>
                  <div className="project-description">
                    The client was a number one US online retailer of kitchen cabinets, sinks and other stuff needed for kitchen design with own manufacturing facilities on the east coast. They got to the "Inc. 500" twice. <br/><br/>
                    I was working on this project when it was on Magento1. The major thing that we did was a <strong>migration to Magento 2</strong>. It was an early days of Magento 2 and the migration was not a trivial process at all. It took us more than a year to migrate the website. Migration included a few thousands of hours the team spent on designing and implementing all custom functionalities including a way to <strong>run frequent sales</strong>, <strong>a workflow for kitchen design team to interact with clients, custom gallery for inspiration and import of 1 million products</strong>. <br/><br/>
                    After successful migration, we had worked a few more years on website support. During that phase, we implemented <strong>a workflow for contractors to work with the store in B2B like manner, loyalty program, integrations with payment methods</strong>, etc. <br/><br/>
                    Huge catalog prompted us to <strong>research a ways to improve indexing and search systems.</strong> Besides that, we were working on improving website performance by leveraging <strong>ReactJS-based micro-frontend approach</strong>.
                  </div>
                  <ul className="project-details">
                    <li><strong>Experience</strong>: Magento 2 Migration, Adobe Commerce, Store Maintenance, Product Owning, Performance Audits, SEO Audits, Concept Creation, Work With Client's Team, Ongoing Improvement Sells, Magento Consulting, Magento Upgrades, Adobe Commerce Cloud, Nexcess Hosting</li>
                  </ul>
                </li>
                <li className="project">
                  <h3>Austrian B2C Bedroom Furniture Seller</h3>
                  <div className="project-description">
                    The client was a small Austrian-based bedroom furniture company with up to 10 showrooms in Austria and German. They sold beds, wardrobes, dressers made from 5 types of aromatic wood, breathable organic mattress.<br/><br/>
                    They were on Magento 1 and they asked us for migration to Magento 2 Open Source. On Magento 1, they had <strong>a lot of custom functionality</strong>. We spent more than a year to redesign and implement it on Magento 2. Since major part of their sales came from showrooms, we payed extract attention on <strong>creating omnichannel-like experience</strong> for their customers. 
                    We developed a workflow for their showroom stuff to let them guide and <strong>create quotes together with customers which came to the store</strong>.
                  </div>
                  <ul className="project-details">
                    <li><strong>Experience</strong>: Magento 2 Migration, Concept Creations, Team Leading, Performance Audits, SEO Improvements, Ongoing Improvement Sells, Magento Consulting, Magento Upgrades</li>
                  </ul>
                </li>
              </ul>
              <div className="other-projects">
                <input type="checkbox" id="other-projects-collapse" />
                <label for="other-projects-collapse"><a>..click to show/hide other projects</a></label>
                <ul className="other-projects-list">
                  <li className="project">
                    <h3>French Shipping Provider</h3>
                    <div className="project-description">
                      TBU
                    </div>
                    <ul className="project-details">
                      <li><strong>Experience</strong>: Problem Framing, Data Collection, Data Labeling, Image Data, Python, PyTorch, Object Detection</li>
                    </ul>
                  </li>
                  <li className="project">
                    <h3>UK Customer Review Service Provider</h3>
                    <div className="project-description">
                      TBU
                    </div>
                    <ul className="project-details">
                      <li><strong>Experience</strong>: Problem Framing, Data Collection, Data Labeling, Image Data, Python, PyTorch, Object Detection</li>
                    </ul>
                  </li>
                  <li className="project">
                    <h3>US Cosmetics Reseller</h3>
                    <div className="project-description">
                      TBU
                    </div>
                    <ul className="project-details">
                      <li><strong>Experience</strong>: Problem Framing, Data Collection, Data Labeling, Image Data, Python, PyTorch, Object Detection</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <span className="other-projects-link">Other projects can be found on <a target="_blank" rel="noopener" href="https://github.com/roma-glushko?tab=repositories">GitHub</a> and <a target="_blank" rel="noopener" href="https://www.kaggle.com/glushko/code">Kaggle</a></span>
            </section>
            <section className="certifications">
              <h2><span>Certifications</span></h2>
              <ul>
                <li>
                  <strong><a href="https://www.credly.com/badges/85808e34-3436-407c-a087-71146c9d4caa">Adobe Commerce Business Practitioner</a></strong><br/>
                  <div>TBU</div>
                </li>
                <li>
                  <strong><a href="https://www.credly.com/badges/6a093495-8d10-446f-a273-2a4da62402ec">Adobe Commerce Developer</a></strong><br/>
                  <div>TBU</div>
                </li>
                <li>
                  <strong><a href="https://www.credly.com/badges/30795767-4b7d-4ef7-bd03-c2e3eecd9455">Adobe Commerce JavaScript Developer</a></strong><br/>
                  <div>TBU</div>
                </li>
                <li>
                  <strong>Adobe Commerce Cloud Developer</strong><br/>
                  <div>TBU</div>
                  <strong>Links</strong>: <a href="https://www.credly.com/badges/e0813e5d-094f-496b-adf3-89916d9ff90f">Credentials</a>
                </li>
              </ul>
            </section>
            <section className="jobs">
              <h2><span>Work Experience</span></h2>
              <ul>
                <li itemscope itemtype="http://schema.org/Organization" className="job">
                  <strong itemprop="jobTitle">Tech Lead / Software Developer</strong>, <span itemprop="name">Atwix</span>; Ukraine — 2017-2020 (3.5 years)<br/>
                  <div>TBU</div>
                  <strong>Skills</strong>: Problem Solving, eCommerce, Marketing, Leadership, System Design, Problem Framing, Domain-Driven Design
                </li>
                <li itemscope itemtype="http://schema.org/Organization" className="job">
                  <strong itemprop="jobTitle">eCommerce Magento Software Developer</strong>, <span itemprop="name">Atwix</span>; Ukraine — 2015-2017 (2 years)<br/>
                  <div>TBU</div>
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
            <section className="open-source-projects">
              <h2><span>Open Source</span></h2>
              <ul>
                <li>
                  <strong>Tango</strong><br/>
                  <div>TBU</div>
                  <strong>Links</strong>: <a href="https://github.com/roma-glushko/tango">Github</a> • <a href="22">ProductHunt</a>
                </li>
                <li>
                  <strong>GrumPHP Rules for Magento 2</strong><br/>
                  <div>TBU</div>
                  <strong>Links</strong>: <a href="https://github.com/roma-glushko/grumphp-magento2">Github</a>
                </li>
                <li>
                  <strong>Eyewear</strong><br/>
                  <div>TBU</div>
                  <strong>Links</strong>: <a href="https://github.com/roma-glushko/eyewear">Github</a>
                </li>
                <li>
                  <strong>DB Trimmer</strong><br/>
                  <div>TBU</div>
                  <strong>Links</strong>: <a href="https://github.com/roma-glushko/db-trimmer">Github</a>
                </li>
                <li>
                  <strong>Monolog Parser</strong><br/>
                  <div>TBU</div>
                  <strong>Links</strong>: <a href="https://github.com/roma-glushko/monolog-parser">Github</a>
                </li>
                <li>
                  <strong>Magento 2 Dir Buster</strong><br/>
                  <div>TBU</div>
                  <strong>Links</strong>: <a href="https://github.com/roma-glushko/magento2-dir-buster">Github</a>
                </li>
              </ul>
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
      <BreadcrumbsRichSnippet crumbs={[{'/cv/machine-learning-engineer/': 'Machine Learning Engineer CV'}]} />
    </Layout>
  )
}

export default MachineLearningEngineerCV
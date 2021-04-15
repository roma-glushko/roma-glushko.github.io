import React from 'react'

import "./blog-content-navigation.css"

class BlogContentNavigation extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            'activeSection': '',
            'contentSections': [],
        }
    }

    componentDidMount () {
        if (typeof window === 'undefined') {
            return
        }
        
        this.observer = new IntersectionObserver(this.updateNavigation.bind(this));

        const introSection = Array.from(document.querySelectorAll('#intro'))
        const contentSections = Array.from(document.querySelectorAll('.content h2[id]'))

        const allSections = introSection.concat(contentSections)

        allSections.forEach(section => {
            this.observer.observe(section);
        });

        this.setState({
            'contentSections': contentSections,
        })
    }

    render () {
        const {contentSections, activeSection} = this.state

        return <div className="blog-content-nav-wrapper">
            <ul className="blog-content-nav">
                <h2>Content</h2>
                <li className={activeSection === 'intro' ? 'active': ''} key="intro">
                    <a href="#intro">Intro</a>
                </li> 
                {contentSections.map(section => (
                <li className={activeSection === section.id ? 'active': ''} key={section.id}>
                    <a href={`#${section.id}`}>{section.innerText}</a>
                </li> 
                ))}
            </ul>
        </div>
    }

    updateNavigation (entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting || entry.intersectionRatio <= 0) {
                return 
            }

            this.setState({
                'activeSection': entry.target.getAttribute('id'),
            })
        });
    }
    
}

export default BlogContentNavigation
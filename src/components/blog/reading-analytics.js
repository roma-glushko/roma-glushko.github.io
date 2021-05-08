import React from 'react'
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

class ReadingAnalytics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        'contentType': props.contentType,
        'intializedAt': (new Date()).getTime(),
        'isReadingStarted': false,
        'readingStartedAt': undefined,
        'isReadingEnded': false,
        'readingEndedAt': undefined,
    }
  }

    componentDidMount () {
        if (typeof window === 'undefined') {
            return
        }

        const articleStart = document.getElementById('intro')
        const articleEnd = document.getElementById('content-end')

        const mainSections = Array.from(document.querySelectorAll('.content h2[id]'))
        const subSections = Array.from(document.querySelectorAll('.content h3[id]'))
        const allSections = mainSections.concat(subSections)

        this.readingStartObserver = new IntersectionObserver(this.trackReadingStart.bind(this));
        this.readingEndObserver = new IntersectionObserver(this.trackReadingEnd.bind(this));
        this.readingObserver = new IntersectionObserver(this.trackReading.bind(this));

        allSections.forEach(section => {
            this.readingObserver.observe(section);
        });

        this.readingStartObserver.observe(articleStart)
        this.readingEndObserver.observe(articleEnd)
    }

    trackReadingStart = (startSection) => {
        startSection = startSection[0]

        if (!startSection.isIntersecting || startSection.intersectionRatio <= 0) {
            return 
        }

        const { isReadingStarted, intializedAt, contentType } = this.state

        if (isReadingStarted) {
            // already tracked start of reading
            return
        }

        const readingStartedAt = (new Date()).getTime()
        const secondsUntilStartedReading = Math.round((readingStartedAt - intializedAt) / 1000)

        trackCustomEvent({
            category: 'content',
            action: 'startReading',
            label: contentType,
            value: secondsUntilStartedReading,
        })

        this.setState({
            'isReadingStarted': true,
            'readingStartedAt': readingStartedAt,
        })
    }

    trackReadingEnd = (endSection) => { 
        endSection = endSection[0]

        if (!endSection.isIntersecting || endSection.intersectionRatio <= 0) {
            return
        }

        const { isReadingEnded, readingStartedAt, contentType } = this.state

        if (isReadingEnded) {
            // already tracked end of reading
            return
        }

        const readingEndedAt = (new Date()).getTime()

        this.setState({
            'isReadingEnded': true,
            'readingEndedAt': readingEndedAt,
        })

        const secondsUntilEndedReading = Math.round((readingEndedAt - readingStartedAt) / 1000)

        window.requestAnimationFrame(() => {
            trackCustomEvent({
                category: 'content',
                action: 'endReading',
                label: contentType,
                value: secondsUntilEndedReading,
            })
        });
    }

    trackReading = (sections) => {
        const { isReadingStarted, isReadingEnded, readingStartedAt, contentType } = this.state

        if (!isReadingStarted) {
            return
        }

        if (isReadingEnded) {
            return
        }
        
        let currentReadingSections = []

        sections.forEach(section => {
            if (!section.isIntersecting || section.intersectionRatio <= 0) {
                return 
            }

            currentReadingSections.push(section.target.getAttribute('id'))
        })

        if (currentReadingSections.length === 0) {
            return
        }
        
        window.requestAnimationFrame(() => {
            const spentTimeReading = (new Date()).getTime()
            const secondsReading = Math.round((spentTimeReading - readingStartedAt) / 1000)

            trackCustomEvent({
                category: 'content',
                action: 'reading',
                label: contentType,
                value: secondsReading,
            })
        });
    }

    render = () => (<span></span>)
}

export default ReadingAnalytics
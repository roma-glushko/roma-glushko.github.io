import React from 'react'
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

class ReadingAnalytics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        'intializedAt': (new Date()).getTime(),
        'isReadingStarted': false,
        'readingStartedAt': undefined,
        'isReadingEnded': false,
        'readingEndedAt': undefined,
        'isScrollTracking': false,
    }
  }

    componentDidMount () {
        if (typeof window === 'undefined') {
            return
        }

        const articleStart = document.getElementById('intro')
        const articleEnd = document.getElementById('content-end')

        this.readingStartObserver = new IntersectionObserver(this.trackReadingStart.bind(this));
        this.readingEndObserver = new IntersectionObserver(this.trackReadingEnd.bind(this));

        this.readingStartObserver.observe(articleStart)
        this.readingEndObserver.observe(articleEnd)

        document.addEventListener('scroll', this.trackReading.bind(this))
    }

    trackReadingStart = (startSection) => {
        startSection = startSection[0]

        if (!startSection.isIntersecting || startSection.intersectionRatio <= 0) {
            return 
        }

        const { isReadingStarted, intializedAt } = this.state

        if (isReadingStarted) {
            // already tracked start of reading
            return
        }

        const readingStartedAt = (new Date()).getTime()
        const secondsUntilStartedReading = Math.round((readingStartedAt - intializedAt) / 1000)

        trackCustomEvent({
            category: 'content',
            action: 'startReading',
            label: 'blog',
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

        const { isReadingEnded, readingStartedAt } = this.state

        if (isReadingEnded) {
            // already tracked end of reading
            return
        }

        const readingEndedAt = (new Date()).getTime()
        const secondsUntilEndedReading = Math.round((readingEndedAt - readingStartedAt) / 1000)

        const readerType = this.getReaderTypeByReadingTime(secondsUntilEndedReading)

        trackCustomEvent({
            category: 'content',
            action: 'endReading',
            label: 'blog',
            value: secondsUntilEndedReading,
        })

        this.setState({
            'isReadingEnded': true,
            'readingEndedAt': readingEndedAt,
        })
    }

    getReaderTypeByReadingTime = (timeSpentReading) => {
        if (timeSpentReading >= 60) {
            return 'reader'
        }

        return 'scanner'
    }

    trackReading = () => {
        const { isScrollTracking, isReadingStarted, isReadingEnded, readingStartedAt } = this.state

        if (!isReadingStarted) {
            return
        }

        if (isReadingEnded) {
            return
        }

        if (isScrollTracking) {
            return
        }
        
        window.requestAnimationFrame(() => {
            const spentTimeReading = (new Date()).getTime()
            const secondsReading = Math.round((spentTimeReading - readingStartedAt) / 1000)

            trackCustomEvent({
                category: 'content',
                action: 'reading',
                label: 'blog',
                value: secondsReading,
            })

            this.setState({
                'isScrollTracking': false,
            })
        });

        this.setState({
            'isScrollTracking': true,
        })
    }

    render = () => (<span></span>)
}

export default ReadingAnalytics
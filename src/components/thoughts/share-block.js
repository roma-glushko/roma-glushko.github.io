import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit, faTwitter, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	RedditShareButton,
} from 'react-share'
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import './share-block.css';

const ShareBlock = ({ title, path, keywords }) => {
	const {
		site: {
			siteMetadata: {
				siteUrl,
			}
		}
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						siteUrl
					}
				}
			}
		`
	)

	const url = `${siteUrl}${path}`

	return (
		<div className="social-share-wrapper">
			<h3>Share Your Love</h3>
			<FacebookShareButton beforeOnClick={() => trackCustomEvent({'category': 'social', 'action': 'share', 'label': 'facebook', 'value': url})} url={url} keywords={keywords} className="social-share-item facebook" aria-label="Share Via Facebook" title="Share Via Facebook" >
				<FontAwesomeIcon icon={faFacebook} />
			</FacebookShareButton>
			<TwitterShareButton beforeOnClick={() => trackCustomEvent({'category': 'social', 'action': 'share', 'label': 'twitter', 'value': url})} url={url} className="social-share-item twitter" title={title} keywords={keywords} aria-label="Share Via Twitter">
				<FontAwesomeIcon icon={faTwitter} />
			</TwitterShareButton>
			<LinkedinShareButton beforeOnClick={() => trackCustomEvent({'category': 'social', 'action': 'share', 'label': 'linkedin', 'value': url})} url={url} className="social-share-item linkedin" aria-label="Share Via LinkedIn" keywords={keywords} title="Share Via LinkedIn">
				<FontAwesomeIcon icon={faLinkedinIn} />
			</LinkedinShareButton>
			<RedditShareButton beforeOnClick={() => trackCustomEvent({'category': 'social', 'action': 'share', 'label': 'reddit', 'value': url})} url={url} className="social-share-item reddit" title={title} keywords={keywords} aria-label="Share Via Reddit">
				<FontAwesomeIcon icon={faReddit} />
			</RedditShareButton>
		</div>
	);
};

ShareBlock.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
}

ShareBlock.defaultProps = {
	tags: [],
}

export default ShareBlock
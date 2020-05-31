import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit, faTwitter, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	RedditShareButton,
} from 'react-share';

import './share-block.css';

const ShareBlock = ({ title, path, keywords }) => {
	const {
		site: {
			siteMetadata: {
				siteUrl,
				author,
			}
		}
	} = useStaticQuery(
		graphql`
			query {
			site {
				siteMetadata {
					siteUrl
					author
				}
			}
			}
		`
	)

	const url = `${siteUrl}${path}`

	return(
		<div className="social-share-wrapper">
			<FacebookShareButton url={url} className="social-share-item facebook" aria-label="Share Via Facebook" title="Share Via Facebook" >
				<FontAwesomeIcon icon={faFacebook} />
			</FacebookShareButton>
			<TwitterShareButton url={url} className="social-share-item twitter" title={title} via={author.split('@').join('')} hashtags={keywords} aria-label="Share Via Twitter">
				<FontAwesomeIcon icon={faTwitter} />
			</TwitterShareButton>
			<span className="share-label">share</span>
			<LinkedinShareButton url={url} className="social-share-item linkedin" aria-label="Share Via LinkedIn" title="Share Via LinkedIn">
				<FontAwesomeIcon icon={faLinkedinIn} />
			</LinkedinShareButton>
			<RedditShareButton url={url} className="social-share-item reddit" title={title} aria-label="Share Via Reddit">
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

export default ShareBlock;
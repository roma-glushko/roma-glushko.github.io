import React from "react";
import PropTypes from "prop-types";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

const Comments = ({url, identifier, title}) => {
  let disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  }

  return (
    <div>
      <Disqus config={disqusConfig} />
    </div>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments
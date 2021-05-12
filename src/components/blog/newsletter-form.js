
import React from "react"

import "./newsletter-form.css"

const NewsletterForm = () => {
  return (
    <div className="newsletter-form">
      <iframe src="https://romanglushko.substack.com/embed" 
        width="100%" height="320" 
        style={{border: '1px solid #EEE'}}
        frameborder="0" scrolling="no"
      ></iframe>
    </div>
  );
};

export default NewsletterForm;
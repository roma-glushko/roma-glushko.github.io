import React from 'react'
import Helmet from "react-helmet"


class MathJax extends React.Component {
  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      window.MathJax ={
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['[', ']']],
          processEscapes: true,
          processEnvironments: true,
          skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
          TeX: {
            equationNumbers: { autoNumber: 'AMS' },
            extensions: ['AMSmath.js', 'AMSsymbols.js'],
          },
        },
      }
    }
  }

  render () {
    return <div className="mathjax">
      <Helmet>
        {/** performance and UX improvement */}
        <link rel="preload" as="script" href="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/jax/output/HTML-CSS/fonts/STIX/fontdata.js?V=2.7.5" />
        <link rel="preload" as="script" href="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/jax/output/HTML-CSS/fonts/STIX/General/Italic/MathItalic.js?V=2.7.5" />

        {/** hack from https://github.com/hanai/gatsby-remark-mathjax/issues/1 */}
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
          async
        />
      </Helmet>
    </div>
  }
  
}

export default MathJax
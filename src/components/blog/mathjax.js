import React from 'react'
import Helmet from "react-helmet"

function waitForGlobal(name, timeout = 300) {
  return new Promise((resolve, reject) => {
    let waited = 0

    function wait(interval) {
      setTimeout(() => {
        waited += interval
        // some logic to check if script is loaded
        // usually it something global in window object
        if (window[name] !== undefined) {
          return resolve()
        }
        if (waited >= timeout * 1000) {
          return reject({ message: 'Timeout' })
        }
        wait(interval * 2)
      }, interval)
    }

    wait(30)
  })
}


class MathJax extends React.Component {
  render () {
    return <div className="mathjax">
      <Helmet>
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
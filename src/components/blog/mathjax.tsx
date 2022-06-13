import * as React from "react"
import {useEffect} from "react"
import Helmet from "react-helmet"

type Tags = [string, string]

interface MaxJaxConfig {
  tex: {
    inlineMath: Tags[]
    displayMath: Tags[]
    processEscapes: boolean
    processEnvironments: boolean
  }
  options: {
    skipHtmlTags: string[]
  }
}

const maxjaxConfig: MaxJaxConfig = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["[", "]"],
    ],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    skipHtmlTags: [
      "script",
      "noscript",
      "style",
      "textarea",
      "pre",
      "code",
      "a",
    ],
  },
}

const MathJax = (): JSX.Element => {

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    window.MathJax = maxjaxConfig
  }, [])

  return (
    <div className="mathjax">
      <Helmet>
        {/** hack from https://github.com/hanai/gatsby-remark-mathjax/issues/1 */}
        <script
          type="text/javascript"
          // src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
          defer
          async
        />
      </Helmet>
    </div>
  )
}

export default MathJax

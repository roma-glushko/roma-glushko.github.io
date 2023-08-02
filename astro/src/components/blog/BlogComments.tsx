import * as React from "react"
import { useEffect, useRef } from "react"
import { useStore } from "@nanostores/react"

import { Themes } from "@components/ThemeSwitcher"
import { themeStore } from "src/stores/theme"

// https://www.vincentntang.com/installing-gatsbyjs-blog-comments/
const Comments = () => {
  const commentBox = useRef(null)
  const $theme = useStore(themeStore)

  useEffect(() => {
    const commentScript: HTMLScriptElement = document.createElement("script")

    commentScript.src = `https://utteranc.es/client.js`
    commentScript.crossOrigin = `anonymous`
    commentScript.async = true

    commentScript.setAttribute("label", `discussion💬`)
    commentScript.setAttribute(
      "repo",
      `roma-glushko/romaglushkocom-discussions`
    )
    commentScript.setAttribute("issue-term", `pathname`)
    commentScript.setAttribute("theme", themeStore.get() == Themes.LIGHT ? `github-light` : `github-dark`)

    commentScript.setAttribute("data-nosnippet", ``)
    
    commentBox.current.innerHTML = ""
    commentBox.current.appendChild(commentScript)
  }, [$theme])

  return <div ref={commentBox} className="comment-box" />
}

export default Comments

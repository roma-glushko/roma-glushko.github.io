module.exports = {
    siteMetadata: {
        title: `Roman Glushko`,
        description: `Hey 👋 My name is Roman and I'm a Magento, eCommerce and Life Explorer 🧔🛠👨‍💻📚`,
        keywords: ['roman glushko', 'roma glushko', 'roman hlushko', 'roma hlushko', 'magento', 'eCommerce', 'open source', 'web development', 'life explorer', 'thoughts'],
        author: `@roma_glushko`,
        siteUrl: `https://www.romaglushko.com`,
        personRichSnippet: {
            name: `Roman Glushko`,
            alternateName: `Roman Glushko`,
            gender: `Male`,
            jobTitle: `Tech Lead && Magento Software Developer. Atwix MageNews Editor`,
            worksFor: {
                name: `Atwix s.r.o.`,
                sameAs: [
                    `https://www.atwix.com`,
                    `https://twitter.com/atwixcom`,
                ]
            },
            sameAs: [
                `https://twitter.com/roma_glushko`,
                `https://github.com/roma-glushko`,
                `https://www.linkedin.com/in/glushko-roman`,
            ]
        },
    },
    plugins: [
        'gatsby-plugin-remove-generator',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Roman Glushko - Website`,
                short_name: `roma-glushko-page`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `minimal-ui`,
                icon: `src/images/fav-icon.png`,
            },
        },
        {
            resolve: 'gatsby-plugin-webfonts',
            options: {
                fonts: {
                    google: [
                        {
                            family: "Dancing Script",
                            fontDisplay: 'swap',
                        },
                        {
                            family: "Ledger",
                            fontDisplay: 'swap',
                        },
                    ],
                },
                useMinify: true,
                usePreload: true,
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-148139633-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: [],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
            },
        },
        'gatsby-plugin-dark-mode',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
                    `gatsby-remark-mathjax`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                          // Class prefix for <pre> tags containing syntax highlighting;
                          // defaults to 'language-' (e.g. <pre class="language-js">).
                          // If your site loads Prism into the browser at runtime,
                          // (e.g. for use with libraries like react-live),
                          // you may use this to prevent Prism from re-processing syntax.
                          // This is an uncommon use-case though;
                          // If you're unsure, it's best to use the default value.
                          classPrefix: "language-",
                          // This is used to allow setting a language for inline code
                          // (i.e. single backticks) by creating a separator.
                          // This separator is a string and will do no white-space
                          // stripping.
                          // A suggested value for English speakers is the non-ascii
                          // character '›'.
                          inlineCodeMarker: null,
                          // This lets you set up language aliases.  For example,
                          // setting this to '{ sh: "bash" }' will let you use
                          // the language "sh" which will highlight using the
                          // bash highlighter.
                          aliases: {},
                          // This toggles the display of line numbers globally alongside the code.
                          // To use it, add the following line in gatsby-browser.js
                          // right after importing the prism color scheme:
                          //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                          // Defaults to false.
                          // If you wish to only show line numbers on certain code blocks,
                          // leave false and use the {numberLines: true} syntax below
                          showLineNumbers: false,
                          // If setting this to true, the parser won't handle and highlight inline
                          // code used in markdown i.e. single backtick code like `this`.
                          noInlineHighlight: false,
                          // This adds a new language definition to Prism or extend an already
                          // existing language definition. More details on this option can be
                          // found under the header "Add new language definition or extend an
                          // existing language" below.
                          languageExtensions: [],
                          // Customize the prompt used in shell output
                          // Values below are default
                          prompt: {
                            user: "root",
                            host: "localhost",
                            global: false,
                          },
                          // By default the HTML entities <>&'" are escaped.
                          // Add additional HTML escapes by providing a mapping
                          // of HTML entities and their escape value IE: { '}': '&#123;' }
                          escapeEntities: {},
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `data`,
              path: `${__dirname}/data/`,
              ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.romaglushko.com`,
                stripQueryString: true,
            },
        },
        `gatsby-plugin-sitemap`
    ],
}
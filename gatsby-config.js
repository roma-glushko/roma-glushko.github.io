module.exports = {
    siteMetadata: {
        title: `Roman Glushko 🧔🛠👨‍💻📚`,
        description: `Roman Glushko - a certified Magento developer, web developer, golang entusiast, data science noobie, open source lover`,
        author: `@roma_glushko`,
    },
    plugins: [
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
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Dancing Script', 'Ledger']
                }
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
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `markdown-pages`,
              path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              commonmark: true,
              footnotes: true,
              pedantic: true,
              gfm: true,
              plugins: [],
            },
          },
    ],
}
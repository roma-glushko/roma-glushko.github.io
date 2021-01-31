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
                plugins: [],
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
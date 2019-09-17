module.exports = {
    siteMetadata: {
        title: `Roman Glushko 🧔🛠👨‍💻📚`,
        description: `Roman Glushko`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/fav-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-disable-404`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Dancing Script', 'Ledger']
                }
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
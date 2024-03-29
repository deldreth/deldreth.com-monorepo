module.exports = {
  siteMetadata: {
    title: 'deldreth.com',
    author: 'Devin Eldreth',
    description: 'Where deldreth writes the things...',
    siteUrl: 'http://www.deldreth.com',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `copy-local-files`,
      options: {
        source: `${__dirname}/../components/dist/components`,
        destination: 'components',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-91476802-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `deldreth.com`,
        short_name: `deldreth`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c792ea`,
        display: `minimal-ui`,
        icon: `src/assets/walter.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sass',
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 720,
              height: 480,
            },
          },
        ],
      },
    },
  ],
};

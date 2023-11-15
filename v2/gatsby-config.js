// gatsby-config.js
/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Shane Crosby - Web Developer`,
    siteUrl: `https://www.shanecrosby.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-recaptcha",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        "fonts": [`Montserrat`,`Kanit`,`Shadows Into Light`,`Architects Daughter`,`Handlee`],
        "display": 'swap'
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'portfolio',
        watchMode: false,
        overlayDrafts: false
      }
    }
  ],
};
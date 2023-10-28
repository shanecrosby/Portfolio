# Shane's Web Portfolio
* [Portfolio Homepage](https://www.shanecrosby.com) [(GitHub)](https://github.com/shanecrosby/webdev-portfolio)

Some sample sites for fictitious small businesses to demonstrate my front-end web development skills.
* [Bella Bakes](https://bellabakes.shanecrosby.com) [(GitHub)](https://github.com/shanecrosby/bellabakes)
* [Fit Fusion Gym (WIP)](https://fitfusion.shanecrosby.com) [(GitHub)](https://github.com/shanecrosby/FitFusion)
* [Green Thumb Landscaping (WIP)](https://greenthumb.shanecrosby.com) [(GitHub)](https://github.com/shanecrosby/GreenThumb)
* [Inkwell Stationers (WIP)](https://inkwell.shanecrosby.com) [(GitHub)](https://github.com/shanecrosby/Inkwell)
* [Urban Bites Food Tours (WIP)](https://urbanbites.shanecrosby.com) [(GitHub)](https://github.com/shanecrosby/UrbanBites)

# Technical stuff

## Initial Setup
Site is built on ReactJS using Gatsby.
(from terminal within sites folder)
```
npx create-gatsby
```

## Node Packages
The following additional node packages have been included in this site:
* gatsby-plugin-image
* gatsby-plugin-google-fonts
* gatsby-plugin-manifest - Lets users add the site to home screen on mobile
* gatsby-source-sanity - Plugs into Sanity.io which is a headless CMS for storing data instead of using local json files.
* Font Awesome: (@fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons)
* gh-pages ```npm install gh-pages --save-dev``` to allow automated publishing to GitHub pages.

## Things Learnt
* Some gotchas when setting up Sanity integration
* * Needed to create a .env file to contain the API token and have that excluded from Git
* * For development, the .env file needs to be .env.development
* * .env syntax: Just use the variable name (all caps from example below), don't use quotes
* * To plug Sanity into Gatsby this is the gatsby-config.js syntax:
```
{
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'portfolio'
      }
    }
```
* GraphQL queries use slightly different syntax when sourcing from Sanity.io vs JSON files

__Sanity__
```query {
        allSanityTestimonial {
            edges {
                node {
                    name
                    website
                    content
                }
            }
        }
    }
```

__JSON__
```allHomeCardsJson {
            nodes {
                id
                title
                description
                image
                imgalttext
            }
        }
```

## Site Asset Credits:

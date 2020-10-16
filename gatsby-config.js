require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: ``,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBY2YVbXl_M_sFH63Fk-9TW-UyO9ydBqWM",
  authDomain: "authentication-47bd8.firebaseapp.com",
  databaseURL: "https://authentication-47bd8.firebaseio.com",
  projectId: "authentication-47bd8",
  storageBucket: "authentication-47bd8.appspot.com",
  messagingSenderId: "611231551344",
  appId: "1:611231551344:web:8a0fbebb65a0e0fe2cc9b5"
        },
        loginPath: "/login",
        loginRedirectPath: "/",
        socialLogins: ["google"],
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 'Sansita Swashed',
                // variants: [`100`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "mpiiipi8o4wd",
        accessToken: "8GI24qMOu7J0fkrtBgmuEigFZmbSxOpFEP4GVKGDWjI",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

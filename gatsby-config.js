const path = require("path")

module.exports = {
  pathPrefix: `/demo`,
  siteMetadata: {
    title: `Max van IJsselmuiden`,
    description: `Personal portfolio of Max van IJsselmuiden, Product Designer from The Netherlands.`,
    author: `@maxvij`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        layouts: path.join(__dirname, "src/layouts"),
        templates: path.join(__dirname, "src/templates"),
        scss: path.join(__dirname, "src/scss"),
        types: path.join(__dirname, "src/types"),
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos`,
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
        background_color: `#6FBFA2`,
        theme_color: `#6FBFA2`,
        display: `minimal-ui`,
        icon: `src/images/favicon-small.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
  ],
}

// import type { GatsbyConfig } from "gatsby";
const siteManifest = require('./site-manifest.js')

module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    siteName: siteManifest.name,
    title: siteManifest.title,
    author: siteManifest.author,
    authorMail: siteManifest.authorMail,
    titleTemplate: siteManifest.titleTemplate,
    description: siteManifest.description,
    siteUrl: siteManifest.url,
    url: siteManifest.url,
    favicon: '/favicon.ico',
    image: '/image.jpg', // Path to your image you placed in the 'static' folder
    keywords: siteManifest.keywords,
    /* to hide the icon, put an empty string instead of a link */
    socialLinks: {
      twitter: siteManifest.socialLinks.twitter,
      facebook: siteManifest.socialLinks.facebook,
      github: siteManifest.socialLinks.github,
      instagram: siteManifest.socialLinks.instagram,
      vimeo: siteManifest.socialLinks.vimeo,
      youtube: siteManifest.socialLinks.youtube,
      soundcloud: siteManifest.socialLinks.soundcloud,
      linkedin: siteManifest.socialLinks.linkedin,
      tiktok: siteManifest.socialLinks.tiktok,
    },
  },

  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `md`],
        gatsbyRemarkPlugins: [
          `gatsby-transformer-sharp`,
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },

        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteManifest.pwa.name,
        short_name: siteManifest.pwa.short_name,
        start_url: `/`,
        background_color: siteManifest.pwa.background_color,
        theme_color: siteManifest.pwa.theme_color,
        display: `minimal-ui`,
        icon: `src/res/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteManifest.robots.host,
        sitemap: siteManifest.robots.sitemap,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },


    // Amazing loading progress bar on top of website
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: siteManifest.spin.color,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-offline',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-extract-image-colors',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
}

module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Sconetto's Blog`,
    name: `João Pedro Sconetto`,
    siteUrl: `https://sconetto.me/blog`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `this is a blog, there are some cool stuff and some rants. Enjoy it!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/sconetto`,
      },
      {
        name: `github`,
        url: `https://github.com/sconetto`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/sconetto`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/sconetto/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#333745`,
        theme_color: `#2a2a2a`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124572063-1",
      },
    },
  ],
};

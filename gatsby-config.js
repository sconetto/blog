module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Sconetto's Blog`,
    name: `João Pedro Sconetto`,
    siteUrl: `https://sconetto.me/blog`,
    description: `My personal blog to write about technology (mostly).`,
    hero: {
      heading: `Just an old fashion blog. Some cool tech stuff, some rants and some tutorials.`,
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

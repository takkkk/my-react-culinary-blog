module.exports = {
  siteMetadata: {
    title: 'TA-KITCHEN Culinary Delights',
    description: 'Culinary deights. Fresh and healthy everyday recipes!',
    keywords:'culinary, recipes, healthy recipes, everyday recipes, kitchen, chef, cooking, home cooking',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId : 'hf97rfg8gooh',
        accessToken: 'e56240e33c8b9a2cd4e025ec667dc6324eed63a7b7d10ad466dfa0c821c22eb5'
      }
    } 
  ],
}
   
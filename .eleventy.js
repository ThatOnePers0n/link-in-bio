module.exports = function(eleventyConfig) {
      eleventyConfig.addCollection("button", function(collectionApi) {
      const button = require("./data/links.json");
      return button;
  });
  
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("data/links.json");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
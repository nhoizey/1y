module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("logo.png");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("safari-pinned-tab.svg");
  eleventyConfig.addPassthroughCopy("robots.txt");
};
# 1y: 11ty, but shorter

## What is this?

**1y** is a short URL redirection system built with [Eleventy](https://www.11ty.dev/) (a.k.a. *1*1t*y*), the great JavaScript/Node based Static Site Generator.

This is not really a link "shortener", as it doesn't process anything. Short and long versions of links are managed manually, so that short URLs can be "beautiful".

## How does it work?

*1y* generates redirection rules from your set of data, each URL being stored in a Markdown file. The name of the Markdown file (`fileSlug` [in 11ty language](https://www.11ty.dev/docs/data/#page-variable-contents)) is the short URL, and the long URL is store in the file's [Front Matter](https://www.11ty.dev/docs/data-frontmatter/).

Redirection rules are generated in 3 formats to ease usage on different environments:
- Apache HTTPD server with Alias module
- Apache HTTPD server with Rewrite module (less efficient)
- [Netlify](https://netlify.com/) hosting with [redirects](https://docs.netlify.com/routing/redirects/)

You don't have to deal with any settings to chose which one to use, all 3 are generated at once.

## What do I have to do to use it?

This repository is intended to be used as a template for creating your own repository.

### The easiest: use Netlify Deploy Button

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/1y&stack=cms)

Clicking the button above will:
- create a new repository in your own GitHub account with *1y* code
- and deploy a copy of this new repository to your Netlify account (you can create an account during this process if you don't have one).

Each time you push changes to your Github repository (or add files directly with Github's Web interface), Netlify will build the new redirection files.

### If you want to use another hosting service: use the Github template

1. Click the <kbd>Use this template</kbd> green button in Github interface to create your own *1y* repository in your Github account
1. Clone or download the new repository to your local computer
1. (optional) If you don't have `npm` yet, [install npm](https://www.npmjs.com/get-npm)
1. Add new short URLs as Markdown files in the `links/` folder
1. Generate the redirection files with this command: `npx @11ty/eleventy`

Generated files to deploy are in the `_site` folder.

## Contribution

You are welcome and encouraged to make changes to this website by submitting pull requests!

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Nicolas Hoizey

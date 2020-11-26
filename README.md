# **1y**: taking the 1t out of 11ty 😅

<img src="https://raw.githubusercontent.com/nhoizey/1y/master/logo.png" alt="1y logo" width="128" height="128" align="right" />

## What is this?

**1y** is a short URL manager built with [Eleventy](https://www.11ty.dev/) (a.k.a. **1**1t**y**), the great JavaScript/Node based Static Site Generator.

This is not a URL "shortener", as it doesn't process anything. Short and long versions of URLs are managed manually, so that short URLs can be "beautiful".

## How does it work?

**1y** generates redirection rules from your set of data, each URL being stored in a Markdown file:
- the `fileSlug` of the Markdown file (the filename without the extension [in 11ty language](https://www.11ty.dev/docs/data/#page-variable-contents)) is the short URL. For example, the Markdown file `nho.md` you'll find in this template repository is used to create the [https://\<your-short-domain\>/**nho**](https://<your-short-domain>/nho) short URL.
- the long URL is stored in the file's [Front Matter](https://www.11ty.dev/docs/data-frontmatter/), for example here the `nho.md` file only contains these 3 lines:
    ```markdown
    ---
    url: https://nicolas-hoizey.com/
    ---
    ```

So for this example, when you go to [https://\<your-short-domain\>/**nho**](https://<your-short-domain>/nho), it redirects you to <https://nicolas-hoizey.com/>.

*If you don't want to manage many Markdown files for your short URLs, you can try [Suri](https://github.com/jstayton/suri), another Eleventy based short URL manager, which uses one single JSON file.*

Redirection rules are generated in 4 formats to ease usage on different environments:
- Apache HTTP server with [Alias module](https://httpd.apache.org/docs/current/en/mod/mod_alias.html) in a `.htaccess` file
- Apache HTTP server with [Rewrite module](https://httpd.apache.org/docs/current/en/mod/mod_rewrite.html) (less efficient) in the same `.htaccess` file
- [Netlify](https://netlify.com/) hosting with [redirects](https://docs.netlify.com/routing/redirects/) in a `_redirects` file
- HTML pages with both [HTML redirect](https://css-tricks.com/redirect-web-page/#article-header-id-1) (`<meta>` tag) and [JavaScript Redirect](https://css-tricks.com/redirect-web-page/#article-header-id-2). This is only meant as a last resort, only there if previous formats don't work. Your HTTP server needs to be able to respond to [https://\<your-short-domain\>/**nho**](https://<your-short-domain>/nho) with this actual ressource: [https://\<your-short-domain\>/**nho/index.html**](https://<your-short-domain>/nho/index.html)

You don't have to deal with any settings to chose which one to use, all 4 formats are generated at once.

## What do I have to do to use it?

This repository is intended to be used as a template for creating your own repository.

### The easiest: use Netlify Deploy Button

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/1y&stack=cms)

Clicking the button above will:
- create a new repository in your own GitHub account with **1y** code
- and deploy a copy of this new repository to your Netlify account (you can create an account during this process if you don't have one).

Each time you push changes to your Github repository (or add files directly with Github's Web interface), Netlify will build the new redirection files.

### If you want to use another hosting service: use the Github template

1. Click the <kbd>Use this template</kbd> green button in Github interface to create your own **1y** repository in your Github account
1. Clone or download the new repository to your local computer
1. (optional) If you don't have `npm` yet, [install npm](https://www.npmjs.com/get-npm)
1. Install **1y** dependencies with `npm install`
1. Add new short URLs as Markdown files in the `urls/` folder
1. Generate the redirection files with this command: `npm run build`

Generated files to deploy are in the `_site` folder.

## Contribution

You are welcome and encouraged to make changes to this website by submitting pull requests!

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Nicolas Hoizey

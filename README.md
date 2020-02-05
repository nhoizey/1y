# 1y: 11ty, but shorter

**1y** is a short links redirection service based on [Eleventy](https://www.11ty.dev/) (a.k.a. 11ty), the Static Site Generator.

This is not really a link "shortener", as it doesn't process anything. Short and long versions of links are managed manually, so that short URLs can be "beautiful".

It can redirect short to long links different ways, depending on where you deploy it:
- Apache Alias module
- Apache Rewrite module (less efficient)
- [Netlify](https://netlify.com/)'s [redirects](https://docs.netlify.com/routing/redirects/)

Actually, you don't have to deal with any settings, all three are generated at once.

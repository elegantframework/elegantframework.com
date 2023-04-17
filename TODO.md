~~~~~~> Working 

- finish google analytics... Needs a body component and test
    - write a blog post about GA
    - set up google search console
    - write a doc on google search console

- update the "creating a page doc".. It is outdated and based on docusaurus
    - should probably have a creating a new doc, page, and blog post guide.

- do a final sweep, cleanup any references to TW in the app

~~~~~~> To next release

- write upgrade guide 2.0 to 2.1

- write a blog post announcing the new release of the version.. link to upgrade guide
    - announce the native convertkit support .. Link to doc
    - announce easy theme color changing ... Link to doc



- be ready for may 1st -- maybe 1 or 2 weeks earlier to boost npm numbers?


~~~~~~> Roadmap

- cleanup dir structure
    - rename utilis to core
    - move build-rss into core
    - delete scripts folder
    - create config dir
    - move nav config code into config dir
    - delete navs dir
    - move layout code under components
    - delete layout dir
    - move theme code into config dir
    - move authors.js into config dir
    - move hooks into core dir
    - delete hooks dir

~~~~~~> Post launch


- fix blog meta social card and meta head tags not showing in production

- clean up the tailwind config.. Make it use just default like a user would expect


- add back the brand policy generator page

- set to require nodejs 16 for now

- Reenable algolia search.. Write a doc on how to use algolia with elegant

- Re enable versioning.. Write a doc on how to use versioning

- create a config directory under source..
    - delete nav, move to under config..
    = move theme.ts under config

- Re add cypress and e2e testing back

- Remove elegant-cli from inside package.json of the elegant source code

- add back "npm run format" to the elegant source package...     "format": "prettier '{src,remark}/**/*.{css,js,mdx}' --write",

- set up proper linting and auto fixing

 - update the main readme file with some better looking content.. A screenshot... Currently dull and boring

- Add a main readme to the Elegant github page

- create a turtle mania website, and create a turtle guide, with each turtle.. We can blog about turtle stuff.. It can use a blank white theme like shopifys turtle mania.. This can probably be the PG PC theme.


~~~~~~~ General

- make docs sidebar links collapsible like laravel.com

- add links to the footer.. Add env vars for the values

- make the trademark page dynamic with env variables

- add e2e test that verify's the index, docs, and blog pages load

- create a proper meta head component and insert it into the index page

- Upgrade eslint and all other packages to their latest

- move components to a proper nextjs format. Do need a layout and header folder?

- Upgrade components to tsx, write tests



POST Features to add and blog how to's

- Next PWA
- Next offline mode
- Sitemaps . doc on submitting to webmaster tools
- Plausible
- Next blogging with comments
- Terms of service template
- Privacy Policy template for GDPR
- Blog comments from the next demo repos



IH Feedback -

    - add mailchimp connection
    - checkout ghost blogging - Open source, has a bunch of neat features
    - tina could provide a cms ui admin panel for us
    - research hugo and astro for docs
    - research hashnode
    - research https://versoly.com/ more... Maybe we can link up?
    - checkout buffer to schedule social media posts

HN Analytics survey: Mixpanel, Amplitude, PostHog

- Maybe create a singular analytics handler component?
- Support Vercel Analytics with this module  --> Set an .env var VERCEL_ANALYTICS=true to activate it

Dang feedback - Landing page isn't clear to users what our product is



- document using the pwa icons generator

- update the seo title of the docs site.. Look at env vars, name and description.. We could do Hello World - Elegant - The CMS framework 

- Document how a user creates a new doc file

- Create an e2e test that goes to the local host url and verify the doc exists.. This help validate any future upgrades

- List some initial features of under the Why Elegant tab

- Write a doc on jest testing.. (Since this is a feature of Elegant, and not included in docusaurus)

- Expand on the idea in the docs that Elegant is SEO friendly, lightening fast, and cheap and easy to host.

- Figure out how to take args.. --docs blog
- No args is a full basic scaffold

- Add args to docs init cli command.. --demo for a small amount of docs, --full for all the docs

-- DOCUMENT THE DOCS FEATURES!!! How to create pages and stuff. How to set and change config

- Add sitemap 
- Add google analytics 
- Add doc versions
- Add site translations
- Add algolia config

- Enable doc versions.
    - Go back and update any doc links to use the versioning url
    - Document how a user would set up their own versioning 

- Set up site translations
    - Document how a user would set up translations
    - create a crowd sourced translation feature where people can translate your content for you?

- Take a look back at the example docusaurus docs site, and bring over alot of those features.. How to update your site, the category.json file, markdown features.

- A regular docs init command should download our docs site, but a summarized version of the docs as an example for devs
    - THe docusarus built site should have our Elegant Readme


- Add built in 508 compliance and testing  - Axe, Jest, Storybook.. Use Aria-labels






- Document full features included out of the box in the future

    - Perfect SEO score 100
    - Instant Loading
    - Low hosting costs
    - 100% uptime and availability
    - Preview urls (Vercel)
    - 100% responsive design. Mobile/ Desktop friendly
    - Works on any device, any browser
    - Built in sitemaps
    - Built in Google Analytics support
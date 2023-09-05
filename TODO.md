v3 go live ---

- update title and seo stuff on blog page.. Nothing set currently

- update navigation code to use simple interface object with title and slug
    - update sidebar to use new nav
    - update prevNext

- update navigation url loading code
    - delete the dependence on mdx-loader

- Delete mdx-loader code.

- update next config to delete the mdx loader code

- migrate sidebar layout.js into code .ts file.
- delete sidebarlayout.js file.

- switch to staticProps instead of serverside props on docs and blog slug?
    - I notice the initial load of .com v3 will be slow the first time you load the blog

- add non-index stuff to admin pages
- add new docs and blog content to the sitemap

- add datepicker styles

- add mobile nav back

- add youtube video to markdown or tiptap or remark



- Start migration of .com to v3-alpha.

    - Start setting up the admin cms panel
    - Document setting up the cms panel from scratch
    - Start making notes and docs of below.

- Code examples in docs and posts needs to be setup. Migration blogs to new route, and the second post does not have the code editor looking block


- migrate .com docs to live under the cli package, create an elegant-docs npm package.
- create simple starter docs and starter blog post that come included in a cli install.
    - similar to downloading a new next app.. They should provide a simple getting started guide.

- add any other cool remark features?

- create collection bug
    - create new collection.. Refresh page.. Will be broke.. Doesn't fetch from the github api
        - Also when you do fetch, it requires a whole rebuild to see the updated collection on the sidebar


- verify the images api works

- Write a getting started guide for the CMS panel. Document the env vars covered on the Welcome page.
    - Add a link to the doc mentioned above to the welcome page.


- make editor mobile friendly
- add dark mode support to editor


~~~~~~~~~> v2.4



- https://news.ycombinator.com/item?id=36791434
- https://novel.sh/
- https://novel.sh/

- Follow their lead for building a yc open source product: https://github.com/twentyhq/twenty

- validate video rich snippets


- announce on all channels that we have a discord chat. ---> https://discord.gg/PwY38x4uvV



    - look at Vercels blogging structure.. Update anything we need to know
        - figure out why tw used the method they used

    - Write better auth using Next-Auth
    - admin pages should be under robots txt and not in the sitemap?

    - Add common components like the elegant logo and theme toggle to the elegant ui package.
        - delete the common components from the admin in favor of elegant ui.


~~~~~~~~> v2.4 road map

- I need to get better about documenting features as we create them.
    - We have a bunch of tech debt currently in the form of undocumented features.
    - A blog post is a good general start to announcing features, but supporting docs should be written as well.


- need a storybook feature doc page
- need a jest feature doc page

- Start writing internal docs like Gitlab.. About us, our story, roadmap
    - Write a "How to start a new version" guide. 
        - Create new branch, ex. v3.1
        - Start the blog post
        - update the release notes
        - As we create and merge features, update the release notes and blog post with each PR to get ahead of writing content ahead of a release.


- add our facebook info the site and meta data ---> https://www.facebook.com/profile.php?id=100093261967093
- Create the full fb pixel integration

- Reenable algolia search.. Write a doc on how to use algolia with elegant


- how to accomplish below
    - download the innovators branch
    - go through the setting up a new app
    - write down some of the cooler things
    - find the top 5 items
    - cover them in a video, starting from creating an app from scratch.
        - "... some of my favorite features are ...."

- get manic
    - find 5 of the best features
    - document them
    - create a demo video based on the features.. 
    - put the demo video in the hero.. Make some homepage updates or tweaks
    - post in a subreddit to test a SHOW HN
    - post a SHOW HN

- document how to create a favicon; using https://www.favicon-generator.org/

- update beams image to use next image: https://stackoverflow.com/questions/63195562/next-js-set-background-image

- start on quest to create turtle mania.. Will be the same them as PG
- start on a quest to upgrade paulgraham.com

- create a workspace integration?
    - contact form? Auto sends to workspace?

- find that old list of places to submit the project to.. Submit to those


- create a contact spreadsheet, or use convert kit to email blogger people about trying out elegant for feedback

- commit the launch theme, then run the latest innovators release on top of it
    - set the goal of 2.5 to be able to create a single launch page theme using core components
        - People would be able to modify the theme by copying core components
        - Use pocket as the guide to build launch ---> https://tailwindui.com/templates/pocket

- update the init script
    - add packages folder like nextjs
    - add options like nextjs init script
    - start with base skyline template
    - create a base launch template with email signup.. Start with v1 as blank white.

- Move docs to separate folder in the cli project, that builds into its own elegant-docs npm package.


- create simple turtle mania launch page.. Push to the demo site and get the environment to turn green and passing on Github.

- Set up privacy policy and terms now that we have GA? 
    - Worry about GDPR now?

- build storybook axe testing into the testing deployment pipeline?
    - https://storybook.js.org/docs/react/writing-tests/accessibility-testing#a11y-config-with-the-test-runner


- Add a scannable qr code to the footer.. add a ?qr=home query to the url for GA tracking
    - Maybe check this out: https://news.ycombinator.com/item?id=36128082


- create an faq page.. Add schema metadata to it

- create a docs page explaining the function of a fb pixel, and how to enable it in elegant.

- Add storybook docs.. Make storybook look like https://www.bbc.co.uk/iplayer/storybook/index.html

- Improve install script -- Follow vercels lead  https://github.com/vercel/next.js/blob/canary/packages/create-next-app/index.ts

~~~~~~~~~> v3 file structure
The repository will be just called "Elegant", instead of elegant-cli... elegant-cli will live under Elegant in sub folder now

- elegant-ui  --> The core Elegant UI component library.
- elegant-cli --> The cli package for creating new Elegant apps
- elegantframework_com --> The location of the elegantframework.com code.
- elegant-themes --> The location of the planned free elegant themes.

~~~~~~~~> v3 road map

- delete deprecated components

- update homepage to look and feel like Gitlabs
- create internal docs like Gitlab.. Since we are open and transparent

- need to write docs and guides that shows a clueless non tech user how to set up a site from end to end.. Including Search Console, GA, Facebook Pixel, and more.

- cleanup dir structure
    - rename utilis to core
    - move build-rss into core
    - delete scripts folder
    - move layout code under components
    - delete layout dir
    - move theme code into config dir
    - move authors.js into config dir
    - move hooks into core dir
    - delete hooks dir

- figure out how to create a npx command.. ex: `npx create-next-app`
    - follow next.js lead
    - ask what the project name is
    - ask other questions
    - take the responses and put them into variables, set up the .env file and package.json file for people automatically.

~~~~~~> Road map


- Create a separate NPM package called Elegant Starter Content
        - Create v1.0.0
        - Add starter content for users.. Should be less about Elegant, and more of starter boilerplate content.. Slim down our production content
        - Include a release notes with sample v0.1.0 release notes.. Say something like project was created using Elegant with a link back to us in the first release note
        - Include a starter blog post

- Themes
    - Skyline - Base Elegant theme
    - Launch - Basic single announcement page of an upcoming service.. With email sign up
        - The perfect website template for launching your next exciting product or idea.

    - Hacker - PG PC Blank white theme
    - Interviewer - Theme for chris
    - name TBD -- Resume theme

~~~~~~> Post launch

- add a block to the homepage.. Love Elegant? Hire us

- write further detailed documentation on how to create new pages, docs, and blog posts.

- clean up the tailwind config.. Make it use just default like a user would expect



- Re enable versioning.. Write a doc on how to use versioning


- Re add cypress and e2e testing back

- Remove elegant-cli from inside package.json of the elegant source code

- add back "npm run format" to the elegant source package...     "format": "prettier '{src,remark}/**/*.{css,js,mdx}' --write",

- set up proper linting and auto fixing


- create a turtle mania website, and create a turtle guide, with each turtle.. We can blog about turtle stuff.. It can use a blank white theme like shopifys turtle mania.. This can probably be the PG PC theme.


~~~~~~~ General

- make docs sidebar links collapsible like laravel.com

- add e2e test that verify's the index, docs, and blog pages load

- Upgrade eslint and all other packages to their latest

- move components to a proper nextjs format. Do need a layout and header folder?

- Upgrade components to tsx, write tests



POST Features to add and blog how to's

- Next PWA
- Next offline mode
- Plausible
- Next blogging with comments
- Terms of service template
- Privacy Policy template for GDPR
- Blog comments from the next demo repos



IH Feedback -

    - add mailchimp connection
    - checkout ghost blogging - Open source, has a bunch of neat features
    - research hugo and astro for docs
    - research https://versoly.com/ more... Maybe we can link up?
    - checkout buffer to schedule social media posts

HN Analytics survey: Mixpanel, Amplitude, PostHog

- Maybe create a singular analytics handler component?
- Support Vercel Analytics with this module  --> Set an .env var VERCEL_ANALYTICS=true to activate it



- document using the pwa icons generator

- Document how a user creates a new doc file

- Create an e2e test that goes to the local host url and verify the doc exists.. This help validate any future upgrades

- List some initial features of under the Why Elegant tab

- Write a doc on jest testing.. (Since this is a feature of Elegant, and not included in docusaurus)

- Expand on the idea in the docs that Elegant is SEO friendly, lightening fast, and cheap and easy to host.

- Figure out how to take args.. --docs blog
- No args is a full basic scaffold

- Add args to docs init cli command.. --demo for a small amount of docs, --full for all the docs

-- DOCUMENT THE DOCS FEATURES!!! How to create pages and stuff. How to set and change config

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


- Explore sending transactional emails... Check out this service! https://resend.com/pricing


- Document full features included out of the box in the future

    - Perfect SEO score 100
    - Rich Snippets
    - Instant Loading
    - Low hosting costs
    - 100% uptime and availability
    - Preview urls (Vercel)
    - 100% responsive design. Mobile/ Desktop friendly
    - Works on any device, any browser
    - Built in sitemaps
    - Built in Google Analytics support
    - Jest unit testing
    - Light mode/ dark mode
    - Tailwind CSS
    - Storybook js components
    - GitHub actions


    I like this style of How to article - https://www.facebook.com/business/help/952192354843755?id=1205376682832142


    Blog Post Headlines

        - How I switched from using a todo file, to GitHub issues.
        - How I successfully switched from a todo file, to building in public with GIthub issues.
        - How to drive more organic traffic with Google Webmaster Tools, and these other SEO hacks.
        - How I added a security.txt file to my website.
        - How I got 50 stars on my open-source project!
        - How I used multiple properties under Google Search console to improve my rankings and seo traffic

        - How I used Zoho to get a free domain email
        - How I used Convert Kit to get started with a free newsletter service
        - How I used Docusaurus to launch my prototype and MVP
        - How I got my first code contribution to the Next.js project.
        - How I use Figma to create our SVG logos.
        - How to create watermarks using Figma.
        - Someone stole my images, what should I do? Use Figma to include your domain in the images.
        - How to write clean code.. Sample of bad triple ternary, vs cleanly written function.

https://www.lennysnewsletter.com/p/how-the-biggest-consumer-apps-got




Copyright -- 8 The Green, ste 300, 


Principals
    - Dont be greedy
    - Create 10x more value than we take.
    - Use our own code to build our products.
    - The users owns the content, not the product or the platform
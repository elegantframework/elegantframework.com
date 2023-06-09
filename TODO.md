
~~~~~~~~~> v2.2

- pull in latest cli version into .com

- check out announcing on hashnode as well

- submit updated sitemap to google
    - fix any validation errors

- triage why Ramsi' pr doesn't have a test status on it



~~~~~~~~> v2.3 road map
- I need to get better about documenting features as we create them.
    - We have a bunch of tech debt currently in the form of undocumented features.
    - A blog post is a good general start to announcing features, but supporting docs should be written as well.

- #1 priority item: Setup github repos to be more proper and complete. Use Next.js and Vercel as the guide.
    - probably need to create templates for issues and pr's
        - Issues should have screenshots for other people to understand
    - Finish going down the community standards list
    - Add a more complete main readme, with screenshots and gifs?

- R&D exploration for a CMS panel:
    - Checked out Tina.. Has everything, but looks bloated, flighty, and disorganized.. They are shifting from Forest.io to TinaCms and getting distracted.. Our oppurtunity to create someting more simple.
    - Decap-CMS (Netlify CMS) - This is possible
    - Netlify CMS integration with Next and Vercel:
        - https://github.com/robinpokorny/netlify-cms-now/tree/master
        - https://github.com/officialrajdeepsingh/contentLayerNetlifycms 
    - Ask Guermo and vercel to build one and help us?

- need a storybook feature doc page
- need a jest feature doc page

- create a discord server --> https://discord.gg/PwY38x4uvV
    - add it to the footer
    - announce on all channels that we have a discord chat.

- Start writing internal docs like Github.. About us, our story, roadmap
    - Write a "How to start a new version" guide. 
        - Create new branch, ex. v3.1
        - Start the blog post
        - update the release notes
        - As we create and merge features, update the release notes and blog post with each PR to get ahead of writing content ahead of a release.


- add our facebook info the site and meta data ---> https://www.facebook.com/profile.php?id=100093261967093
- Create the full fb pixel integration

- Finish video.js component
    - Add install video to install docs page.
    - Tina.io has a nice demo of a video component within a doc on their guides

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


- listen to this guys feedback: https://visualdebug.com/issue/TRRbJjU2vIu_vO_O90z-GQ
    - https://www.indiehackers.com/post/would-you-hire-me-6a8ff22811?commentId=-NV-OCbD-VTaw3Ir6f0A

- fix open graph image issue
    - delete or update the /api directory?

- update beams image to use next image: https://stackoverflow.com/questions/63195562/next-js-set-background-image

- start on quest to create turtle mania.. Will be the same them as PG
- start on a quest to upgrade paulgraham.com

- create a workspace integration?
    - contact form? Auto sends to workspace?

- find that old list of places to submit the project to.. Submit to those


- create a contact spreadsheet, or use convert kit to email blogger people about trying out elegant for feedback

- commit the launch theme, then run the latest innovators release on top of it
    - set the goal of 2.3 to be able to create a single launch page theme using core components
        - People would be able to modify the theme by copying core components
        - Use pocket as the guide to build launch ---> https://tailwindui.com/templates/pocket

- update the init script
    - add packages folder like nextjs
    - add options like nextjs init script
    - start with base skyline template
    - create a base launch template with email signup.. Start with v1 as blank white.


- create simple turtle mania launch page.. Push to the demo site and get the environment to turn green and passing on Github.

- Set up privacy policy and terms now that we have GA? 
    - Worry about GDPR now?

- add a brand page.. With logos and resources.. Like Vercel.com and TW


- build storybook axe testing into the testing deployment pipeline?
    - https://storybook.js.org/docs/react/writing-tests/accessibility-testing#a11y-config-with-the-test-runner



- Add a scannable qr code to the footer.. add a ?qr=home query to the url for GA tracking
    - Maybe check this out: https://news.ycombinator.com/item?id=36128082


- create an faq page.. Add schema metadata to it

- create a docs page explaining the function of a fb pixel, and how to enable it in elegant.

- Add storybook docs.. Make storybook look like https://www.bbc.co.uk/iplayer/storybook/index.html

- Improve install script -- Follow vercels lead  https://github.com/vercel/next.js/blob/canary/packages/create-next-app/index.ts

~~~~~~~~> v3 road map

- delete deprecated components

- update homepage to look and feel like Gitlabs
- create internal docs like Gitlab.. Since we are open and transparent

- need to write docs and guides that shows a clueless non tech user how to set up a site from end to end.. Including Search Console, GA, Facebook Pixel, and more.

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
    - tina could provide a cms ui admin panel for us
    - research hugo and astro for docs
    - research hashnode
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



- How to do an innovators release:
        npm version prerelease --preid=innovators
        npm publish --tag innovators

        Then npm install elegant-cli --tag innovators




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


https://www.lennysnewsletter.com/p/how-the-biggest-consumer-apps-got
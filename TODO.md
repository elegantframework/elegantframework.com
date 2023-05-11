
~~~~~~~~~> v2.2

- remove the deprecated icons
- continue on prototype header

- create .env.starter file in cli project.. Copy that over during init, not the example file
- Also copy the example file over, but have empty values and every env var possible so users can see all options
- add .env.test file to cli source

- Push to "innovators" release, and test

- storybook was broke when i ran it after running the cli init command

- run npm install in the init script
    - update the install doc to remove that step
    - update the console message to say the user can run the dev or run build


- listen to this guys feedback: https://visualdebug.com/issue/TRRbJjU2vIu_vO_O90z-GQ
    - https://www.indiehackers.com/post/would-you-hire-me-6a8ff22811?commentId=-NV-OCbD-VTaw3Ir6f0A

- create a demo video.. 

- put the demo video in the hero.. Make some homepage updates or tweaks

- fix open graph image issue


- start on a quest to upgrade paulgraham.com

- update beams image to use next image: https://stackoverflow.com/questions/63195562/next-js-set-background-image

- zoho?

- google workspace?
    - create a brandon@elegantframework.com email box

- create a workspace integration?
    - contact form? Auto sends to workspace?

- find that old list of places to submit the project to.. Submit to those


- create a contact spreadsheet, or use convert kit to email blogger people about trying out elegant for feedback


- Set up privacy policy and terms now that we have GA? 
    - Worry about GDPR now?

- add a brand page.. With logos and resources.. Like Vercel.com and TW


- build storybook axe testing into the testing deployment pipeline?
    - https://storybook.js.org/docs/react/writing-tests/accessibility-testing#a11y-config-with-the-test-runner

- Add storybook dark mode

- Add storybook docs.. Make storybook look like https://www.bbc.co.uk/iplayer/storybook/index.html

- Add a scannable qr code to the footer.. add a ?qr=home query to the url for GA tracking

~~~~~~~~> v2.3 road map

- create an faq page.. Add schema metadata to it

~~~~~~~~> v3 road map

- delete deprecated components

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

~~~~~~> Road map


- Create a separate NPM package called Elegant Starter Content
        - Create v1.0.0
        - Add starter content for users.. Should be less about Elegant, and more of starter boilerplate content.. Slim down our production content
        - Include a release notes with sample v0.1.0 release notes.. Say something like project was created using Elegant with a link back to us in the first release note
        - Include a starter blog post

- Themes
    - Skyline - Base Elegant theme
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

- make the trademark page dynamic with env variables

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


- How to do a pre release:
        npm version prerelease --preid=prerelease
        npm publish --tag prerelease

        Then npm install elegant-cli --tag prerelease

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
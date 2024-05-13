
- Schedule call with david at tiptap --> https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cXC_qUDNY9b2R3RmguksTja46LqBMVLia1tB0Oi40VtMCWejBJzCcIYiqnHzRZs2kqP5HRG8f?pli=1


--- IN PROGRESS

    - sysadmin /admin page is broke in production... Not 100% sure why... I believe it might be because it uses the old next routes, but I'm not sure



    - update cfabz to 3.2.0

    - merge brandon.me with 3.1
    
    - finish the yt series
    - flow back into item below

-- Editor



    ------ Editor Docs --------------

    - Getting Started
        - update the getting started page to show the blank dashboard upon first login.


    -- Update the main editors readme editor section with 3.1 content


    ------ Post Release ------

    - add drag handle back
    - add Action Menu back
    - talk with TipTap, and see how I can use the pro extensions
    - add image storage using Vercel blob
    - add ai stuff


--------------------------------


-- NEXT RELEASE

- add margin to docs footer top.. The toc can't activate the lower page items because they can't be scrolled to

- add a newsletter success page in cli, and .com
- research adding admin users to .env and login.


- Add a "Creating Collections" page doc
    - It should go before the creating pages in the sidebar

- Explore flowbite more.. buy license? Contact for a partnership

- Write a guide on url redirects.


- POST some RFCS..
    - Config file like liquid -- https://shopify.dev/docs/themes/architecture/config/settings-data-json
    - Next 14
    - Auto Upgrader Script


- finish any cms docs efforts.
- Make sure everything is connected well 
    - creating collections
    - update creating pages to be more flowing like the other pages
    - Finish visibility
    - author
    - url slug
    - cover image
    - add code blocks, and any other little items like that

    USE Voice to text to write more authentic docs.. faster

- write a guide showing how to set up a Google analytics tracking event for the newsletter

- update landing page with v3 content

- add more links to .com's new 3 column footer.

- create ryans demo site -- Combine chris' site format with elegant v3

- finish splash page for the flyer -- use spotlight --> https://salient.tailwindui.com/#testimonials
    - https://www.wix.com/



- update the creating content page to be more of an end to end guide for creating a post. Link to the other pages, and guide users on making pretty content. Use the following for reference: https://wordpress.com/support/posts/
 


- look at the tiptap docs.. Do exactly the opposite of them with calls.. Can people call? Yes.. Please schedule a teams call.... Can we do custom work? Of course; That's a revenue source, and we have pro tools like tw
- add about doc, add creator and sponsor info; why people should sponsor, etc.. Look at https://tiptap.dev/about#i-want-consulting-whats-your-rate


-- friction - I was writing a doc in the editor while at R. House and lost wifi.. Chrome wiped out my work, and I believe I have to restart the doc... Offline support with graceful reconnection would be 100% A+ for users.


- I found friction when loading the docs site.. The gh images lag on initial load
    - should probably look at the example nextjs repos to find a better way of loading remote images
   

- social graph image on the docs page looks broke on .com -- Will be fixed with 3.0.4

- Create a new blog post announcing Elegant CMS
    - add butterbar with announcement link


- write a how to guide on setting up versions using the ui kit selector and elegant like we did on our .com website.

- record an updated getting started YT video for v3.0


- document the rss feed?

- create a sidebar guide.. How to set it and update it in the config file



- finish pricing page
    - add more FAQ's.. shopify has good ones
    - why is the price so cheap? What's the catch?
    - 100% uptime? How is that possible?


- The current gh config is dangerous in production I believe.
    - add a cms_admin_user email in .env? This email will have to match the auth token, or else 401
        - use this --> https://stackoverflow.com/questions/31552125/defining-an-array-as-an-environment-variable-in-node-js

- update cms guide on how to setup production

- update cms guide; add quick notes on how to find repo owner and slug

- write up a guide on the privacy policy.. Stripe atlas has a really good article of what and why you should have one.

- write a guide for chris and others like him.. Non tech people.. So you have launched? What next? Connect google search console; connect GA; create content; how to post content on reddit successfully.

- add that we use grammarly.. That is huge for content creators


- stripe atlas, patron, connect paetron to gh, ask fabz to tip me





- add next image to the images

- add external links to remark/rehype.. The current docs are not fun to follow when you click GH and it takes you away from Elegant.


- The content editor should have quick preview links to make it easier to view the content you are working on.

- the admin url should not be accessible in a prod env if gh auth in not configured

- add any other cool remark features?

- create collection bug
    - create new collection.. Refresh page.. Will be broke.. Doesn't fetch from the github api
        - Also when you do fetch, it requires a whole rebuild to see the updated collection on the sidebar


- make editor mobile friendly
- add dark mode support to editor


~~~~~~~~~> v3.2

- remove the beams in favor of background gradients

- Follow their lead for building a yc open source product: https://github.com/twentyhq/twenty


- announce on all channels that we have a discord chat. ---> https://discord.gg/PwY38x4uvV

    - Write better auth using Next-Auth

    - Add common components like the elegant logo and theme toggle to the elegant ui package.
        - delete the common components from the admin in favor of elegant ui.


- Upgrader ---

- Upgrader should not be atomic to critical files like .env or redirects.
    - first creates an encrypted compressed copy for backup in another directory
    - Runs a script that adds removes and updates packages.

    - After steps complete, run tests to ensure 100% confidence that nothing broke.
    - If broke, revert changes by copying back encrypted backup
    - if not broke, delete backup


~~~~~~~~> v3.2 road map


- need a storybook feature doc page  -- UPDATE 12/4/2023 -- Probably can delete this since storybook will only run in the ui package and not in the core app.. Useless to general users.

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


- commit the launch theme, then run the latest innovators release on top of it
    - set the goal of 2.5 to be able to create a single launch page theme using core components
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

- build storybook axe testing into the testing deployment pipeline?
    - https://storybook.js.org/docs/react/writing-tests/accessibility-testing#a11y-config-with-the-test-runner


- Add a scannable qr code to the footer.. add a ?qr=home query to the url for GA tracking
    - Maybe check this out: https://news.ycombinator.com/item?id=36128082


- create an faq page.. Add schema metadata to it

- create a docs page explaining the function of a fb pixel, and how to enable it in elegant.

- Add storybook docs.. Make storybook look like https://www.bbc.co.uk/iplayer/storybook/index.html

- Improve install script -- Follow vercels lead  https://github.com/vercel/next.js/blob/canary/packages/create-next-app/index.ts


- the demo site repo should self update on a new release
    - use the admin to collect email signups when people use their GH


~~~~~~~~> v3 road map

- delete deprecated components

- update homepage to look and feel like Gitlabs
- create internal docs like Gitlab.. Since we are open and transparent

- need to write docs and guides that shows a clueless non tech user how to set up a site from end to end.. Including Search Console, GA, Facebook Pixel, and more.


- figure out how to create a npx command.. ex: `npx create-next-app`
    - follow next.js lead
    - ask what the project name is
    - ask other questions
    - take the responses and put them into variables, set up the .env file and package.json file for people automatically.

~~~~~~> Road map

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


- Re add cypress and e2e testing back

- add back "npm run format" to the elegant source package...     "format": "prettier '{src,remark}/**/*.{css,js,mdx}' --write",

- set up proper linting and auto fixing


- create a turtle mania website, and create a turtle guide, with each turtle.. We can blog about turtle stuff.. It can use a blank white theme like shopifys turtle mania.. This can probably be the PG PC theme.


~~~~~~~ General

- make docs sidebar links collapsible like laravel.com

- add e2e test that verify's the index, docs, and blog pages load

- Upgrade eslint and all other packages to their latest



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
        - How to write a blog post for new creators. Take from the convo with fabz; Explain seo, and how you should write articles to drive organic search traffic

https://www.lennysnewsletter.com/p/how-the-biggest-consumer-apps-got




Copyright -- 8 The Green, ste 300, 


Principals
    - Dont be greedy
    - Create 10x more value than we take.
    - Use our own code to build our products.
    - The users owns the content, not the product or the platform


Announcement Flow
    hashnode
    medium
    linkedin
    indiehackers
    facebook
    twitter
    reddit
    github
    youtube
    discord
    newsletter
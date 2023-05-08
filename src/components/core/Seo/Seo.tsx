import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo';
import Favicon from './Favicon/Favicon';
import MSApplicationTile from './Meta/MSApplicationTile';
import TwitterMeta from './Meta/TwitterMeta';
import RSSFeedMeta from './Meta/RSSFeedMeta';

interface Props {
    /**
     * The title of the app.
     */
    title?: string;
    /**
     * The description of the app.
     */
    description?: string;
    /**
     * The web applications name
     */
    siteName?: string;
    /**
     * The theme color.
     */
    themeColor?: string;
    /**
     * The twitter creator handle.
     */
    twitterHandle?: string;
    /**
     * The twitter site handle. 
     */
    twitterSite?: string;
    /**
     * The url of the elegant web application.
     */
    url?: string;
    /**
     * Image used for twitter cards and open graph data.
     */
    image?: string;
    /**
     * Used for Facebook insights
     */
    facebookAppID?: string;
    /**
     * Is this the base placeholder seo?
     */
    base?: boolean;
};

/**
 * A simple SEO head component for rendering all of the perfect seo meta data you could need.
 * @returns All of the seo meta data needed to inject into the html head component.
 */
const Seo = ({
    title = "",
    description = "",
    siteName = "",
    themeColor = "#ffffff",
    twitterHandle = "",
    twitterSite = "",
    url = "",
    image = "",
    facebookAppID = "",
    base = false
}: Props) => {
    if(!base){
        // update our seo props if they are provided
        const args: NextSeoProps = {};

        // web application title
        {title != "" ? args.title = title : null}
        {title != "" && args.openGraph?.title ? args.openGraph.title = title : null} 

        // web application description
        {description != "" ? args.description = description : null}
        {description != "" && args.openGraph?.description ? args.openGraph.description = description : null}

        // theme color
        {themeColor != "#ffffff" ? args.themeColor = themeColor : null}

        // twitter details
        {twitterHandle != "" && args.twitter ? args.twitter.handle = twitterHandle : null}
        {twitterSite != "" && args.twitter ? args.twitter.site = twitterSite : null}

        // web application name
        {siteName != ""  && args.openGraph?.siteName ? args.openGraph.siteName = siteName : null}

        // open graph image
        {image != "" && args.openGraph?.images ? args.openGraph.images = [{url: image}] : null}

        // website url
        {url != "" && args.openGraph?.url ? args.openGraph.url = url : null}

        return(
            <NextSeo {...args}/>
        );
    }

    return(
        <DefaultSeo 
            description={description}
            facebook={{
                appId: facebookAppID
            }}
            openGraph={{
                url: url,
                title: title,
                description: description,
                siteName: siteName,
                images: [
                    {url: image}
                ]
            }}
            themeColor={themeColor}
            title={title}
            twitter={
                TwitterMeta({
                    handle: twitterHandle,
                    site: twitterSite
                })
            }
            additionalLinkTags={
                Favicon({
                    directory: "/favicons"
                }).concat(
                    RSSFeedMeta({})
                )
            }
            additionalMetaTags={
                MSApplicationTile({
                    directory: "/favicons",
                    color: themeColor
                })
            }
        />
    );
};

export default Seo;
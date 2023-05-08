import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo';
import Favicon from './Favicon/Favicon';
import MSApplicationTile from './Meta/MSApplicationTile';
import TwitterMeta from './Meta/TwitterMeta';

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
    themeColor = "#ffffff",
    twitterHandle = "",
    twitterSite = "",
    base = false
}: Props) => {
    if(!base){
        const args: NextSeoProps = {};

        // set our seo props if they are provided
        {title != "" ?  args.title = title : null}
        {description != "" ?  args.description = description : null}
        {themeColor != "#ffffff" ?  args.themeColor = themeColor : null}
        {twitterHandle != "" && args.twitter ? args.twitter.handle = twitterHandle : null}
        {twitterSite != "" && args.twitter ? args.twitter.site = twitterSite : null}

        return(
            <NextSeo {...args}/>
        );
    }

    return(
        <DefaultSeo 
            title={title}
            description={description}
            twitter={
                TwitterMeta({
                    handle: process.env.NEXT_PUBLIC_APP_TWITTER_HANDLE,
                    site: process.env.NEXT_PUBLIC_APP_TWITTER_SITE_HANDLE
                })
            }
            additionalLinkTags={
                Favicon({
                    directory: "/favicons"
                })
            }
            additionalMetaTags={
                MSApplicationTile({
                    directory: "/favicons",
                    color: themeColor
                })
            }
            themeColor={themeColor}
        />
    );
};

export default Seo;
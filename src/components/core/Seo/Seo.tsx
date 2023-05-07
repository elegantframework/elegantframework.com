import { DefaultSeo } from 'next-seo';
import Favicon from './Favicon/Favicon';
import MSApplicationTile from './Meta/MSApplicationTile';

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
    base = false
}: Props) => {
    if(!base){

    }

    return(
        <DefaultSeo 
            title={title}
            description={description}
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
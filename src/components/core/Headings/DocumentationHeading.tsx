import moment from "moment";

type Props = {
    /**
     * The title of the heading element.
     */
    title: string;
    /**
     * The navigation section that this element is located in.
     */
    section?: string;
    /**
     * The date time that this item was last updated
     */
    lastUpdated?: string;
};

/**
 * A heading component to be used within the documentation layout component.
 * @returns An html heading section to be displayed at the top of documentation pages.
 */
export function DocumentationHeading({
    title,
    section = "",
    lastUpdated = ""
}: Props){
    return(
    <div className="relative z-20">
        <div>
            {section && (
                <p className="mb-2 text-sm leading-6 font-semibold text-primary-500 dark:text-primary-400">
                    {section}
                </p>
            )}
            <div className="items-center">
                <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                    {title}
                </h1>
                {lastUpdated && (
                    <p className="text-slate-700 dark:text-slate-400 mt-2">
                        Last updated on {moment.utc(lastUpdated).format('MMMM Do YYYY').toString()}
                    </p>
                )}
            </div>
        </div>
    </div>
    );
}
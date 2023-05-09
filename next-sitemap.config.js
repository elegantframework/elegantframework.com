/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: (
        // if this not in vercel production, set the url to be the vercel preview url
        process.env.NEXT_PUBLIC_VERCEL_URL !== undefined &&
        process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined &&
        process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"
        ? "https://" + process.env.NEXT_PUBLIC_VERCEL_ENV : process.env.NEXT_PUBLIC_APP_URL
    ),
    generateRobotsTxt: true
};
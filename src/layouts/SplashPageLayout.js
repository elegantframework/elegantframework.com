import SplashFooter from '@/components/core/Footer/SplashFooter';

export function SplashPageLayout({ children }) {
    return (
        <>
            <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
                {children}
            </main>
            <SplashFooter navigation={[
              {
                title: "Community",
                links: [
                    { title: 'GitHub', href: process.env.NEXT_PUBLIC_APP_REPOSITORY },
                    { title: 'Indie Hackers', href: 'https://www.indiehackers.com/product/elegant-framework' },
                    { title: 'Twitter', href: 'https://twitter.com/thebrandonowens' },
                    { title: 'Reddit', href: 'https://www.reddit.com/r/elegantframework/' }
                ]
              },
              {
                  title: "Features",
                  links: [
                      { title: 'Theme Customization', href: '/docs/theme/' },
                      { title: 'Easy Configuration', href: '/docs/configuration/' },
                      { title: 'Affordable Hosting', href: '/docs/deployment/' },
                      { title: 'Safe & Fast', href: '/blog/2023-04-20-the-future-is-markdown'}
                  ]
              },
              {
                  title: "Services",
                  links: [
                      { title: 'Google Analytics', href: '/docs/google-analytics/' },
                      { title: 'ConvertKit', href: '/docs/convertkit/' },
                      { title: 'Vercel', href: '/docs/deployment/' },
                  ]
              }
            ]}/>
        </>
    );
};
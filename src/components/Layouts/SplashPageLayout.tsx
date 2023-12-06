import SplashHeader from "@/components/Headers/SplashHeader";
import Config from '@/utils/Config/Config';
import ThreeColumnFooter from "../Footer/ThreeColumnFooter";

interface Props {
    /**
     * Child html to be displayed the layout.
     */
    children: React.ReactNode;
};

export function SplashPageLayout({
    children
}: Props) {
    return (
        <>
            <SplashHeader 
                appName={Config('app.name')}
                gitHubUrl={Config('app.repository')}
                navigationItems={[
                    {
                        href: "/docs/installation",
                        path: "/docs/",
                        label: "Docs",        
                    },
                    {
                        href: "/blog",
                        path: "/blog",
                        label: "Blog",        
                    },
                    {
                        href: "/pricing",
                        path: "/pricing",
                        label: "Pricing",        
                    }
                ]}
                beams={true}
            />
            <main className="pt-10 mb-6 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12">
                {children}
            </main>
            <ThreeColumnFooter 
                column1={[
                {
                    title: "Community",
                    links: [
                    { title: 'GitHub', href: Config('app.repository'), external: true },
                    { title: 'Indie Hackers', href: 'https://www.indiehackers.com/product/elegant-framework', external: true },
                    { title: 'Twitter', href: 'https://twitter.com/thebrandonowens', external: true },
                    { title: 'Reddit', href: 'https://www.reddit.com/r/elegantframework/', external: true },
                    { title: 'Discord', href: 'https://discord.gg/PwY38x4uvV', external: true }
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
                ]}
                column2={[
                {
                    title: "Services",
                    links: [
                        { title: 'Google Analytics', href: '/docs/google-analytics/' },
                        { title: 'ConvertKit', href: '/docs/convertkit/' },
                        { title: 'Vercel', href: '/docs/deployment/' },
                    ]
                },
                ]}
                column3={[
                {
                    title: "Resources",
                    links: [
                        { title: 'Pricing', href: '/pricing' },
                        { title: 'Website Design Services', href: '/experts' },
                    ]
                } 
                ]}
                copyright='Elegant, Inc.'
            />
        </>
    );
};
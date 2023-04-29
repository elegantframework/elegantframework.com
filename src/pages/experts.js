import Head from "next/head";
import socialCardLarge from '@/img/social-card-large.jpg';
import { SplashPageLayout } from "@/layouts/SplashPageLayout";

Experts.layoutProps = {
  meta: {
    ogImage: socialCardLarge.src,
  },
  Layout: SplashPageLayout
};

export default function Experts() {
  return(
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content={"Let Us Build Your Dream - Websites built by Elegant Experts"}
        />
        <meta
          key="og:title"
          property="og:title"
          content={"Let Us Build Your Dream - Websites built by Elegant Experts"}
        />
        <title>
          Let Us Build Your Dream - Websites built by Elegant Experts
        </title>
      </Head>
      <div className="relative max-w-5xl mx-auto pt-10 sm:pt-14 lg:pt-22">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Hire the Elegant expertise you need.
        </h1>
        <p className="mt-6 text-2xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Love Elegant but don't want to launch your own website? 
        </p>
        <div className="mt-20 pl-2 w-full md:max-w-2xl mx-auto">
          <p className="text-md md:text-lg text-slate-800 max-w-3xl mx-auto dark:text-white">
            Let us build your perfect website.
          </p>
          <p className="mt-2 text-md md:text-lg text-slate-800 max-w-3xl mx-auto dark:text-white">
            Connect with an Elegant expert for free today. 
          </p>
        </div>
        <div className="mt-4 sm:mt-4 md:flex justify-center md:space-x-6 text-sm max-w-3xl mx-auto">
          <form 
              action={"https://app.convertkit.com/forms/5102584/subscriptions"} 
              method="post"
              target="_blank"
              className="md:flex flex-wrap md:-mx-2 w-full md:max-w-[43rem]"
            >
            <div className="md:px-2 grow-[9999] basis-64">
              <div className="group relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-primary-500 dark:group-focus-within:text-slate-400"
                  >
                    <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" />
                    <path d="m6 7 6 5 6-5" />
                  </svg>
                  <input
                    name="email_address"
                    type="email"
                    required
                    autoComplete="email"
                    aria-label="Email address"
                    className="appearance-none shadow rounded-md mb-5 md:mb-0 ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 h-12 w-full placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-primary-700/20 dark:ring-primary-200/20 dark:focus:ring-primary-500 dark:text-white"
                    placeholder="Email address"
                  />
              </div>
            </div>
            <div className="md:px-2 grow flex">
              <button
                type="submit"
                className="bg-primary-500 flex-auto shadow text-white rounded-md mb-5 md:mb-0 text-sm border-y border-transparent py-2 font-semibold px-12 h-12 hover:bg-primary-600 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-primary-300 dark:focus:ring-offset-primary-900 dark:focus:ring-primary-700"
              >
                  Get Expert Help
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
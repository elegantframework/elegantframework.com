import { SplashPageLayout } from "@/components/Layouts/SplashPageLayout";
import { RocketLaunchIcon, LockClosedIcon, RectangleStackIcon, PencilSquareIcon, CalendarDaysIcon, NewspaperIcon, MicrophoneIcon, PaintBrushIcon, ListBulletIcon } from '@heroicons/react/20/solid';
import techSplash from '@/img/splash/hire-us-splash-tech-picture.jpg';
import Link from "next/link";
import Image from 'next/image';

const features = [
  {
    name: 'Simple and secure.',
    description:
      'A simple framework, with an even more simple and efficient content management framework.',
    icon: LockClosedIcon,
  },
  {
    name: 'Ultra blazing fast.',
    description: 'Elegant has been engineered using the best tools, and practices. The end result is an ultra fast website, with a near perfect Google Lighthouse SEO score.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Beautifully designed.',
    description: 'Select from professionally pre crafted themes, or design your own from scratch.',
    icon: RectangleStackIcon,
  },
]

Launch.layoutProps = {
  Layout: SplashPageLayout,
  stickyHeader: false,
  meta: {
    title: "Claim your Free Website from Elegant -- What will you create?",
  }
};

export default function Launch() {
  return(
    <>
      <div className="relative max-w-5xl mx-auto pt-5">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Claim your free website
        </h1>
        <p className="mt-6 text-2xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Choose from a number of professionally crafted themes, or even design your own - <span className="font-semibold text-black dark:text-white">what will you create?</span>
        </p>
        <div className="mt-6 sm:mt-10 md:flex justify-center md:space-x-6 text-sm max-w-3xl mx-auto">
          <form 
            action={"https://app.convertkit.com/forms/5102584/subscriptions"} 
            method="post"
            target="_blank"
            className="md:flex flex-wrap md:-mx-2 w-full md:max-w-xl"
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
                  Sign Up
              </button>
            </div>
          </form>
          <div className='border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-600 md:mx-3 mb-5 md:mb-0'></div>
          <Link
            href=""
            className="bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-slate-900 h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto min-w-[128px] dark:highlight-white/20 dark:hover:bg-slate-100 border dark:border-slate-100"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-20 text-center">
          {/* <p className="font-display text-base text-slate-900">
            Trusted by these six companies so far
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: 'Blogging', icon: PencilSquareIcon },
                { name: 'Portfolios', icon: PaintBrushIcon },
                { name: 'Recipes', icon: RectangleStackIcon },
              ],
              [
                { name: 'Podcasts', icon: MicrophoneIcon },
                { name: 'Events', icon: CalendarDaysIcon },
                { name: 'Resumes', icon: ListBulletIcon },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((purpose) => (
                    <li key={purpose.name} className="flex">
                      <div className="flex">
                        <purpose.icon className="h-5 w-5 text-slate-900" aria-hidden="true"/>
                        <span className="pl-2 text-slate-900 text-xl font-bold relative -top-1">
                          {purpose.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
{/* 
      look at weeblys landing splash .. add a feel like that


      include at the bottom in a block that its built right here in baltimore with some pics


      At the bottom bottom when scrolling, add something like

      "The only question left is what's stopping you?"

      Then add the signup block again */}
    </>
  );
}
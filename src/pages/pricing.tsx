import { SplashPageLayout } from "@/components/Layouts/SplashPageLayout";
import techSplash from '@/img/splash/hire-us-splash-tech-picture.jpg';
import { Disclosure } from "@headlessui/react";
import { ArrowUpOnSquareStackIcon, CalendarDaysIcon, CheckCircleIcon, CheckIcon, CloudArrowUpIcon, HandRaisedIcon, MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

Pricing.layoutProps = {
  Layout: SplashPageLayout,
  stickyHeader: false,
  meta: {
    title: "Pricing - Elegant",
    description: "The fastest content management platform. Built with Next.js, Tailwind CSS, and more. Self-host for free, or let us host your web application for you."
  }
};

let tiers:Tier[] = [
    {
        id: "self-hosted",
        href: "/docs/installation",
        featured: true,
        name: "Self-Hosted",
        priceMonthly: "Free",
        description: "Start your next side project or blog, and deploy to your favorite serverless host.",
        features: ["Hosted by you", "Easy deployments to Vercel, AWS, & Netlify", "Free content management system (CMS)", "Included starter theme", "Perfectly optimized for SEO", "Fully customizable", "Get started in less than 5 minutes", "Community & email support"],
        action: "Get Started Today",
        preText: "It's always"
    },
    {
        id: "hosted",
        href: "#elegant-pro",
        featured: false,
        name: "Elegant Pro",
        priceMonthly: "$9.99",
        description: "Lightning fast hosting on the edge, with next-level publishing features and more. Limited time introductory pricing.",
        features: ["Hosted by Elegant", "100% uptime", "High-performance edge network", "Premium themes, or build your own", "Custom domain names", "Advanced features for creators", "Try Elegant free for 7 days, cancel anytime", "Priority support"],
        action: "Join Waitlist",
        preText: "Starting at"
    },
    {
        id: "custom",
        href: "/experts",
        featured: false,
        name: "Custom",
        priceMonthly: "$500",
        description: "Let us design, build, and launch your perfect website, guiding you along the way from A to Z.",
        features: ["Custom theme built by Elegant", "Hosted by Elegant", "Dedicated launch specialist", "Migrate from WordPress, Medium, & more", "Everything included in Hosted", "Advanced features for enterprises", "24/7 dedicated support"],
        action: "Learn More",
        preText: "Starting at"
    }
];

let faqs:FAQ[] = [
  {
    question: "What is Elegant and how does it work?",
    answer: "Elegant is an all-in-one content platform built for developers and independent content creators to start, run, and grow their content, web application, and everything in between."
  },
  {
    question: "How much does Elegant Pro cost?",
    answer: "You can try Elegant free for 7 days, no credit card required. After your trial expires, choose a plan that suits the size and stage of your web application."
  },
  {
    question: "How long are your contracts?",
    answer: "All Elegant Hosted and Custom plans are month to month, and you can cancel at anytime."
  },
  {
    question: "Can I cancel my Elegant account at anytime?",
    answer: "Yes, if you ever decide that Elegant isn't the best content platform for your, simply cancel your account."
  },
  {
    question: "Can I use my own domain with Elegant?",
    answer: "Yes, you can purchase a domain name, or use an existing one that you own with your Elegant website. We also provide a forever free myelegant.app domain name to all websites when they sign up for Elegant Pro."
  }
];

export default function Pricing() {
  return(
    <div className="relative isolate px-0 md:px-6 pt-0 py-24 sm:py-32 sm:pt-0 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Level up your creativity with Elegant
            </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
            Perfect for blogging, writing documentation, showing off your portfolio, or anything else—with the easiest content creation platform.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'bg-gray-900 ring-1 ring-white/10' : 'bg-white ring-gray-200',
                'rounded-3xl p-8 ring-1 xl:p-10'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-4 text-sm leading-6')}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-base text-gray-500 text-sm">{tier.preText} </span> 
              </p>
              <p className="mt-1 flex items-baseline gap-x-1">
                {tier.strikeThroughPrice && (
                   <span
                   className={classNames(
                     tier.featured ? 'text-white' : 'text-gray-900',
                     'text-4xl font-bold tracking-tight line-through pr-2'
                   )}
                 >
                   {tier.strikeThroughPrice}
                 </span>
                )}
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-900',
                    'text-4xl font-bold tracking-tight'
                  )}
                >
                  {tier.priceMonthly}
                </span>
                {tier.id !== "self-hosted" && tier.id !== "custom" && (
                    <span className="text-base text-gray-500">/ month</span>
                )}
                {tier.id !== "self-hosted" && tier.id !== "hosted" && (
                    <span className="text-base text-gray-500">plus hosting</span>
                )}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                    : 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                {tier.action}
              </a>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-8 space-y-3 text-sm leading-6 xl:mt-10'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircleIcon 
                      className={clsx("h-6 w-5 flex-none", tier.featured ? 'text-primary-400' : 'text-primary-600')} 
                      aria-hidden="true" 
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="elegant-pro" className="relative isolate overflow-hidden bg-gray-900 ring-1 ring-white/10 mt-40 py-16 sm:py-24 lg:py-32 rounded-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to be amazing, all in one place.</h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Lightning fast hosting on the edge, with next-level publishing features and more. Launching soon! 🚀
                </p>
                <div>
                  <form 
                    action="https://app.convertkit.com/forms/5738356/subscriptions" 
                    method="post" 
                    target="_blank"
                    className="mt-6 flex max-w-md gap-x-4"
                  >
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Join Waitlist
                    </button>
                  </form>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CloudArrowUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-white">Cutting Edge Hosting</dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Always fast, always online. Our Edge Network is able to intelligently run your app as close to your users as possible.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <ArrowUpOnSquareStackIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-white">Push To Deploy</dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Deployments couldn't be any easier. Just push your code to GitHub, and we'll handle it from there.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-white/10">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
                    Frequently asked questions
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-white/10">
                    {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                        <>
                            <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                )}
                                </span>
                            </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                            </Disclosure.Panel>
                        </>
                        )}
                    </Disclosure>
                    ))}
                </dl>
            </div>
        </div>
    </div>
  );
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface Tier {
    id: string;
    href: string;
    featured: boolean;
    name: string;
    strikeThroughPrice?: string;
    priceMonthly: string;
    description: string;
    features: string[];
    action: string;
    preText: string;
};

interface FAQ {
    question: string;
    answer: string;
};
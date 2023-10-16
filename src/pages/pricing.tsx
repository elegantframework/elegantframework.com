import { SplashPageLayout } from "@/components/core/Layouts/SplashPageLayout";
import techSplash from '@/img/splash/hire-us-splash-tech-picture.jpg';
import { Disclosure } from "@headlessui/react";
import { CheckIcon, MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";

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
        href: "",
        featured: true,
        name: "Self-Hosted",
        priceMonthly: "Free",
        description: "Start your next side project or blog, and deploy to your favorite host.",
        features: ["", "Deploy to AWS, Vercel, or Netlify", "Content Management System (CMS)", "Perfectly Optimized for SEO", "Included Starter Theme", "Fully Customizable", "Community & Email Support"],
        action: "Get Started Today"
    },
    {
        id: "managed",
        href: "",
        featured: false,
        name: "Managed",
        priceMonthly: "$1.99",
        description: "Lightening fast hosting on the edge, with next-level publishing features and more.",
        features: ["99.99% Uptime", "High-Performance Edge Network", "Custom Domain Names", "Priority Support"],
        action: "Learn More"
    }
];

let faqs:FAQ[] = [
    {
        question: "Hello",
        answer: "World"
    }
];

export default function Pricing() {
  return(
    <div className="relative isolate px-6 pt-0 py-24 sm:py-32 sm:pt-0 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Level up your creativity with Elegant
            </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Create a place for your business, your interests, or anything else—with the open source platform that powers the web.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
                <div
                key={tier.id}
                className={classNames(
                    tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                    tier.featured
                    ? ''
                    : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                    'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                )}
                >
                <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                    {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                    {tier.id === "managed" && (
                        <span className="text-base text-gray-500">Starting at </span>
                    )}
                    <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                    {tier.id !== "self-hosted" && (
                        <span className="text-base text-gray-500">/month</span>
                    )}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
                    {tier.features.map((feature: string) => (
                    <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                        {feature}
                    </li>
                    ))}
                </ul>
                <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                    tier.featured
                        ? 'bg-indigo-600 text-white shadow hover:bg-indigo-500'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                    'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10'
                    )}
                >
                    {tier.action}
                </a>
                </div>
            ))}
        </div>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.featured ? 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200' : '',
                'p-8'
              )}
            >
              <h3 id={tier.id} className="text-sm font-semibold leading-6 text-gray-900">
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1 text-gray-900">
                <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                <span className="text-sm font-semibold">/month</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Buy plan
              </a>
              {/* <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-900">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name] === 'string' ? (
                                <span className="text-sm leading-6 text-gray-500">({feature.tiers[tier.name]})</span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul> */}
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.featured) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  className="flex w-1/4 px-4"
                  aria-hidden="true"
                  style={{ marginLeft: `${(tiers.findIndex((tier) => tier.featured) + 1) * 25}%` }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-gray-900">{tier.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-gray-900">
                        <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                        <span className="text-sm font-semibold leading-6">/month</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.featured
                            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                          'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        )}
                      >
                        Buy plan
                      </a>
                    </td>
                  ))}
                </tr>
                {/* {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm font-semibold leading-6 text-gray-900'
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal leading-6 text-gray-900">
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm leading-6 text-gray-500">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                ) : (
                                  <MinusIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                    Frequently asked questions
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                        <>
                            <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
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
                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
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
    priceMonthly: string;
    description: string;
    features: string[];
    action: string;
};

interface FAQ {
    question: string;
    answer: string;
};
import { SplashPageLayout } from "@/components/Layouts/SplashPageLayout";
import { RocketLaunchIcon, LockClosedIcon, RectangleStackIcon } from '@heroicons/react/20/solid';
import techSplash from '@/img/splash/hire-us-splash-tech-picture.jpg';

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
    title: "Get your Free Website from Elegant -- What will you create?",
  }
};

export default function Launch() {
  return(
    <>

      <div className="relative max-w-5xl mx-auto pt-5">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Hire the Elegant expertise you need.
        </h1>
        <p className="mt-6 text-2xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Love Elegant, but don't want to launch your own web application? 
        </p>
        <div className="mt-20 pl-2 w-full md:max-w-2xl mx-auto">
          <p className="text-sm md:text-md text-slate-800 max-w-3xl mx-auto dark:text-white">
            Let us build your perfect website.
          </p>
          <p className="mt-2 text-sm md:text-md text-slate-800 max-w-3xl mx-auto dark:text-white">
            Connect with an Elegant expert for free today. 
          </p>
        </div>
        
      </div>
      <div className="overflow-hidden bg-white mt-[80px] pb-16 pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Built by Elegant</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your web application, built by us</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our network of Elegant experts can help you build your next big idea. Elegant is perfect for blogging, landing pages, user documentation, and much more.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src={techSplash.src}
              alt="Hire an expert to build your Elegant framework project."
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </>
  );
}
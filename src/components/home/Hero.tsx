import React from "react";
import ReactLogo from "../Logos/ReactLogo";
import NextJsLogo from "../Logos/NextJsLogo";
import TailwindCSSLogo from "../Logos/TailwindCSSLogo";
import MDXLogo from "../Logos/MDXLogo";

const Hero = () => {
  return (
    <section className="relative mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32 lg:gap-8 lg:grid-cols-12 lg:items-center">
        <p className="relative row-start-1 col-start-6 font-display text-base text-center text-slate-900">
          Elegant is built with
        </p>
        <ul role="list" className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          <li>
            <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <li className="flex mr-6">
                <ReactLogo />
                <span className="mt-1 ml-2">
                  React
                </span>
              </li>
              <li className="flex mr-6">
                <NextJsLogo />
                <span className="mt-1 ml-2">
                  Next.js
                </span>
              </li>
              <li className="flex mr-6">
                <TailwindCSSLogo className="h-7"/>
                <span className="mt-1 ml-2">
                 Tailwind CSS
                </span>
              </li>
              <li className="flex">
                <MDXLogo className="h-7"/>
                <span className="mt-1 ml-2">
                  MDX-JS
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero;
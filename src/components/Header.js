import Link from 'next/link';
import { useRouter } from 'next/router';
import VersionSwitcher from '@/components/core/Headers/VersionSwitcher';
import Router from 'next/router';
import Logo from '@/components/core/Logos/Logo/Logo';
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import ThemeToggle, {ThemeSelect} from '@/components/core/Toggles/ThemeToggle/ThemeToggle';
import useHeaderStore from '@/utils/core/Hooks/useHeaderStore';
import Config from "Config";

/**
 * @deprecated - To be removed by 2.3
 */
export function NavPopover({ display = 'md:hidden', className, ...props }) {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    function handleRouteChange() {
      setIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen])

  return (
    <div className={clsx(className, display)} {...props}>
      <button
        type="button"
        className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Dialog
        as="div"
        className={clsx('fixed z-50 inset-0', display)}
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
          <button
            type="button"
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <ul className="space-y-6">
            <NavItems />
            <li>
              <a
                href={Config('app.repository')}
                className="hover:text-primary-500 dark:hover:text-primary-400"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
            <ThemeSelect />
          </div>
        </div>
      </Dialog>
    </div>
  )
}

/**
 * @deprecated - To be removed by 2.3
 */
export function NavItems() {
  const router = useRouter();
  return <>
    <li>
      <Link
        href="/docs/installation"
        className={
            clsx(
              'hover:text-primary-500 dark:hover:text-primary-400', 
              (router.asPath.indexOf('/docs/') > -1 ? 'text-primary-500 dark:text-primary-400' : '')
            )
      }>
        Docs
      </Link>
    </li>
    <li>
      <Link
        href="/blog"
        className={
            clsx(
              'hover:text-primary-500 dark:hover:text-primary-400', 
              (router.asPath.indexOf('/blog') > -1 ? 'text-primary-500 dark:text-primary-400' : '')
            )
          }>
          Blog
      </Link>
    </li>
    <li>
      <Link
        href="/pricing"
        className={
            clsx(
              'hover:text-primary-500 dark:hover:text-primary-400', 
              (router.asPath.indexOf('/pricing') > -1 ? 'text-primary-500 dark:text-primary-400' : '')
            )
          }>
          Pricing
      </Link>
    </li>
  </>;
}

export function Header({ hasNav = false, navIsOpen, onNavToggle }) {
  let [isOpaque, setIsOpaque] = useState(false);
  const title = useHeaderStore((state) => state.title);
  const section = useHeaderStore((state) => state.section);

  useEffect(() => {
    let offset = 50
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true)
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [isOpaque]);

  return <>
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <picture>
          <source srcSet={require('@/img/beams/docs-light.avif').default.src} type="image/avif" />
          <img
            src={require('@/img/beams/docs-light.png').default.src}
            alt=""
            className="w-[71.75rem] flex-none max-w-none dark:hidden"
            decoding="async"
          />
        </picture>
        <picture>
          <source
            srcSet={require('@/img/beams/docs-dark@30.avif').default.src}
            type="image/avif"
          />
          <img
            src={require('@/img/beams/docs-dark@tinypng.png').default.src}
            alt=""
            className="w-[90rem] flex-none max-w-none hidden dark:block"
            decoding="async"
          />
        </picture>
      </div>
    </div>
    <div
      className={clsx(
        'sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]',
        isOpaque
          ? 'bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'
          : 'bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'
      )}
    >
      <div className="max-w-8xl mx-auto">
        <div
          className={clsx(
            'py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10',
            hasNav ? 'mx-4 lg:mx-0' : 'px-4'
          )}
        >
          <div className="relative flex items-center">
            <Link
              href="/"
              className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              onContextMenu={(e) => {
                e.preventDefault()
                // Router.push('/brand')
            }}>
              <Logo className="w-auto h-7" />
            </Link>
            {/* <VersionSwitcher /> */}
            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  <NavItems />
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <ThemeToggle panelClassName="mt-8" />
                <a
                  href={Config('app.repository')}
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                  target="_blank"
                >
                  <span className="sr-only">{Config('app.name')} on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
            <NavPopover className="ml-auto -my-1" display="lg:hidden" />
          </div>
        </div>
        {hasNav && (
          <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
            <button
              type="button"
              onClick={() => onNavToggle(!navIsOpen)}
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="sr-only">Navigation</span>
              <svg width="24" height="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {title && (
              <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                {section && (
                  <li className="flex items-center">
                    {section}
                    <svg
                      width="3"
                      height="6"
                      aria-hidden="true"
                      className="mx-3 overflow-visible text-slate-400"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </li>
                )}
                <li className="font-semibold text-slate-900 truncate dark:text-slate-200">
                  {title}
                </li>
              </ol>
            )}
          </div>
        )}
      </div>
    </div>
  </>;
}

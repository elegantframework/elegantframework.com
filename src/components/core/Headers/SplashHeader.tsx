import Link from "next/link";
import Logo from "../Logos/Logo/Logo";
import clsx from "clsx";
import ThemeToggle from '@/components/core/Toggles/ThemeToggle/ThemeToggle';
import { NavItems, NavPopover } from '@/components/Header';
import styles from '@/pages/index.module.css';
import GitHubIcon from "../Icons/GitHubIcon/GitHubIcon";

interface Props {
    /**
     * Display the background "Beams" image?
     */
    beams?: boolean;
    /**
     * A url to the Github project.
     * Providing an url will 
     */
    gitHubUrl?: string;
    /**
     * The application name.
     */
    appName: string;
    
};

const SplashHeader = ({
    beams = false,
    gitHubUrl = "",
    appName
}: Props) => {
    return(
        <header className="relative mb-10">
            <div className="px-4 sm:px-6 md:px-8">
                {beams && 
                    <div
                        className={clsx(
                            'absolute inset-0 -bottom-[38rem] md:-bottom-[32rem] bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]',
                            styles.beams
                        )}
                    >
                        <div
                            className="absolute inset-0 bg-[bottom_1px_center] dark:bg-bottom dark:border-b dark:border-slate-100/5"
                            style={{
                                maskImage: 'linear-gradient(to bottom, transparent, black)',
                                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
                            }}
                        />
                    </div>
                }
                <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
                    <Link href="/" passHref>
                        <a>
                            <Logo className="w-auto h-7 cursor-pointer" />
                        </a>
                    </Link>
                    <div className="flex items-center">
                        {/* <NavPopover className="-my-1 ml-2 -mr-1" display="md:hidden" /> */}
                        <div className="hidden md:flex items-center">
                            {/* <nav>
                                <ul className="flex items-center gap-x-8">
                                    <NavItems />
                                </ul>
                            </nav> */}
                            <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                                <ThemeToggle />
                                {gitHubUrl !== "" &&
                                    <a
                                        href={gitHubUrl}
                                        className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                                        target="_blank"
                                    >
                                        <span className="sr-only">
                                            {appName} on GitHub
                                        </span>
                                        <GitHubIcon className="w-5 h-5 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"/>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SplashHeader;
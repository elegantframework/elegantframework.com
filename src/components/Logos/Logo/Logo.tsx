import clsx from "clsx";

interface Props {
    /**
     * CSS class names to be applied to the logo
     */
    className?: string;
    /**
     * The css color classes for the logo.
     */
    color?: string;
};

/**
 * @returns An SVG logo
 */
const Logo = ({
    className="w-auto h-8",
    color="text-slate-900 dark:text-white",
    ...props
}: Props) => {
    return(
        <svg 
            viewBox="0 0 980 185" 
            className={
                clsx(className, color)
            }
            {...props}
            fill="none"
        >
            <g clipPath="url(#clip0_0_2)">
            <path d="M310.938 148.302C299.902 148.302 290.23 146.132 281.922 141.792C273.738 137.328 267.352 131.252 262.764 123.564C258.3 115.876 256.068 107.134 256.068 97.338C256.068 87.418 258.238 78.676 262.578 71.112C267.042 63.424 273.118 57.41 280.806 53.07C288.618 48.73 297.484 46.56 307.404 46.56C317.076 46.56 325.694 48.668 333.258 52.884C340.822 57.1 346.774 63.052 351.114 70.74C355.454 78.428 357.624 87.48 357.624 97.896C357.624 98.888 357.562 100.004 357.438 101.244C357.438 102.484 357.376 103.662 357.252 104.778H274.482V89.34H344.976L335.862 94.176C335.986 88.472 334.808 83.45 332.328 79.11C329.848 74.77 326.438 71.36 322.098 68.88C317.882 66.4 312.984 65.16 307.404 65.16C301.7 65.16 296.678 66.4 292.338 68.88C288.122 71.36 284.774 74.832 282.294 79.296C279.938 83.636 278.76 88.782 278.76 94.734V98.454C278.76 104.406 280.124 109.676 282.852 114.264C285.58 118.852 289.424 122.386 294.384 124.866C299.344 127.346 305.048 128.586 311.496 128.586C317.076 128.586 322.098 127.718 326.562 125.982C331.026 124.246 334.994 121.518 338.466 117.798L350.928 132.12C346.464 137.328 340.822 141.358 334.002 144.21C327.306 146.938 319.618 148.302 310.938 148.302Z" fill="currentColor"/>
            <path d="M379.957 147V8.98799H403.207V147H379.957Z" fill="currentColor"/>
            <path d="M480.409 148.302C469.373 148.302 459.701 146.132 451.393 141.792C443.209 137.328 436.823 131.252 432.235 123.564C427.771 115.876 425.539 107.134 425.539 97.338C425.539 87.418 427.709 78.676 432.049 71.112C436.513 63.424 442.589 57.41 450.277 53.07C458.089 48.73 466.955 46.56 476.875 46.56C486.547 46.56 495.165 48.668 502.729 52.884C510.293 57.1 516.245 63.052 520.585 70.74C524.925 78.428 527.095 87.48 527.095 97.896C527.095 98.888 527.033 100.004 526.909 101.244C526.909 102.484 526.847 103.662 526.723 104.778H443.953V89.34H514.447L505.333 94.176C505.457 88.472 504.279 83.45 501.799 79.11C499.319 74.77 495.909 71.36 491.569 68.88C487.353 66.4 482.455 65.16 476.875 65.16C471.171 65.16 466.149 66.4 461.809 68.88C457.593 71.36 454.245 74.832 451.765 79.296C449.409 83.636 448.231 88.782 448.231 94.734V98.454C448.231 104.406 449.595 109.676 452.323 114.264C455.051 118.852 458.895 122.386 463.855 124.866C468.815 127.346 474.519 128.586 480.967 128.586C486.547 128.586 491.569 127.718 496.033 125.982C500.497 124.246 504.465 121.518 507.937 117.798L520.399 132.12C515.935 137.328 510.293 141.358 503.473 144.21C496.777 146.938 489.089 148.302 480.409 148.302Z" fill="currentColor"/>
            <path d="M594.44 184.386C585.264 184.386 576.274 183.146 567.47 180.666C558.79 178.31 551.66 174.838 546.08 170.25L556.496 152.766C560.836 156.362 566.292 159.214 572.864 161.322C579.56 163.554 586.318 164.67 593.138 164.67C604.05 164.67 612.048 162.128 617.132 157.044C622.216 152.084 624.758 144.582 624.758 134.538V116.868L626.618 94.362L625.874 71.856V47.676H648.008V131.934C648.008 149.914 643.42 163.12 634.244 171.552C625.068 180.108 611.8 184.386 594.44 184.386ZM591.464 142.536C582.04 142.536 573.484 140.552 565.796 136.584C558.232 132.492 552.218 126.85 547.754 119.658C543.414 112.466 541.244 104.034 541.244 94.362C541.244 84.814 543.414 76.444 547.754 69.252C552.218 62.06 558.232 56.48 565.796 52.512C573.484 48.544 582.04 46.56 591.464 46.56C599.896 46.56 607.46 48.234 614.156 51.582C620.852 54.93 626.184 60.138 630.152 67.206C634.244 74.274 636.29 83.326 636.29 94.362C636.29 105.398 634.244 114.512 630.152 121.704C626.184 128.772 620.852 134.042 614.156 137.514C607.46 140.862 599.896 142.536 591.464 142.536ZM594.998 122.82C600.826 122.82 606.034 121.642 610.622 119.286C615.21 116.806 618.744 113.458 621.224 109.242C623.828 104.902 625.13 99.942 625.13 94.362C625.13 88.782 623.828 83.884 621.224 79.668C618.744 75.328 615.21 72.042 610.622 69.81C606.034 67.454 600.826 66.276 594.998 66.276C589.17 66.276 583.9 67.454 579.188 69.81C574.6 72.042 571.004 75.328 568.4 79.668C565.92 83.884 564.68 88.782 564.68 94.362C564.68 99.942 565.92 104.902 568.4 109.242C571.004 113.458 574.6 116.806 579.188 119.286C583.9 121.642 589.17 122.82 594.998 122.82Z" fill="currentColor"/>
            <path d="M739.768 147V126.912L738.466 122.634V87.48C738.466 80.66 736.42 75.39 732.328 71.67C728.236 67.826 722.036 65.904 713.728 65.904C708.148 65.904 702.63 66.772 697.174 68.508C691.842 70.244 687.316 72.662 683.596 75.762L674.482 58.836C679.814 54.744 686.138 51.706 693.454 49.722C700.894 47.614 708.582 46.56 716.518 46.56C730.902 46.56 742 50.032 749.812 56.976C757.748 63.796 761.716 74.398 761.716 88.782V147H739.768ZM708.52 148.302C701.08 148.302 694.57 147.062 688.99 144.582C683.41 141.978 679.07 138.444 675.97 133.98C672.994 129.392 671.506 124.246 671.506 118.542C671.506 112.962 672.808 107.94 675.412 103.476C678.14 99.012 682.542 95.478 688.618 92.874C694.694 90.27 702.754 88.968 712.798 88.968H741.628V104.406H714.472C706.536 104.406 701.204 105.708 698.476 108.312C695.748 110.792 694.384 113.892 694.384 117.612C694.384 121.828 696.058 125.176 699.406 127.656C702.754 130.136 707.404 131.376 713.356 131.376C719.06 131.376 724.144 130.074 728.608 127.47C733.196 124.866 736.482 121.022 738.466 115.938L742.372 129.888C740.14 135.716 736.11 140.242 730.282 143.466C724.578 146.69 717.324 148.302 708.52 148.302Z" fill="currentColor"/>
            <path d="M847.913 46.56C855.849 46.56 862.917 48.11 869.117 51.21C875.441 54.31 880.401 59.084 883.997 65.532C887.593 71.856 889.391 80.04 889.391 90.084V147H866.141V93.06C866.141 84.256 864.033 77.684 859.817 73.344C855.725 69.004 849.959 66.834 842.519 66.834C837.063 66.834 832.227 67.95 828.011 70.182C823.795 72.414 820.509 75.762 818.153 80.226C815.921 84.566 814.805 90.084 814.805 96.78V147H791.555V47.676H813.689V74.46L809.783 66.276C813.255 59.952 818.277 55.116 824.849 51.768C831.545 48.296 839.233 46.56 847.913 46.56Z" fill="currentColor"/>
            <path d="M956.271 148.302C945.359 148.302 936.927 145.512 930.975 139.932C925.023 134.228 922.047 125.858 922.047 114.822V25.728H945.297V114.264C945.297 118.976 946.475 122.634 948.831 125.238C951.311 127.842 954.721 129.144 959.061 129.144C964.269 129.144 968.609 127.78 972.081 125.052L978.591 141.606C975.863 143.838 972.515 145.512 968.547 146.628C964.579 147.744 960.487 148.302 956.271 148.302ZM905.679 67.02V48.42H971.895V67.02H905.679Z" fill="currentColor"/>
            <path d="M310.938 148.302C299.902 148.302 290.23 146.132 281.922 141.792C273.738 137.328 267.352 131.252 262.764 123.564C258.3 115.876 256.068 107.134 256.068 97.338C256.068 87.418 258.238 78.676 262.578 71.112C267.042 63.424 273.118 57.41 280.806 53.07C288.618 48.73 297.484 46.56 307.404 46.56C317.076 46.56 325.694 48.668 333.258 52.884C340.822 57.1 346.774 63.052 351.114 70.74C355.454 78.428 357.624 87.48 357.624 97.896C357.624 98.888 357.562 100.004 357.438 101.244C357.438 102.484 357.376 103.662 357.252 104.778H274.482V89.34H344.976L335.862 94.176C335.986 88.472 334.808 83.45 332.328 79.11C329.848 74.77 326.438 71.36 322.098 68.88C317.882 66.4 312.984 65.16 307.404 65.16C301.7 65.16 296.678 66.4 292.338 68.88C288.122 71.36 284.774 74.832 282.294 79.296C279.938 83.636 278.76 88.782 278.76 94.734V98.454C278.76 104.406 280.124 109.676 282.852 114.264C285.58 118.852 289.424 122.386 294.384 124.866C299.344 127.346 305.048 128.586 311.496 128.586C317.076 128.586 322.098 127.718 326.562 125.982C331.026 124.246 334.994 121.518 338.466 117.798L350.928 132.12C346.464 137.328 340.822 141.358 334.002 144.21C327.306 146.938 319.618 148.302 310.938 148.302Z" stroke="currentColor"/>
            <path d="M379.957 147V8.98799H403.207V147H379.957Z" stroke="currentColor"/>
            <path d="M480.409 148.302C469.373 148.302 459.701 146.132 451.393 141.792C443.209 137.328 436.823 131.252 432.235 123.564C427.771 115.876 425.539 107.134 425.539 97.338C425.539 87.418 427.709 78.676 432.049 71.112C436.513 63.424 442.589 57.41 450.277 53.07C458.089 48.73 466.955 46.56 476.875 46.56C486.547 46.56 495.165 48.668 502.729 52.884C510.293 57.1 516.245 63.052 520.585 70.74C524.925 78.428 527.095 87.48 527.095 97.896C527.095 98.888 527.033 100.004 526.909 101.244C526.909 102.484 526.847 103.662 526.723 104.778H443.953V89.34H514.447L505.333 94.176C505.457 88.472 504.279 83.45 501.799 79.11C499.319 74.77 495.909 71.36 491.569 68.88C487.353 66.4 482.455 65.16 476.875 65.16C471.171 65.16 466.149 66.4 461.809 68.88C457.593 71.36 454.245 74.832 451.765 79.296C449.409 83.636 448.231 88.782 448.231 94.734V98.454C448.231 104.406 449.595 109.676 452.323 114.264C455.051 118.852 458.895 122.386 463.855 124.866C468.815 127.346 474.519 128.586 480.967 128.586C486.547 128.586 491.569 127.718 496.033 125.982C500.497 124.246 504.465 121.518 507.937 117.798L520.399 132.12C515.935 137.328 510.293 141.358 503.473 144.21C496.777 146.938 489.089 148.302 480.409 148.302Z" stroke="currentColor"/>
            <path d="M594.44 184.386C585.264 184.386 576.274 183.146 567.47 180.666C558.79 178.31 551.66 174.838 546.08 170.25L556.496 152.766C560.836 156.362 566.292 159.214 572.864 161.322C579.56 163.554 586.318 164.67 593.138 164.67C604.05 164.67 612.048 162.128 617.132 157.044C622.216 152.084 624.758 144.582 624.758 134.538V116.868L626.618 94.362L625.874 71.856V47.676H648.008V131.934C648.008 149.914 643.42 163.12 634.244 171.552C625.068 180.108 611.8 184.386 594.44 184.386ZM591.464 142.536C582.04 142.536 573.484 140.552 565.796 136.584C558.232 132.492 552.218 126.85 547.754 119.658C543.414 112.466 541.244 104.034 541.244 94.362C541.244 84.814 543.414 76.444 547.754 69.252C552.218 62.06 558.232 56.48 565.796 52.512C573.484 48.544 582.04 46.56 591.464 46.56C599.896 46.56 607.46 48.234 614.156 51.582C620.852 54.93 626.184 60.138 630.152 67.206C634.244 74.274 636.29 83.326 636.29 94.362C636.29 105.398 634.244 114.512 630.152 121.704C626.184 128.772 620.852 134.042 614.156 137.514C607.46 140.862 599.896 142.536 591.464 142.536ZM594.998 122.82C600.826 122.82 606.034 121.642 610.622 119.286C615.21 116.806 618.744 113.458 621.224 109.242C623.828 104.902 625.13 99.942 625.13 94.362C625.13 88.782 623.828 83.884 621.224 79.668C618.744 75.328 615.21 72.042 610.622 69.81C606.034 67.454 600.826 66.276 594.998 66.276C589.17 66.276 583.9 67.454 579.188 69.81C574.6 72.042 571.004 75.328 568.4 79.668C565.92 83.884 564.68 88.782 564.68 94.362C564.68 99.942 565.92 104.902 568.4 109.242C571.004 113.458 574.6 116.806 579.188 119.286C583.9 121.642 589.17 122.82 594.998 122.82Z" stroke="currentColor"/>
            <path d="M739.768 147V126.912L738.466 122.634V87.48C738.466 80.66 736.42 75.39 732.328 71.67C728.236 67.826 722.036 65.904 713.728 65.904C708.148 65.904 702.63 66.772 697.174 68.508C691.842 70.244 687.316 72.662 683.596 75.762L674.482 58.836C679.814 54.744 686.138 51.706 693.454 49.722C700.894 47.614 708.582 46.56 716.518 46.56C730.902 46.56 742 50.032 749.812 56.976C757.748 63.796 761.716 74.398 761.716 88.782V147H739.768ZM708.52 148.302C701.08 148.302 694.57 147.062 688.99 144.582C683.41 141.978 679.07 138.444 675.97 133.98C672.994 129.392 671.506 124.246 671.506 118.542C671.506 112.962 672.808 107.94 675.412 103.476C678.14 99.012 682.542 95.478 688.618 92.874C694.694 90.27 702.754 88.968 712.798 88.968H741.628V104.406H714.472C706.536 104.406 701.204 105.708 698.476 108.312C695.748 110.792 694.384 113.892 694.384 117.612C694.384 121.828 696.058 125.176 699.406 127.656C702.754 130.136 707.404 131.376 713.356 131.376C719.06 131.376 724.144 130.074 728.608 127.47C733.196 124.866 736.482 121.022 738.466 115.938L742.372 129.888C740.14 135.716 736.11 140.242 730.282 143.466C724.578 146.69 717.324 148.302 708.52 148.302Z" stroke="currentColor"/>
            <path d="M847.913 46.56C855.849 46.56 862.917 48.11 869.117 51.21C875.441 54.31 880.401 59.084 883.997 65.532C887.593 71.856 889.391 80.04 889.391 90.084V147H866.141V93.06C866.141 84.256 864.033 77.684 859.817 73.344C855.725 69.004 849.959 66.834 842.519 66.834C837.063 66.834 832.227 67.95 828.011 70.182C823.795 72.414 820.509 75.762 818.153 80.226C815.921 84.566 814.805 90.084 814.805 96.78V147H791.555V47.676H813.689V74.46L809.783 66.276C813.255 59.952 818.277 55.116 824.849 51.768C831.545 48.296 839.233 46.56 847.913 46.56Z" stroke="currentColor"/>
            <path d="M956.271 148.302C945.359 148.302 936.927 145.512 930.975 139.932C925.023 134.228 922.047 125.858 922.047 114.822V25.728H945.297V114.264C945.297 118.976 946.475 122.634 948.831 125.238C951.311 127.842 954.721 129.144 959.061 129.144C964.269 129.144 968.609 127.78 972.081 125.052L978.591 141.606C975.863 143.838 972.515 145.512 968.547 146.628C964.579 147.744 960.487 148.302 956.271 148.302ZM905.679 67.02V48.42H971.895V67.02H905.679Z" stroke="currentColor"/>
            <rect x="1.19144" y="1.1507" width="121.374" height="121.478" rx="6.52236" fill="#818CF8" stroke="#818CF8" strokeWidth="0.815295"/>
            <rect x="62.2861" y="62.2971" width="121.374" height="121.478" rx="6.52236" fill="#818CF8" stroke="#CCD0FF" strokeWidth="0.815295"/>
            </g>
            <defs>
            <clipPath id="clip0_0_2">
            <rect width="980" height="185" fill="currentColor"/>
            </clipPath>
            </defs>
        </svg>
    );
};

export default Logo;
import { NavigationSection } from '@/types/Navigation';

/**
 * The configuration for the documentation sidebar navigation.
 */
export const documentationNav: NavigationSection[] = [
  {
    title: "Prologue",
    links: [
      {
        title: "Release Notes",
        href: "/docs/release-notes"
      },
      {
        title: "Upgrade Guide",
        href: "/docs/upgrade"
      }
    ]
  },
  {
    title: "Getting Started",
    links: [
      {
        title: "Installation",
        href: "/docs/installation"
      },
      {
        title: "Configuration",
        href: "/docs/configuration"
      },
      {
        title: "Deployment",
        href: "/docs/deployment"
      }
    ]
  },
  {
    title: "Features",
    links: [
      {
        title: "Rich Snippets",
        href: "/docs/rich-snippets"
      },
      {
        title: "Robots.txt",
        href: "/docs/robots-txt"
      }
    ]
  },
  {
    title: "Customization",
    links: [{
      title: "Theme",
      href: "/docs/theme"
    }]
  },
  {
    title: "Plugins",
    links: [
      {
        title: "ConvertKit",
        href: "/docs/convertkit"
      },
      {
        title: "Google Analytics",
        href: "/docs/google-analytics"
      }
    ]
  },
  {
    title: "Contributing",
    links: [
      {
        title: "Contribute to Elegant",
        href: "/docs/contribution-guide"
      },
      {
        title: "Development Tools",
        href: "/docs/development-tools"
      },
    ]
  },
  {
    title: "Resources",
    links: [
      {
        title: "Elegant Community",
        href: "/docs/elegant-community"
      }
    ]
  }
];
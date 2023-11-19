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
    title: "Elegant CMS",
    links: [
      {
        title: "Getting Started",
        href: "/docs/getting-started-with-elegant-cms"
      },
      {
        title: "Creating Posts",
        href: "/docs/creating-content"
      },
      {
        title: "Adding Links",
        href: "/docs/add-links-to-text"
      },
      {
        title: "Adding Images",
        href: "/docs/how-to-add-images"
      },
      {
        title: "Adding Headings",
        href: "/docs/adding-headings"
      },
      {
        title: "Styling Text",
        href: "/docs/how-to-style-text"
      },
      {
        title: "Post Visibility",
        href: "/docs/post-visibility"
      },
      {
        title: "Meta Description",
        href: "/docs/content-description"
      },
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
      },
      {
        title: "Sitemaps",
        href: "/docs/sitemaps"
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
      },
      {
        title: "Credits",
        href: "/docs/credits"
      }
    ]
  }
];
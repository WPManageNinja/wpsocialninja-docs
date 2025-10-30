import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WP Social Ninja",
  description: "Complete documentation for WP Social Ninja - Social Feeds, Reviews & Chat Widget",
  base: '/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    outline: [2,3],
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/guide/' },
      { text: 'WordPress.org', link: 'https://wordpress.org/plugins/wp-social-ninja-pro/' }
    ],

    sidebar: [
      {
            "text": "Getting Started",
            "collapsed": true,
            "items": [
                  {
                        "text": "WP Social Ninja Introduction",
                        "link": "/guide/getting-started-with-the-user-interface/getting-started-with-wp-social-ninja"
                  },
                  {
                        "text": "How to Install, Upgrade and Activate License",
                        "link": "/guide/getting-started-with-the-user-interface/how-to-install-upgrade-and-activate-license"
                  },
                  {
                        "text": "Prerequisites of Installation",
                        "link": "/guide/getting-started-with-the-user-interface/prerequisites-of-wp-social-ninja-installation"
                  }
            ]
      },
      {
            "text": "User Interface",
            "collapsed": true,
            "items": [
                  {
                        "text": "Platforms",
                        "link": "/guide/getting-started-with-the-user-interface-2/all-platforms-of-wp-social-ninja"
                  },
                  {
                        "text": "Reviews",
                        "link": "/guide/getting-started-with-the-user-interface-2/all-reviews"
                  },
                  {
                        "text": "Templates",
                        "link": "/guide/getting-started-with-the-user-interface-2/all-templates"
                  },
                  {
                        "text": "User Interface",
                        "link": "/guide/getting-started-with-the-user-interface-2/getting-started-with-the-user-interface-of-wp-social-ninja"
                  },
                  {
                        "text": "Settings",
                        "link": "/guide/getting-started-with-the-user-interface-2/settings-of-wp-social-ninja"
                  },
                  {
                        "text": "What WP Social Ninja Offers",
                        "link": "/guide/getting-started-with-the-user-interface-2/what-wp-social-review-offers"
                  }
            ]
      },
      {
            "text": "Facebook Feed",
            "collapsed": true,
            "items": [
                  {
                        "text": "Facebook Events Access Token",
                        "link": "/guide/facebook-feed/facebook-events-access-token"
                  },
                  {
                        "text": "Connecting A Facebook Page Using Access Token | Social Feed",
                        "link": "/guide/facebook-feed/facebook-feed-access-token"
                  },
                  {
                        "text": "Facebook Feed Date Range",
                        "link": "/guide/facebook-feed/facebook-feed-date-range-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Facebook Feed Configuration",
                        "link": "/guide/facebook-feed/facebook-feed-integration-with-wp-social-ninja"
                  },
                  {
                        "text": "Facebook Feed Layout Settings",
                        "link": "/guide/facebook-feed/facebook-feed-layout-styling-with-wp-social-ninja"
                  },
                  {
                        "text": "Facebook Single Album Feed",
                        "link": "/guide/facebook-feed/facebook-single-album-feed"
                  },
                  {
                        "text": "Facebook Specific Video Playlist Feed",
                        "link": "/guide/facebook-feed/facebook-specific-video-playlist-feed"
                  },
                  {
                        "text": "Facebook Feed Settings",
                        "link": "/guide/facebook-feed/how-to-customize-facebook-feed-with-wp-social-ninja"
                  },
                  {
                        "text": "How to Display Facebook Events Feed with WP Social Ninja",
                        "link": "/guide/facebook-feed/how-to-display-facebook-events"
                  },
                  {
                        "text": "WP Social Ninja",
                        "link": "/guide/facebook-feed/how-to-reauthorize-the-wp-social-ninja-instagram-facebook-app"
                  }
            ]
      },
      {
            "text": "Instagram Feed",
            "collapsed": true,
            "items": [
                  {
                        "text": "Convert Your Instagram Personal Account into Professional/Creator Account",
                        "link": "/guide/instagram-feed/convert-your-instagram-personal-account-into-professional-account"
                  },
                  {
                        "text": "How to convert personal Instagram to business Account",
                        "link": "/guide/instagram-feed/how-to-convert-an-instagram-personal-account-to-a-business-account"
                  },
                  {
                        "text": "Instagram Access Token",
                        "link": "/guide/instagram-feed/instagram-access-token-instagram-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram API Error Message Reference",
                        "link": "/guide/instagram-feed/instagram-api-error-message-reference-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Business Basic",
                        "link": "/guide/instagram-feed/instagram-business-basic-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Configuration",
                        "link": "/guide/instagram-feed/instagram-configuration-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Feed GDPR Compliance",
                        "link": "/guide/instagram-feed/instagram-feed-gdpr-compliance-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Feed Issue Email Report",
                        "link": "/guide/instagram-feed/instagram-feed-issue-email-report-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Feed Layout",
                        "link": "/guide/instagram-feed/instagram-feed-layout-i-social-feeds-i-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Set up",
                        "link": "/guide/instagram-feed/instagram-set-up-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Shoppable Feed",
                        "link": "/guide/instagram-feed/instagram-shoppable-feed"
                  },
                  {
                        "text": "Optimize Images for Instagram",
                        "link": "/guide/instagram-feed/optimize-images-for-instagram-social-feeds-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "Twitter Feed",
            "collapsed": true,
            "items": [
                  {
                        "text": "Twitter App",
                        "link": "/guide/twitter-feed/create-your-twitter-app-wp-social-ninja"
                  },
                  {
                        "text": "Twitter Configuration",
                        "link": "/guide/twitter-feed/twitter-configuration-twitter-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Twitter Feed Layout",
                        "link": "/guide/twitter-feed/twitter-feed-layout-i-twitter-feeds-i-wp-social-ninja"
                  },
                  {
                        "text": "Twitter Feed Settings",
                        "link": "/guide/twitter-feed/twitter-settings-twitter-feeds-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "YouTube Feed",
            "collapsed": true,
            "items": [
                  {
                        "text": "YouTube Configuration",
                        "link": "/guide/youtube-feed/youtube-configuration-youtube-feeds-wp-social-ninja"
                  },
                  {
                        "text": "YouTube Template Layout",
                        "link": "/guide/youtube-feed/youtube-feed-layout-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "YouTube Feed Settings",
                        "link": "/guide/youtube-feed/youtube-feed-settings-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "YouTube Feed Type",
                        "link": "/guide/youtube-feed/youtube-feed-type-social-feeds-wp-social-ninja-2"
                  },
                  {
                        "text": "YouTube Settings",
                        "link": "/guide/youtube-feed/youtube-settings-social-feeds-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "TikTok Feed",
            "collapsed": true,
            "items": [
                  {
                        "text": "TikTok Feed Activation",
                        "link": "/guide/tiktok-feed/tiktok-feed-activation"
                  },
                  {
                        "text": "TikTok Feed Configuration",
                        "link": "/guide/tiktok-feed/tiktok-feed-configuration"
                  },
                  {
                        "text": "TikTok Feed Settings",
                        "link": "/guide/tiktok-feed/tiktok-feed-settings"
                  },
                  {
                        "text": "TikTok Feed Template",
                        "link": "/guide/tiktok-feed/tiktok-feed-template"
                  }
            ]
      },
      {
            "text": "Social Feeds",
            "collapsed": true,
            "items": [
                  {
                        "text": "Social Feeds",
                        "link": "/guide/social-feeds/social-feeds-social-ninja"
                  }
            ]
      },
      {
            "text": "Social Reviews",
            "collapsed": true,
            "items": [
                  {
                        "text": "Airbnb Reviews",
                        "link": "/guide/social-reviews/airbnb-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "AliExpress Reviews",
                        "link": "/guide/social-reviews/aliexpress-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Booking.com Reviews",
                        "link": "/guide/social-reviews/booking-com-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Collect WooCommerce/Custom Reviews with Fluent Forms",
                        "link": "/guide/social-reviews/collect-woocommerce-custom-reviews-with-fluent-forms"
                  },
                  {
                        "text": "Create A Template",
                        "link": "/guide/social-reviews/create-a-template-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Facebook Reviews",
                        "link": "/guide/social-reviews/facebook-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Connecting a Facebook Page Using Access Token",
                        "link": "/guide/social-reviews/facebook-reviews-access-token"
                  },
                  {
                        "text": "How to Add Fluent Forms Reviews with WP Social Ninja",
                        "link": "/guide/social-reviews/fluent-forms-review"
                  },
                  {
                        "text": "Generate QR Code for Reviews",
                        "link": "/guide/social-reviews/generate-qr-code-for-reviews"
                  },
                  {
                        "text": "Google Business Profile Reviews",
                        "link": "/guide/social-reviews/google-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "How to Add Custom Reviews with WP Social Ninja",
                        "link": "/guide/social-reviews/how-to-add-custom-reviews-with-wp-social-ninja"
                  },
                  {
                        "text": "How to Configure Schema Snippet with WP Social Ninja",
                        "link": "/guide/social-reviews/how-to-configure-schema-snippet-with-wp-social-ninja"
                  },
                  {
                        "text": "Layout Settings",
                        "link": "/guide/social-reviews/layout-settings-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Social Reviews",
                        "link": "/guide/social-reviews/social-media-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Template Layouts",
                        "link": "/guide/social-reviews/template-layouts-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Tripadvisor Reviews",
                        "link": "/guide/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Trustpilot Reviews",
                        "link": "/guide/social-reviews/trustpilot-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "WooCommerce Reviews",
                        "link": "/guide/social-reviews/woocommerce-reviews-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Yelp Reviews",
                        "link": "/guide/social-reviews/yelp-configuration-social-reviews-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "Testimonials",
            "collapsed": true,
            "items": [
                  {
                        "text": "How to Add Testimonials with WP Social Ninja",
                        "link": "/guide/testimonials/how-to-add-testimonials-with-wp-social-ninja"
                  },
                  {
                        "text": "How to Collect Testimonials with Fluent Forms",
                        "link": "/guide/testimonials/how-to-collect-testimonials-with-fluent-forms"
                  }
            ]
      },
      {
            "text": "Social Chat",
            "collapsed": true,
            "items": [
                  {
                        "text": "How to Add Custom Button Chat Widget on Your Website",
                        "link": "/guide/social-chat/how-to-add-custom-button-chat-widget-on-your-website"
                  },
                  {
                        "text": "How to change Settings of Social Chat",
                        "link": "/guide/social-chat/settings-social-chat-wp-social-ninja"
                  },
                  {
                        "text": "All-in-One Configuration",
                        "link": "/guide/social-chat/social-chat-widget-configuration-wp-social-ninja"
                  },
                  {
                        "text": "Social Chat",
                        "link": "/guide/social-chat/social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Style",
                        "link": "/guide/social-chat/style-social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Template Layout",
                        "link": "/guide/social-chat/template-layout-social-chat-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "Notification Popup",
            "collapsed": true,
            "items": [
                  {
                        "text": "Notification Popup",
                        "link": "/guide/notification-popup/notification-popup"
                  }
            ]
      },
      {
            "text": "Page Builders",
            "collapsed": true,
            "items": [
                  {
                        "text": "How to Embed WP Social Ninja Template with Beaver Page Builder",
                        "link": "/guide/page-builders/beaver-page-builder"
                  },
                  {
                        "text": "How to Embed WP Social Ninja Template with Elementor Page Builder",
                        "link": "/guide/page-builders/how-to-embed-wp-social-ninja-template-with-elementor-page-builder"
                  },
                  {
                        "text": "How to Embed WP Social Ninja Template with Oxygen Page Builder",
                        "link": "/guide/page-builders/how-to-embed-wp-social-ninja-template-with-oxygen-page-builder"
                  }
            ]
      },
      {
            "text": "Global Settings",
            "collapsed": true,
            "items": [
                  {
                        "text": "Advanced Settings",
                        "link": "/guide/global-settings/advanced-settings-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "How to Sync Reviews Manually",
                        "link": "/guide/global-settings/how-to-sync-reviews-manually"
                  },
                  {
                        "text": "How to use a Shortcode",
                        "link": "/guide/global-settings/how-to-use-a-shortcode-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Manager",
                        "link": "/guide/global-settings/manager-wp-social-ninja"
                  },
                  {
                        "text": "Shoppable by Hashtags",
                        "link": "/guide/global-settings/shoppable-by-hashtags-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Translate Option",
                        "link": "/guide/global-settings/translate-option-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "Design & Styling",
            "collapsed": true,
            "items": [
                  {
                        "text": "Style | Feeds & Reviews",
                        "link": "/guide/design/website-styling-for-feeds-and-reviews"
                  }
            ]
      },
      {
            "text": "Export & Import",
            "collapsed": true,
            "items": [
                  {
                        "text": "How to Export/Import",
                        "link": "/guide/export-import/how-to-export-import-custom-reviews"
                  },
                  {
                        "text": "Migrate from Judge.me",
                        "link": "/guide/export-import/migrate-from-judge-me"
                  }
            ]
      },
      {
            "text": "AI Integration",
            "collapsed": true,
            "items": [
                  {
                        "text": "OpenAI Integration for Review",
                        "link": "/guide/ai-integration/openai-integration-for-review"
                  },
                  {
                        "text": "OpenRouter Integration for Review",
                        "link": "/guide/ai-integration/openrouter-integration-for-review"
                  }
            ]
      },
      {
            "text": "Troubleshooting",
            "collapsed": true,
            "items": [
                  {
                        "text": "Facebook Feeds Not Updating or Missing Posts",
                        "link": "/guide/troubleshooting/facebook-feeds-not-updating-or-missing-posts-social-feeds-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "Troubleshooting",
            "collapsed": true,
            "items": [
                  {
                        "text": "Fixing \u201cAccess Token Decryption Failed\u201d in",
                        "link": "/guide/troubleshooting-2/fixing-access-token-decryption-failed-in-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "Change Log",
            "collapsed": true,
            "items": [
                  {
                        "text": "Change Log",
                        "link": "/guide/change-log/change-log"
                  }
            ]
      }
],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WPManageNinja/wp-social-ninja' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 WP Social Ninja'
    }
  }
})

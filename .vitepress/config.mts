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
            "text": "🚀 Getting Started",
            "collapsed": false,
            "items": [
                  {
                        "text": "Introduction",
                        "link": "/guide/01-getting-started/getting-started-with-wp-social-ninja"
                  },
                  {
                        "text": "Prerequisites",
                        "link": "/guide/01-getting-started/prerequisites-of-wp-social-ninja-installation"
                  },
                  {
                        "text": "Installation & License",
                        "link": "/guide/01-getting-started/how-to-install-upgrade-and-activate-license"
                  },
                  {
                        "text": "Platform Overview",
                        "link": "/guide/01-getting-started/all-platforms-of-wp-social-ninja"
                  },
                  {
                        "text": "Features Overview",
                        "link": "/guide/01-getting-started/what-wp-social-review-offers"
                  },
                  {
                        "text": "User Interface Guide",
                        "link": "/guide/01-getting-started/getting-started-with-the-user-interface-of-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "📱 Social Feeds",
            "collapsed": true,
            "items": [
                  {
                        "text": "Social Feeds Overview",
                        "link": "/guide/02-social-feeds/social-feeds-social-ninja"
                  },
                  {
                        "text": "Facebook Feed Setup",
                        "link": "/guide/02-social-feeds/facebook-feed-integration-with-wp-social-ninja"
                  },
                  {
                        "text": "Facebook Access Token",
                        "link": "/guide/02-social-feeds/facebook-feed-access-token"
                  },
                  {
                        "text": "Facebook Events Token",
                        "link": "/guide/02-social-feeds/facebook-events-access-token"
                  },
                  {
                        "text": "Facebook Feed Settings",
                        "link": "/guide/02-social-feeds/how-to-customize-facebook-feed-with-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Configuration",
                        "link": "/guide/02-social-feeds/instagram-configuration-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Access Token",
                        "link": "/guide/02-social-feeds/instagram-access-token-instagram-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Instagram Business Setup",
                        "link": "/guide/02-social-feeds/instagram-business-basic-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Twitter Configuration",
                        "link": "/guide/02-social-feeds/twitter-configuration-twitter-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Twitter App Setup",
                        "link": "/guide/02-social-feeds/create-your-twitter-app-wp-social-ninja"
                  },
                  {
                        "text": "YouTube Configuration",
                        "link": "/guide/02-social-feeds/youtube-configuration-youtube-feeds-wp-social-ninja"
                  },
                  {
                        "text": "YouTube Settings",
                        "link": "/guide/02-social-feeds/youtube-settings-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "TikTok Configuration",
                        "link": "/guide/02-social-feeds/tiktok-feed-configuration"
                  },
                  {
                        "text": "TikTok Settings",
                        "link": "/guide/02-social-feeds/tiktok-feed-settings"
                  }
            ]
      },
      {
            "text": "⭐ Social Reviews",
            "collapsed": true,
            "items": [
                  {
                        "text": "Social Reviews Overview",
                        "link": "/guide/03-social-reviews/social-media-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Google Reviews",
                        "link": "/guide/03-social-reviews/google-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Facebook Reviews",
                        "link": "/guide/03-social-reviews/facebook-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Yelp Reviews",
                        "link": "/guide/03-social-reviews/yelp-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Trustpilot Reviews",
                        "link": "/guide/03-social-reviews/trustpilot-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Airbnb Reviews",
                        "link": "/guide/03-social-reviews/airbnb-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Booking.com Reviews",
                        "link": "/guide/03-social-reviews/booking-com-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "TripAdvisor Reviews",
                        "link": "/guide/03-social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "AliExpress Reviews",
                        "link": "/guide/03-social-reviews/aliexpress-configuration-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "WooCommerce Reviews",
                        "link": "/guide/03-social-reviews/woocommerce-reviews-social-reviews-wp-social-ninja"
                  },
                  {
                        "text": "Custom Reviews",
                        "link": "/guide/03-social-reviews/how-to-add-custom-reviews-with-wp-social-ninja"
                  },
                  {
                        "text": "OpenAI Integration",
                        "link": "/guide/03-social-reviews/openai-integration-for-review"
                  },
                  {
                        "text": "OpenRouter Integration",
                        "link": "/guide/03-social-reviews/openrouter-integration-for-review"
                  },
                  {
                        "text": "Schema Configuration",
                        "link": "/guide/03-social-reviews/how-to-configure-schema-snippet-with-wp-social-ninja"
                  },
                  {
                        "text": "QR Code Generation",
                        "link": "/guide/03-social-reviews/generate-qr-code-for-reviews"
                  }
            ]
      },
      {
            "text": "💬 Social Chat",
            "collapsed": true,
            "items": [
                  {
                        "text": "Social Chat Overview",
                        "link": "/guide/04-social-chat/social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Chat Widget Configuration",
                        "link": "/guide/04-social-chat/social-chat-widget-configuration-wp-social-ninja"
                  },
                  {
                        "text": "Chat Settings",
                        "link": "/guide/04-social-chat/settings-social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Chat Styling",
                        "link": "/guide/04-social-chat/style-social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Template Layouts",
                        "link": "/guide/04-social-chat/template-layout-social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Custom Button Widget",
                        "link": "/guide/04-social-chat/how-to-add-custom-button-chat-widget-on-your-website"
                  }
            ]
      },
      {
            "text": "🚀 Advanced Features",
            "collapsed": true,
            "items": [
                  {
                        "text": "Testimonials",
                        "link": "/guide/05-advanced-features/how-to-add-testimonials-with-wp-social-ninja"
                  },
                  {
                        "text": "Fluent Forms Testimonials",
                        "link": "/guide/05-advanced-features/how-to-collect-testimonials-with-fluent-forms"
                  },
                  {
                        "text": "Notification Popups",
                        "link": "/guide/05-advanced-features/notification-popup"
                  }
            ]
      },
      {
            "text": "🔌 Integrations",
            "collapsed": true,
            "items": [
                  {
                        "text": "Elementor Page Builder",
                        "link": "/guide/06-integrations/how-to-embed-wp-social-ninja-template-with-elementor-page-builder"
                  },
                  {
                        "text": "Oxygen Page Builder",
                        "link": "/guide/06-integrations/how-to-embed-wp-social-ninja-template-with-oxygen-page-builder"
                  },
                  {
                        "text": "Beaver Builder",
                        "link": "/guide/06-integrations/beaver-page-builder"
                  },
                  {
                        "text": "Shortcode Usage",
                        "link": "/guide/06-integrations/how-to-use-a-shortcode-social-reviews-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "🎨 Customization & Design",
            "collapsed": true,
            "items": [
                  {
                        "text": "Website Styling",
                        "link": "/guide/07-customization-design/website-styling-for-feeds-and-reviews"
                  },
                  {
                        "text": "Template Management",
                        "link": "/guide/07-customization-design/all-templates"
                  }
            ]
      },
      {
            "text": "⚙️ Management & Settings",
            "collapsed": true,
            "items": [
                  {
                        "text": "Advanced Settings",
                        "link": "/guide/08-management-settings/advanced-settings-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "General Settings",
                        "link": "/guide/08-management-settings/settings-of-wp-social-ninja"
                  },
                  {
                        "text": "Reviews Management",
                        "link": "/guide/08-management-settings/all-reviews"
                  },
                  {
                        "text": "Manager Dashboard",
                        "link": "/guide/08-management-settings/manager-wp-social-ninja"
                  },
                  {
                        "text": "Manual Sync",
                        "link": "/guide/08-management-settings/how-to-sync-reviews-manually"
                  },
                  {
                        "text": "Translation Options",
                        "link": "/guide/08-management-settings/translate-option-wp-social-ninja"
                  },
                  {
                        "text": "Shoppable Hashtags",
                        "link": "/guide/08-management-settings/shoppable-by-hashtags-social-feeds-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "📦 Import/Export & Migration",
            "collapsed": true,
            "items": [
                  {
                        "text": "Export/Import Guide",
                        "link": "/guide/09-import-export-migration/how-to-export-import-custom-reviews"
                  },
                  {
                        "text": "Judge.me Migration",
                        "link": "/guide/09-import-export-migration/migrate-from-judge-me"
                  }
            ]
      },
      {
            "text": "🆘 Troubleshooting & Support",
            "collapsed": true,
            "items": [
                  {
                        "text": "Common Issues",
                        "link": "/guide/10-troubleshooting-support/facebook-feeds-not-updating-or-missing-posts-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Change Log",
                        "link": "/guide/10-troubleshooting-support/change-log"
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

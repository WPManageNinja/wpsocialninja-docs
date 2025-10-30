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
    ],

    sidebar: [
      {
            "text": "🚀 Getting Started",
            "collapsed": false,
            "items": [
                  {
                        "text": "Introduction",
                        "link": "/guide/getting-started/getting-started-with-wp-social-ninja"
                  },
                  {
                        "text": "📋 Setup & Installation",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "Prerequisites",
                                    "link": "/guide/getting-started/prerequisites-of-wp-social-ninja-installation"
                              },
                              {
                                    "text": "Installation & License",
                                    "link": "/guide/getting-started/how-to-install-upgrade-and-activate-license"
                              }
                        ]
                  },
                  {
                        "text": "📖 Overview & Interface",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "Platform Overview",
                                    "link": "/guide/getting-started/all-platforms-of-wp-social-ninja"
                              },
                              {
                                    "text": "Features Overview",
                                    "link": "/guide/getting-started/what-wp-social-review-offers"
                              },
                              {
                                    "text": "User Interface Guide",
                                    "link": "/guide/getting-started/getting-started-with-the-user-interface-of-wp-social-ninja"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "📱 Social Feeds",
            "collapsed": true,
            "items": [
                  {
                        "text": "Overview",
                        "link": "/guide/social-feeds/social-feeds-social-ninja"
                  },
                  {
                        "text": "📘 Facebook Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Setup & Integration",
                                    "link": "/guide/social-feeds/facebook-feed-integration-with-wp-social-ninja"
                              },
                              {
                                    "text": "Access Token",
                                    "link": "/guide/social-feeds/facebook-feed-access-token"
                              },
                              {
                                    "text": "Events Token",
                                    "link": "/guide/social-feeds/facebook-events-access-token"
                              },
                              {
                                    "text": "Feed Customization",
                                    "link": "/guide/social-feeds/how-to-customize-facebook-feed-with-wp-social-ninja"
                              },
                              {
                                    "text": "Layout & Styling",
                                    "link": "/guide/social-feeds/facebook-feed-layout-styling-with-wp-social-ninja"
                              },
                              {
                                    "text": "Date Range Settings",
                                    "link": "/guide/social-feeds/facebook-feed-date-range-social-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Single Album Feed",
                                    "link": "/guide/social-feeds/facebook-single-album-feed"
                              },
                              {
                                    "text": "Video Playlist Feed",
                                    "link": "/guide/social-feeds/facebook-specific-video-playlist-feed"
                              },
                              {
                                    "text": "Display Events",
                                    "link": "/guide/social-feeds/how-to-display-facebook-events"
                              },
                              {
                                    "text": "Reauthorize App",
                                    "link": "/guide/social-feeds/how-to-reauthorize-the-wp-social-ninja-instagram-facebook-app"
                              }
                        ]
                  },
                  {
                        "text": "📸 Instagram Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Configuration",
                                    "link": "/guide/social-feeds/instagram-configuration-social-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Access Token",
                                    "link": "/guide/social-feeds/instagram-access-token-instagram-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Business Setup",
                                    "link": "/guide/social-feeds/instagram-business-basic-social-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Setup Guide",
                                    "link": "/guide/social-feeds/instagram-set-up-social-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Feed Layout",
                                    "link": "/guide/social-feeds/instagram-feed-layout-i-social-feeds-i-wp-social-ninja"
                              },
                              {
                                    "text": "Account Conversion",
                                    "link": "/guide/social-feeds/how-to-convert-an-instagram-personal-account-to-a-business-account"
                              },
                              {
                                    "text": "Professional Account",
                                    "link": "/guide/social-feeds/convert-your-instagram-personal-account-into-professional-account"
                              },
                              {
                                    "text": "Shoppable Feed",
                                    "link": "/guide/social-feeds/instagram-shoppable-feed"
                              },
                              {
                                    "text": "GDPR Compliance",
                                    "link": "/guide/social-feeds/instagram-feed-gdpr-compliance-social-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Issue Reporting",
                                    "link": "/guide/social-feeds/instagram-feed-issue-email-report-social-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Image Optimization",
                                    "link": "/guide/social-feeds/optimize-images-for-instagram-social-feeds-wp-social-ninja"
                              }
                        ]
                  },
                  {
                        "text": "🐦 Twitter Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Configuration",
                                    "link": "/guide/social-feeds/twitter-configuration-twitter-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Create Twitter App",
                                    "link": "/guide/social-feeds/create-your-twitter-app-wp-social-ninja"
                              },
                              {
                                    "text": "Feed Layout",
                                    "link": "/guide/social-feeds/twitter-feed-layout-i-twitter-feeds-i-wp-social-ninja"
                              },
                              {
                                    "text": "Settings",
                                    "link": "/guide/social-feeds/twitter-settings-twitter-feeds-wp-social-ninja"
                              }
                        ]
                  },
                  {
                        "text": "🎥 YouTube Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Configuration",
                                    "link": "/guide/social-feeds/youtube-configuration-youtube-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Settings",
                                    "link": "/guide/social-feeds/youtube-settings-social-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Feed Layout",
                                    "link": "/guide/social-feeds/youtube-feed-layout-social-feeds-wp-social-ninja"
                              },
                              {
                                    "text": "Feed Types",
                                    "link": "/guide/social-feeds/youtube-feed-type-social-feeds-wp-social-ninja-2"
                              },
                              {
                                    "text": "Feed Settings",
                                    "link": "/guide/social-feeds/youtube-feed-settings-social-feeds-wp-social-ninja"
                              }
                        ]
                  },
                  {
                        "text": "🎵 TikTok Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Configuration",
                                    "link": "/guide/social-feeds/tiktok-feed-configuration"
                              },
                              {
                                    "text": "Activation",
                                    "link": "/guide/social-feeds/tiktok-feed-activation"
                              },
                              {
                                    "text": "Settings",
                                    "link": "/guide/social-feeds/tiktok-feed-settings"
                              },
                              {
                                    "text": "Template",
                                    "link": "/guide/social-feeds/tiktok-feed-template"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "⭐ Social Reviews",
            "collapsed": true,
            "items": [
                  {
                        "text": "Overview",
                        "link": "/guide/social-reviews/social-media-reviews-wp-social-ninja"
                  },
                  {
                        "text": "🌍 Review Platforms",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Google Reviews",
                                    "link": "/guide/social-reviews/google-configuration-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Facebook Reviews",
                                    "link": "/guide/social-reviews/facebook-configuration-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Facebook Access Token",
                                    "link": "/guide/social-reviews/facebook-reviews-access-token"
                              },
                              {
                                    "text": "Yelp Reviews",
                                    "link": "/guide/social-reviews/yelp-configuration-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Trustpilot Reviews",
                                    "link": "/guide/social-reviews/trustpilot-configuration-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Airbnb Reviews",
                                    "link": "/guide/social-reviews/airbnb-configuration-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Booking.com Reviews",
                                    "link": "/guide/social-reviews/booking-com-configuration-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "TripAdvisor Reviews",
                                    "link": "/guide/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "AliExpress Reviews",
                                    "link": "/guide/social-reviews/aliexpress-configuration-social-reviews-wp-social-ninja"
                              }
                        ]
                  },
                  {
                        "text": "🛍️ E-commerce Integration",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "WooCommerce Reviews",
                                    "link": "/guide/social-reviews/woocommerce-reviews-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Custom WooCommerce with Fluent Forms",
                                    "link": "/guide/social-reviews/collect-woocommerce-custom-reviews-with-fluent-forms"
                              },
                              {
                                    "text": "Fluent Forms Integration",
                                    "link": "/guide/social-reviews/fluent-forms-review"
                              }
                        ]
                  },
                  {
                        "text": "🤖 AI Integration",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "OpenAI Integration",
                                    "link": "/guide/social-reviews/openai-integration-for-review"
                              },
                              {
                                    "text": "OpenRouter Integration",
                                    "link": "/guide/social-reviews/openrouter-integration-for-review"
                              }
                        ]
                  },
                  {
                        "text": "⚙️ Template & Display",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Create Templates",
                                    "link": "/guide/social-reviews/create-a-template-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Template Layouts",
                                    "link": "/guide/social-reviews/template-layouts-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Layout Settings",
                                    "link": "/guide/social-reviews/layout-settings-social-reviews-wp-social-ninja"
                              },
                              {
                                    "text": "Custom Reviews",
                                    "link": "/guide/social-reviews/how-to-add-custom-reviews-with-wp-social-ninja"
                              }
                        ]
                  },
                  {
                        "text": "🔧 Advanced Features",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Schema Configuration",
                                    "link": "/guide/social-reviews/how-to-configure-schema-snippet-with-wp-social-ninja"
                              },
                              {
                                    "text": "QR Code Generation",
                                    "link": "/guide/social-reviews/generate-qr-code-for-reviews"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "💬 Social Chat",
            "collapsed": true,
            "items": [
                  {
                        "text": "Social Chat Overview",
                        "link": "/guide/social-chat/social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Chat Widget Configuration",
                        "link": "/guide/social-chat/social-chat-widget-configuration-wp-social-ninja"
                  },
                  {
                        "text": "Chat Settings",
                        "link": "/guide/social-chat/settings-social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Chat Styling",
                        "link": "/guide/social-chat/style-social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Template Layouts",
                        "link": "/guide/social-chat/template-layout-social-chat-wp-social-ninja"
                  },
                  {
                        "text": "Custom Button Widget",
                        "link": "/guide/social-chat/how-to-add-custom-button-chat-widget-on-your-website"
                  }
            ]
      },
      {
            "text": "🚀 Advanced Features",
            "collapsed": true,
            "items": [
                  {
                        "text": "Testimonials",
                        "link": "/guide/advanced-features/how-to-add-testimonials-with-wp-social-ninja"
                  },
                  {
                        "text": "Fluent Forms Testimonials",
                        "link": "/guide/advanced-features/how-to-collect-testimonials-with-fluent-forms"
                  },
                  {
                        "text": "Notification Popups",
                        "link": "/guide/advanced-features/notification-popup"
                  }
            ]
      },
      {
            "text": "🔌 Integrations",
            "collapsed": true,
            "items": [
                  {
                        "text": "Elementor Page Builder",
                        "link": "/guide/integrations/how-to-embed-wp-social-ninja-template-with-elementor-page-builder"
                  },
                  {
                        "text": "Oxygen Page Builder",
                        "link": "/guide/integrations/how-to-embed-wp-social-ninja-template-with-oxygen-page-builder"
                  },
                  {
                        "text": "Beaver Builder",
                        "link": "/guide/integrations/beaver-page-builder"
                  },
                  {
                        "text": "Shortcode Usage",
                        "link": "/guide/integrations/how-to-use-a-shortcode-social-reviews-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "🎨 Customization & Design",
            "collapsed": true,
            "items": [
                  {
                        "text": "Website Styling",
                        "link": "/guide/customization-design/website-styling-for-feeds-and-reviews"
                  },
                  {
                        "text": "Template Management",
                        "link": "/guide/customization-design/all-templates"
                  }
            ]
      },
      {
            "text": "⚙️ Management & Settings",
            "collapsed": true,
            "items": [
                  {
                        "text": "Advanced Settings",
                        "link": "/guide/management-settings/advanced-settings-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "General Settings",
                        "link": "/guide/management-settings/settings-of-wp-social-ninja"
                  },
                  {
                        "text": "Reviews Management",
                        "link": "/guide/management-settings/all-reviews"
                  },
                  {
                        "text": "Manager Dashboard",
                        "link": "/guide/management-settings/manager-wp-social-ninja"
                  },
                  {
                        "text": "Manual Sync",
                        "link": "/guide/management-settings/how-to-sync-reviews-manually"
                  },
                  {
                        "text": "Translation Options",
                        "link": "/guide/management-settings/translate-option-wp-social-ninja"
                  },
                  {
                        "text": "Shoppable Hashtags",
                        "link": "/guide/management-settings/shoppable-by-hashtags-social-feeds-wp-social-ninja"
                  }
            ]
      },
      {
            "text": "📦 Import/Export & Migration",
            "collapsed": true,
            "items": [
                  {
                        "text": "Export/Import Guide",
                        "link": "/guide/import-export-migration/how-to-export-import-custom-reviews"
                  },
                  {
                        "text": "Judge.me Migration",
                        "link": "/guide/import-export-migration/migrate-from-judge-me"
                  }
            ]
      },
      {
            "text": "🆘 Troubleshooting & Support",
            "collapsed": true,
            "items": [
                  {
                        "text": "Common Issues",
                        "link": "/guide/troubleshooting-support/facebook-feeds-not-updating-or-missing-posts-social-feeds-wp-social-ninja"
                  },
                  {
                        "text": "Change Log",
                        "link": "/guide/troubleshooting-support/change-log"
                  }
            ]
      }
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

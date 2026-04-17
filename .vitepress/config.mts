import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WP Social Ninja",
  description: "Complete documentation for WP Social Ninja - Social Feeds, Reviews & Chat Widget",
  base: '/',
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'alternate icon', href: '/favicon.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.svg' }]
  ],

  markdown: {
    config: (md) => {
      const defaultRender = md.renderer.rules?.link_open ?? ((tokens, idx, options, env, self) =>
        self.renderToken(tokens, idx, options))
      md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.attrIndex('target') < 0) {
          token.attrSet('target', '_blank')
          token.attrSet('rel', 'noopener noreferrer')
        }
        return defaultRender(tokens, idx, options, env, self)
      }
    }
  },

  themeConfig: {
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.png'
    },
    outline: [2,3],
    
    nav: [
      { text: 'User Docs', link: '/guide/getting-started/getting-started-with-wp-social-ninja' },
      { text: 'Changelog', link: '/guide/troubleshooting-support/change-log' },
      { text: 'Website', link: 'https://wpsocialninja.com' },
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
                        "text": "Wp Social Ninja Glossary",
                        "link": "/guide/getting-started/wp-social-ninja-glossary"
                  },
                  {
                        "text": "📋 Setup & Installation",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "Installation & License",
                                    "link": "/guide/getting-started/install-upgrade-activate-license"
                              },
                              {
                                    "text": "Onboarding Setup Wizard",
                                    "link": "/guide/getting-started/onboarding-setup-wizard"
                              }
                        ]
                  },
                  {
                        "text": "📖 Overview & Interface",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "User Interface Guide",
                                    "link": "/guide/getting-started/getting-started-with-the-user-interface-of-wp-social-ninja"
                              },
                              {
                                    "text": "Platform Overview",
                                    "link": "/guide/getting-started/all-platforms-of-wp-social-ninja"
                              },
                              {
                                    "text": "Templates Overview",
                                    "link": "/guide/getting-started/templates-overview"
                              },
                              {
                                    "text": "Reviews Overview",
                                    "link": "/guide/getting-started/reviews"
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
                        "link": "/guide/social-feeds/"
                  },
                  {
                        "text": "📘 Facebook Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Setup & Integration",
                                    "link": "/guide/social-feeds/facebook-integration"
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
                                    "link": "/guide/social-feeds/facebook-customization"
                              },
                              {
                                    "text": "Layout & Styling",
                                    "link": "/guide/social-feeds/facebook-layout-styling"
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
                                    "link": "/guide/social-feeds/display-facebook-events"
                              },
                              {
                                    "text": "Reauthorize App",
                                    "link": "/guide/social-feeds/reauthorize-instagram-facebook"
                              },
                              {
                                    "text": "Facebook Feed Settings",
                                    "link": "/guide/social-feeds/facebook-feed-settings"
                              }
                        ]
                  },
                  {
                        "text": "📸 Instagram Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Configuration",
                                    "link": "/guide/social-feeds/instagram-configuration"
                              },
                              {
                                    "text": "Business Setup",
                                    "link": "/guide/social-feeds/instagram-business-basic"
                              },
                              {
                                    "text": "Feed Template",
                                    "link": "/guide/social-feeds/instagram-setup"
                              },
                              {
                                    "text": "Template Styling & Connection",
                                    "link": "/guide/social-feeds/instagram-feed-template-styling-connection"
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
                                    "link": "/guide/social-feeds/instagram-gdpr-compliance"
                              },
                              {
                                    "text": "Issue Reporting",
                                    "link": "/guide/social-feeds/instagram-email-report"
                              },
                              {
                                    "text": "Instagram Feed Settings",
                                    "link": "/guide/social-feeds/instagram-feed-settings"
                              }
                        ]
                  },
                  {
                        "text": "🐦 Twitter Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Configuration",
                                    "link": "/guide/social-feeds/twitter-configuration"
                              },
                              {
                                    "text": "Template Styling & Connection",
                                    "link": "/guide/social-feeds/twitter-feed-template-styling-connection"
                              },
                              {
                                    "text": "Template Settings",
                                    "link": "/guide/social-feeds/twitter-template-settings"
                              },
                              {
                                    "text": "Feed Settings",
                                    "link": "/guide/social-feeds/twitter-feed-settings"
                              }
                        ]
                  },
                  {
                        "text": "🎥 YouTube Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Configuration",
                                    "link": "/guide/social-feeds/youtube-configuration"
                              },
                              {
                                    "text": "Youtube Feed Template",
                                    "link": "/guide/social-feeds/youtube-feed-template-general-settings"
                              },
                              {
                                    "text": "Youtube Feed Connection and Style",
                                    "link": "/guide/social-feeds/style-&-connection-settings"
                              },
                              {
                                    "text": "Feed Types",
                                    "link": "/guide/social-feeds/youtube-feed-types"
                              },
                              {
                                    "text": "Feed Settings",
                                    "link": "/guide/social-feeds/youtube-settings"
                              }
                        ]
                  },
                  {
                        "text": "🎵 TikTok Feeds",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Activation",
                                    "link": "/guide/social-feeds/tiktok-feed-activation"
                              },
                              {
                                    "text": "Configuration",
                                    "link": "/guide/social-feeds/tiktok-feed-configuration"
                              },
                              {
                                    "text": "Template",
                                    "link": "/guide/social-feeds/tiktok-feed-template"
                              },
                              {
                                    "text": "Settings",
                                    "link": "/guide/social-feeds/tiktok-feed-settings"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "⭐ Business Reviews",
            "collapsed": true,
            "items": [
                  {
                        "text": "Overview",
                        "link": "/guide/business-reviews/"
                  },
                  {
                        "text": "Global Review Settings",
                        "link": "/guide/business-reviews/global-review-settings"
                  },
                  {
                        "text": "🌍 Review Platforms",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Google Reviews",
                                    "link": "/guide/business-reviews/google-configuration"
                              },
                              {
                                    "text": "Facebook Reviews",
                                    "link": "/guide/business-reviews/facebook-configuration"
                              },
                              {
                                    "text": "Facebook Access Token",
                                    "link": "/guide/business-reviews/facebook-reviews-access-token"
                              },
                              {
                                    "text": "Yelp Reviews",
                                    "link": "/guide/business-reviews/yelp-configuration"
                              },
                              {
                                    "text": "Trustpilot Reviews",
                                    "link": "/guide/business-reviews/trustpilot-configuration"
                              },
                              {
                                    "text": "Airbnb Reviews",
                                    "link": "/guide/business-reviews/airbnb-configuration"
                              },
                              {
                                    "text": "Booking.com Reviews",
                                    "link": "/guide/business-reviews/booking-com-configuration"
                              },
                              {
                                    "text": "TripAdvisor Reviews",
                                    "link": "/guide/business-reviews/tripadvisor-configuration"
                              },
                              {
                                    "text": "AliExpress Reviews",
                                    "link": "/guide/business-reviews/aliexpress-configuration"
                              }
                        ]
                  },
                  {
                        "text": "🛍️ E-commerce Reviews",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "FluentCart Product Review",
                                    "link": "/guide/business-reviews/fluentcart-product-review"
                              },
                              {
                                    "text": "WooCommerce Reviews",
                                    "link": "/guide/business-reviews/woocommerce-reviews"
                              },
                              {
                                    "text": "Native Review Forms",
                                    "link": "/guide/business-reviews/native-review-forms"
                              },
                              {
                                    "text": "Custom WooCommerce with Fluent Forms",
                                    "link": "/guide/business-reviews/collect-woocommerce-custom-reviews-with-fluent-forms"
                              },
                              {
                                    "text": "Fluent Forms Integration",
                                    "link": "/guide/business-reviews/fluent-forms-review"
                              }
                        ]
                  },
                  {
                        "text": "⚙️ Template & Display",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Create Templates",
                                    "link": "/guide/business-reviews/create-template"
                              },
                              {
                                    "text": "Template Styling & Connection",
                                    "link": "/guide/business-reviews/template-style-connection"
                              }
                        ]
                  },
                  {
                        "text": "🔧 Advanced Features",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Schema Configuration",
                                    "link": "/guide/business-reviews/configure-schema"
                              },
                              {
                                    "text": "QR Code Generation",
                                    "link": "/guide/business-reviews/generate-qr-code-for-reviews"
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
                        "link": "/guide/social-chat/"
                  },
                  {
                        "text": "Chat Widget Configuration",
                        "link": "/guide/social-chat/chat-widget-configuration"
                  },
                  {
                        "text": "Chat Settings",
                        "link": "/guide/social-chat/chat-settings"
                  },
                  {
                        "text": "Chat Styling",
                        "link": "/guide/social-chat/chat-styling"
                  },
                  {
                        "text": "Custom Button Widget",
                        "link": "/guide/social-chat/add-custom-button-chat-widget"
                  }
            ]
      },
      {
            "text": "🚀 Advanced Features",
            "collapsed": true,
            "items": [
                  {
                        "text": "Testimonials",
                        "link": "/guide/advanced-features/add-testimonials"
                  },
                  {
                        "text": "Fluent Forms Testimonials",
                        "link": "/guide/advanced-features/collect-testimonials-fluent-forms"
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
                        "text": "Integrations Overview",
                        "link": "/guide/integrations/integrations-overview"
                  },
                  {
                        "text": "Elementor Page Builder",
                        "link": "/guide/integrations/elementor-integration"
                  },
                  {
                        "text": "Oxygen Page Builder",
                        "link": "/guide/integrations/oxygen-integration"
                  },
                  {
                        "text": "Beaver Builder",
                        "link": "/guide/integrations/beaver-page-builder"
                  },
                  {
                        "text": "Shortcode Usage",
                        "link": "/guide/integrations/shortcode-usage"
                  },
                  {
                        "text": "🤖 AI Integration",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "OpenAI Integration",
                                    "link": "/guide/ai-integration/openai-integration-for-review"
                              },
                              {
                                    "text": "OpenRouter Integration",
                                    "link": "/guide/ai-integration/openrouter-integration-for-review"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "🎨 Custom Sources",
            "collapsed": true,
            "items": [
                  {
                        "text": "Custom Sources Overview",
                        "link": "/guide/custom-source/custom-source-overview"
                  },
                  {
                        "text": "Manually Add or Import Custom Reviews",
                        "link": "/guide/custom-source/manually-add-or-import-custom-reviews"
                  },
                  {
                        "text": "Export Your Old Custom Reviews",
                        "link": "/guide/custom-source/export-your-old-custom-reviews"
                  },
                  {
                        "text": "How to Collect Reviews with a Fluent Forms Custom Source",
                        "link": "/guide/custom-source/fluent-forms-custom-source"
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
                  }
            ]
      },
      {
            "text": "⚙️ Management & Settings",
            "collapsed": true,
            "items": [
                  {
                        "text": "Advanced Settings",
                        "link": "/guide/management-settings/advanced-settings"
                  },
                  {
                        "text": "Manager Dashboard",
                        "link": "/guide/management-settings/manager"
                  },
                  {
                        "text": "Translation Options",
                        "link": "/guide/management-settings/translation"
                  },
                  {
                        "text": "Configure Cloudflare Turnstile",
                        "link": "/guide/management-settings/configure-cloudflare-turnstile"
                  }
            ]
      },
      {
            "text": "📦 Import/Export & Migration",
            "collapsed": true,
            "items": [
                  {
                        "text": "Export/Import Guide",
                        "link": "/guide/import-export-migration/export-import-custom-reviews"
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
                        "text": "Facebook Feed Error",
                        "link": "/guide/troubleshooting-support/facebook-feeds-not-updating"
                  },
                  {
                        "text": "Fixing Access Token Decryption Failed",
                        "link": "/guide/troubleshooting-support/fixing-access-token-decryption"
                  },
                  {
                        "text": "How to Get Support",
                        "link": "/guide/troubleshooting-support/get-support"
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
      copyright: 'Copyright © 2026 WP Social Ninja'
    }
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vitepress']
          }
        }
      }
    }
  }
})

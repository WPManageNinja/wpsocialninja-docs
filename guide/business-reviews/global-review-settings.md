---
title: "Global Review Settings"
description: "Configure global settings for all social reviews including image optimization, publishing modes, moderation rules, and AI review summarizer integration in WP Social Ninja."
---

# Global Review Settings

The **Global Review Settings** panel allows you to manage the core performance and moderation rules for all your social reviews at once. These settings ensure that your website stays fast and that you have full control over how new feedback is displayed to your visitors.

## Accessing Global Review Settings

To find these configuration options, navigate to your WordPress dashboard and go to **WP Social Ninja → Settings**. From the left sidebar, click on **Reviews Platforms** and then select **Global Review Settings**.

## Reviews Image Optimization

This section is dedicated to improving your website's performance by managing how review images are handled.

- **Optimize Images**: Enabling this toggle allows the plugin to generate and store optimized versions of review images in multiple sizes using your local WordPress storage. This significantly improves loading speeds for your review templates.

- **Reset Local Images**: Clicking the **Reset Image Storage** button will clear all locally stored images for the Reviews platform. Use this if your images are not appearing correctly or if you wish to refresh your local storage.

![Access Global Review Settings](/guide/public/images/social-reviews/global-review-settings/access-global-review-settings.webp)

## Review Publishing Settings

Control how and when new reviews go live on your website with the **Review Publishing Mode**. There are three distinct modes available:

- **Publish Automatically**: New reviews are fetched and displayed immediately without any manual intervention.

- **Require Approval**: All incoming reviews are sent to the moderation panel first, where you must manually approve them before they appear on your site.

- **Auto Publish with Filters**: This advanced mode allows you to set specific Conditional Publishing Rules to automate your moderation process.

>[!Note]
>The Auto Publish with Filters feature is available in the Pro version.

### Conditional Publishing Rules

When using the filtered publishing mode, you can define the following criteria:

- **Minimum Rating Required**: Automatically publish reviews only if they meet a specific star rating (e.g., at least 3 stars).

- **Blocked/Spam Words**: Enter specific keywords (separated by commas) that will trigger spam detection. Any review containing these words will be sent to moderation automatically.

- **Minimum Review Length**: Set a character limit. Shorter, low-effort reviews will be held for moderation rather than being published instantly.

![Review Publishing Settings](/guide/public/images/social-reviews/global-review-settings/review-publishing-settings-2.webp)

## AI Review Summarizer API Settings

WP Social Ninja integrates with AI platforms to provide summarized versions of your reviews.

- **Enable AI Review Summarizer**: Toggle this option to activate AI-powered review summaries.

- **AI Platform & Model**: Select your preferred AI provider (e.g., OpenAI) and the specific model (e.g., gpt-4o) you wish to use.

- **API Key**: Enter the unique API key provided by your selected AI platform to securely connect the service.

After setting up all the configurations to your preference, click on the **"Save Settings"** button located at the top right corner to apply the changes.

![AI Review Settings](/guide/public/images/social-reviews/global-review-settings/ai-review-settings-3.webp)

## FluentCRM Review Tagging

If you use FluentCRM, WP Social Ninja can automatically tag a customer's contact the moment their WooCommerce or FluentCart product review is approved. This makes it easy to branch a FluentCRM automation on that tag — for example, sending a thank-you coupon to reviewers or a follow-up reminder to everyone else.

>[!Note]
>This section only appears when the FluentCRM plugin is installed and active on your site, and it's available on the Pro version of WP Social Ninja.

- **Enable Review Tagging**: Turn this on to have approved reviews automatically tag the matching FluentCRM contact.
- **Tag Name**: Choose the FluentCRM tag to apply. Reference this exact tag name in your FluentCRM automation's condition to trigger your workflow.

Once you've made your changes, click **Save Settings** to apply them.

![FluentCRM Review Tagging Settings](/guide/public/images/social-reviews/global-review-settings/fluentcrm-review-tagging.webp)
<!-- TODO: Capture screenshot for this step and save at /guide/public/images/social-reviews/global-review-settings/fluentcrm-review-tagging.webp -->

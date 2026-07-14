---
title: "FluentCRM Review Tagging"
description: "Automatically tag a customer's FluentCRM contact when their WooCommerce or FluentCart product review is approved, so you can trigger review-based follow-up automations in FluentCRM."
---

# FluentCRM Review Tagging

What if every approved product review could kick off your next marketing move — automatically? With WP Social Ninja's **FluentCRM Review Tagging**, it can.

When a customer's **WooCommerce** or **FluentCart** product review is approved, WP Social Ninja automatically tags their **FluentCRM** contact. That tag becomes the trigger for your FluentCRM automations — thank a reviewer with a coupon, nudge everyone who hasn't reviewed yet, or segment your happiest customers for a loyalty campaign.

> [!NOTE]
> FluentCRM Review Tagging is a **Pro** feature. To use it, you'll need **WP Social Ninja Pro**, the **FluentCRM** plugin, and either **WooCommerce** or **FluentCart** active on your site.

## How It Works

The flow is simple and completely automatic once set up:

1. A customer submits a product review on your WooCommerce or FluentCart store.
2. The review gets **approved** (either automatically or by you in the moderation panel).
3. WP Social Ninja finds or creates that customer's **FluentCRM contact** using their email address and applies your chosen **tag**.
4. Any FluentCRM automation watching for that tag springs into action.

## Enable Review Tagging

**First,** make sure **FluentCRM** is installed and active — the settings only appear when it is.

**Then,** from your WordPress dashboard, go to **WP Social Ninja → Settings**. In the left sidebar, click **Reviews Platforms**, then select **Global Review Settings**.

**Next,** find the **FluentCRM Review Tagging** card and turn on the **Enable Review Tagging** toggle.

![The FluentCRM Review Tagging card with the Enable Review Tagging toggle and Tag Name dropdown](/guide/public/images/integrations/fluentcrm-review-tagging/fluentcrm-review-tagging.webp)

**Then,** choose a **Tag Name** from the dropdown. The list pulls in your existing FluentCRM tags, so there's no risk of a typo. It defaults to `review_submitted`, but you can pick any tag you like.

**Finally,** click **Save Settings**. From now on, every approved WooCommerce or FluentCart review will tag the matching contact automatically.

> [!TIP]
> Make a note of the exact tag name you choose — you'll reference it inside your FluentCRM automation in the next step.

## Put the Tag to Work in FluentCRM

The tag is the missing piece that connects your reviews to your marketing. Here's a classic "ask for a review, then reward it" funnel you can build in FluentCRM:

1. After an order is completed, send an email asking the customer to leave a review.
2. Wait a few days, then **check whether the contact has your review tag** (for example, `review_submitted`).
3. **If they do** — send a thank-you email with a discount coupon to reward them.
4. **If they don't** — send a gentle reminder to leave a review.

WP Social Ninja handles the review side; FluentCRM handles the rest. New to building automations? FluentCRM's [documentation](https://docs.fluentcrm.com/) walks you through creating a funnel step by step.

## Where to Go Next

- Fine-tune when reviews are approved in [Global Review Settings](../business-reviews/global-review-settings).
- Set up your store reviews with [WooCommerce Reviews](../business-reviews/woocommerce-reviews) or [FluentCart Product Review](../business-reviews/fluentcart-product-review).

With FluentCRM Review Tagging in place, your reviews do double duty — building trust on your site and powering smarter follow-ups behind the scenes.

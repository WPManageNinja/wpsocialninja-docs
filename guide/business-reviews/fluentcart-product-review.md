---
title: FluentCart Product Review
description: "Connect FluentCart with WP Social Ninja to collect, moderate, and display product reviews with custom templates and interactive review behavior."
---

# FluentCart Product Review

WP Social Ninja serves as the primary review hub for FluentCart, providing a seamless way to collect, manage, and display professional product reviews. This integration replaces the standard review system with a feature-rich experience that includes detailed moderation, custom styling, and an interactive review drawer.

## Quick Setup: One-Click Review Hub (Pro)

Setting up FluentCart reviews used to take four separate steps — and it was easy to miss one. Now, a single click does it all.

**Previously**, to make WP Social Ninja your FluentCart review hub, you had to:

1. Create a review form
2. Build a display template
3. Connect the template's **Write a Review** button to that form
4. Turn on **Main Review Hub**

**Now**, the **Set Up Review Hub** button handles every one of those steps for you.

## Connecting FluentCart to WP Social Ninja

To use WP Social Ninja as the main review source for FluentCart, you first need to connect the two platforms.

Navigate to **WP Social Ninja → Platforms** from your WordPress dashboard. Locate **FluentCart** under the **Business Reviews** section and click on the **Settings** icon.

![Fluentcart](/guide/public/images/business-reviews/fluentcart/fluentcart-settings-1.webp)

Alternatively, go to **WP Social Ninja → Settings → Reviews Platforms → Fluent Cart Settings** and click the **Configure Connection** button.

![Configure Connection](/guide/public/images/business-reviews/fluentcart/configure-connection-2.webp)

In the **Fluent Cart Configuration** pop-up, use the search bar to find and select the specific products you want to fetch reviews for, also if you want to connect all of your FluentCart product simply click on the **Connect all Product** here. Click **Save** to confirm your selection.

![Select Product](/guide/public/images/business-reviews/fluentcart/select-product-3.webp)

**Then,** in the **Make WP Social Ninja your FluentCart review hub** card, click the **Set Up Review Hub** button.

That's it. In one click, WP Social Ninja will:

- Create a [Native Review Form](./native-review-forms) automatically
- Build a matching display [template](./create-template) with the **Write a Review** button already connected to that form
- Turn on **Make WP Social Ninja Your Main Review Hub**

There's nothing else to configure — your store is ready to collect and display reviews right away.

> [!NOTE]
> **Prefer full control?** Choose **Start from a blank template → Add New Template** instead. This creates an empty template only, leaving you to create the review form, connect the **Write a Review** button, and turn on **Main Review Hub** yourself (the manual steps are covered below). Quick Setup is a **Pro** feature.

![The FluentCart Configuration pop-up showing the Set Up Review Hub button](/guide/public/images/business-reviews/fluentcart/fluentcart-quick-setup.webp)

## Customizing the FluentCart Reviews Layout

After establishing the connection, you can fine-tune how reviews appear on your storefront to match your site's branding and user experience.

To access these options, navigate to **WP Social Ninja → Settings → Reviews Platforms → Fluent Cart Settings**.

### Core Layout Options

- **Hide Rating Count from Product Listings:** Toggle this switch to remove the numeric review count text next to star ratings on your product listing pages.
- **Make WP Social Ninja Your Main Review Hub:** Enabling this ensures that WP Social Ninja acts as the primary interface for managing and displaying all product reviews.
- **Review Template:** Use the dropdown menu to select the specific template you want to use for displaying your FluentCart reviews.

### Interactive Click Behavior

This setting lets you control what happens when a customer clicks on the star rating on a single product page. Instead of a fixed action, you can choose how you want users to interact with your reviews, helping create a smoother and more engaging experience.

- **Scroll to review widget:** When a user clicks the star rating, the page will automatically scroll down to the review section. This helps users quickly find and read existing reviews without manually searching.
- **Open review drawer:** When clicked, a slide-in panel (drawer) will open on the screen, showing the full review layout. This provides a modern and interactive way for users to view and explore reviews without leaving the current page.

### Review Drawer Styling

If you select the drawer behavior, you can choose between two visual styles:

- **Modern:** A sleek, wide-panel layout that supports outside-click-to-close behavior.
- **Default:** A standard slide-in panel style.

![Fluentcart Settings](/guide/public/images/business-reviews/fluentcart/fluentcart-settings-5.webp)

## Product-Level Integration Settings

You can manage the WP Social Ninja integration directly from within the FluentCart product editor.

Go to **FluentCart Pro → Products** and select a product to edit. Navigate to the **Integrations** tab for that product. Click the **Add Integration** dropdown and select **WP Social Ninja**.

![Add Integration](/guide/public/images/business-reviews/fluentcart/add-integration-6.webp)

Configure the integration by providing a **Title**, selecting your desired WP Social Ninja **Template**, and choosing if the feed should run on specific variations. Toggle the **Enable this Integration** switch and click **Create WP Social Ninja Feed**.

>[!Note]
>When selecting a **Native Template** for your review collection, ensure that the **Review Target** is specifically set to FluentCart. For a deeper understanding of custom source templates, please refer to the detailed [documentation](/guide/custom-source/custom-source-overview). 

![Create WP Social Ninja Feed](/guide/public/images/business-reviews/fluentcart/create-wpsocialninja-feed-7.webp)

::: tip Per-Product Override Indicator (Pro)
A product-level integration configured here in FluentCart takes precedence over your global review settings for that product. So you always know when this is happening, WP Social Ninja shows an **override badge** next to that product in the connected-products list, along with a direct link to the product's FluentCart **Integrations** screen — making it easy to review or resolve the conflicting setting.
:::

## Managing FluentCart Integrations

Once you have added an integration for a specific product, you can manage it directly from the **Product Integrations** list within the FluentCart dashboard.

- **Status Toggle:** Quickly enable or disable the WP Social Ninja integration feed for that specific product.
- **Edit (Pencil Icon):** Click the edit icon to re-open the configuration settings and modify the template selection or change the integration title.
- **Delete (Trash Icon):** Permanently remove the WP Social Ninja integration from that specific product.

![Managing FluentCart](/guide/public/images/business-reviews/fluentcart/edit-or-delete-8.webp)

Once your WP Social Ninja template is connected to FluentCart, the review display is designed to build trust by showing detailed customer feedback directly on the product page.

![FluentCart Review](/guide/public/images/business-reviews/fluentcart/fluentcart-review-9.webp)
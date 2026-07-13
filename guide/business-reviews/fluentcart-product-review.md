---
title: FluentCart Product Review
description: "Connect FluentCart with WP Social Ninja to collect, moderate, and display product reviews with custom templates and interactive review behavior."
---

# FluentCart Product Review

WP Social Ninja serves as the primary review hub for FluentCart, providing a seamless way to collect, manage, and display professional product reviews. This integration replaces the standard review system with a feature-rich experience that includes detailed moderation, custom styling, and an interactive review drawer.

## Connecting FluentCart to WP Social Ninja

To use WP Social Ninja as the main review source for FluentCart, you first need to connect the two platforms.

Navigate to **WP Social Ninja → Platforms** from your WordPress dashboard. Locate **FluentCart** under the **Business Reviews** section and click on the **Settings** icon.

![Fluentcart](/guide/public/images/business-reviews/fluentcart/fluentcart-settings-1.webp)

Alternatively, go to **WP Social Ninja → Settings → Reviews Platforms → Fluent Cart Settings** and click the **Configure Connection** button.

![Configure Connection](/guide/public/images/business-reviews/fluentcart/configure-connection-2.webp)

In the **Fluent Cart Configuration** pop-up, use the search bar to find and select the specific products you want to fetch reviews for. Click **Save** to confirm your selection.

![Select Product](/guide/public/images/business-reviews/fluentcart/select-product-3.webp)

Once products are added, you can click **Add New Template** directly from the configuration pop-up to start designing your review layout.

![Add New Template](/guide/public/images/business-reviews/fluentcart/add-new-template-4.webp)

::: tip Set Up Review Hub in one click (Pro)
Instead of connecting products and building a template separately, click **Set Up Review Hub** to have WP Social Ninja create a review form, build a display template, and turn on **Main Review Hub** for you automatically.
:::

![Set Up Review Hub quick setup button](/guide/public/images/business-reviews/fluentcart/fluentcart-quick-setup.webp)
<!-- TODO: Capture screenshot for this step and save at /guide/public/images/business-reviews/fluentcart/fluentcart-quick-setup.webp -->

::: info Overridden in FluentCart notice
If a connected product also has its own WP Social Ninja integration configured directly from the FluentCart product editor (see [Product-Level Integration Settings](#product-level-integration-settings) below), you'll see an **Overridden in FluentCart** notice next to it in the products list — that product-side integration takes priority. Click **Review** on the notice to open it.
:::

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

## Managing FluentCart Integrations

Once you have added an integration for a specific product, you can manage it directly from the **Product Integrations** list within the FluentCart dashboard.

- **Status Toggle:** Quickly enable or disable the WP Social Ninja integration feed for that specific product.
- **Edit (Pencil Icon):** Click the edit icon to re-open the configuration settings and modify the template selection or change the integration title.
- **Delete (Trash Icon):** Permanently remove the WP Social Ninja integration from that specific product.

![Managing FluentCart](/guide/public/images/business-reviews/fluentcart/edit-or-delete-8.webp)

Once your WP Social Ninja template is connected to FluentCart, the review display is designed to build trust by showing detailed customer feedback directly on the product page.

![FluentCart Review](/guide/public/images/business-reviews/fluentcart/fluentcart-review-9.webp)
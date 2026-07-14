---
title: "WooCommerce Reviews"
description: ""
---

# WooCommerce Reviews

WP Social Ninja simplifies the process of displaying WooCommerce product reviews on your website. You have to follow some easy steps to do this.


## Connecting WooCommerce Reviews

Go to your WP Social Ninja plugin's [Platforms](../getting-started/all-platforms-of-wp-social-ninja) section, enable the **WooCommerce** module, and click the **Settings** icon in the right corner.

![Enabling the WooCommerce module and opening its settings](/guide/public/images/business-reviews/woocommerce-reviews-social-reviews-wp-social-ninja/woocommerce-review-1.webp)

::: info
Make sure the WooCommerce plugin is installed on your site and that you have at least one product with a review.
:::

The **WooCommerce Configuration** pop-up opens. This is your one screen for connecting products and choosing how their reviews are displayed.

### Connect Your Products

Click the **Add More Product** button and choose the product (or products) whose reviews you want to display. Then click **Save** to confirm your selection.

> [!TIP]
> Already have plenty of reviews in WooCommerce? Click **Sync All Reviews** at the top of the pop-up to bulk-import every existing product review at once. When it finishes, the confirmation tells you exactly how many *new* reviews were imported.

### Choose How Reviews Are Displayed

Once your products are connected, decide how WP Social Ninja should display their reviews. You have two options.

#### Option A: Quick Setup — One-Click Review Hub (Pro)

Setting up a review hub used to take four separate steps — and it was easy to miss one. Now, a single click does it all.

**Previously**, to make WP Social Ninja your WooCommerce review hub, you had to:

1. Create a review form
2. Build a display template
3. Connect the template's **Write a Review** button to that form
4. Turn on **Main Review Hub**

**Now**, in the **Make WP Social Ninja your WooCommerce review hub** card, just click the **Set Up Review Hub** button. In one click, WP Social Ninja will:

- Create a [Native Review Form](./native-review-forms) automatically
- Build a matching display [template](./create-template) with the **Write a Review** button already connected to that form
- Turn on **Make WP Social Ninja Your Main Review Hub**

There's nothing else to configure — your store is ready to collect and display reviews right away.

#### Option B: Start from a Blank Template

Prefer full control over each step? Under **Start from a blank template**, click **Add New Template**. This creates an empty template only, so you'll manually create the review form, connect the **Write a Review** button, and turn on **Main Review Hub** yourself. It takes you to the [template editor](./create-template), where you can design the layout and style for your reviews.

![Selecting a WooCommerce product to fetch reviews for](/guide/public/images/business-reviews/woocommerce-reviews-social-reviews-wp-social-ninja/woocommerce-review-3.webp)

## **Global WooCommerce Review Settings**

Manage performance and layout rules across your entire store from **WP Social Ninja → Settings → Reviews Platform → WooCommerce Settings**. These apply to all products connected to a WooCommerce Review Template.

::: tip **Note**: These review settings will only apply to products that are connected with a WooCommerce Review Template in WP Social Ninja. If a product is not included in a template, these settings won’t take effect.

:::

### Synchronization

 * **Auto Syncing**: Enable this to automatically fetch new reviews submitted through WooCommerce. Use the dropdown menu to set how often the plugin should check for new reviews (e.g., 1 day).
 * **Sync Product Reviews**: This button allows you to manually sync all your WooCommerce product reviews at any time. Clicking it will immediately fetch any new reviews from your products and add them to WP Social Ninja. This is useful if you have just received new reviews and don't want to wait for the next scheduled auto-sync.

### Customize WooCommerce Reviews Layout

 * **Make WP Social Ninja Your Main Review Hub**: When enabled, WP Social Ninja takes control of your review display, replacing the standard WooCommerce review style with your selected WP Social Ninja template.
 * **Hide the Review Total**: Enable this option to hide the summary text that shows the total number of reviews (e.g., "Based on 15 Reviews").
 * **Hide Review Headline**: Enable this to hide the main heading (e.g., "Reviews") from the top of the reviews section on your product pages.
 * **Display Location**: This dropdown lets you choose where the review template will appear.
    - **Display Inside Reviews Tab**: Places reviews inside the default WooCommerce "Reviews" tab.
    - **Display Outside Tabs**: Places reviews outside of the tabbed content area.
 * **Reviews Form Style**: Select which form visitors will use to submit reviews.
    - **Inherit from WP Social Ninja**: Uses the custom form you have styled globally.
    - **Default Woocommerce Form**: Uses the standard, unstyled WooCommerce form.
 * **Review Template**: Choose the default [review template](./create-template) that will be applied to all WooCommerce products across your site. This serves as the primary template for your entire store.

### Interactive Click Behavior & Drawer Styling

 * **Star Rating Click Behavior:** Define what happens when a user clicks the star rating on a single product page:
   - **Scroll to review widget:** Smoothly scrolls the user down to the reviews section.
   - **Open review drawer:** Launches an interactive slide-in panel displaying the reviews.
 * **Drawer Style:** If you use the drawer behavior, select between a **Modern** wide-panel layout or the **Default** slide-in style.
 
After configuring these options, always click the **Save Settings** button to apply your changes.

![wp social ninja woocommerce settings](/guide/public/images/business-reviews/woocommerce-reviews-social-reviews-wp-social-ninja/woocommerce-review-4.webp)

## Enabling Template from WooCommerce product

To customize your product reviews in WooCommerce, go to the specific product you want to edit. Click on **Edit** then go to the **Product Data** section and select **WP Social Ninja**.

These settings on the WooCommerce product page let you control how reviews are displayed for this specific item.

 * **Select a Template**: Choose a WP Social Ninja [template](./create-template) to control the visual style and layout of the reviews on this product page.
 * **Hide reviews total?**: Enable this checkbox to hide the total number of reviews from being displayed.
 * **Hide reviews headline?**: Enable this checkbox to hide the "Reviews" heading above the review section.
 * **Template placement**: Select where the review template will appear. The default is typically within the WooCommerce "Reviews" tab.
 * **Reviews Form**: Choose which review submission form to use. You can select the form from your global WP Social Ninja settings, use the default WooCommerce form, or use [Native Review Form](/guide/business-reviews/native-review-forms).

![social ninja review settings in woocommerce products](/guide/public/images/business-reviews/woocommerce-reviews-social-reviews-wp-social-ninja/woocommerce-review-5.webp)

::: tip Per-Product Override Indicator (Pro)
When a product has its **own** template selected here, that choice takes precedence over your global **Main Review Hub** template. To help you spot this, WP Social Ninja shows a **"Has Product-Level Override"** badge next to that product in the connected-products list. The badge includes a direct link to the product's **Product Data → WP Social Ninja** tab, so you can review or resolve the conflicting setting in one click.
:::

## Reviews Notification Popup

You can also set a pop-up notification of WooCommerce product reviews on your site. The pop-up review notification will show up on your font end site like this.

Go to your Notification pop-settings from WP Social Ninja Dashboard and select [Notification Popups](../advanced-features/notification-popup) then select the **WooCommerce** platform from the **General** tab platform option.

![Notification Popup](/guide/public/images/business-reviews/woocommerce-reviews-social-reviews-wp-social-ninja/woocommerce-review-6.webp)

By following these steps, you can integrate WooCommerce product reviews into your website using WP Social Ninja, enhancing your user experience and showcasing valuable customer feedback.

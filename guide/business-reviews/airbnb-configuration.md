---
title: "Airbnb Reviews"
description: ""
---

# Airbnb Reviews

This guide provides step-by-step instructions for connecting your Airbnb reviews with WP Social Ninja. Because Airbnb does not offer an official public API for reviews, this process requires a manual workaround to find the necessary connection keys directly from your Airbnb listing page.

## **Connect Your Airbnb for Reviews**

This guide will show you how to connect your Airbnb reviews to WP Social Ninja.

#### **Why is this Manual Process Needed?**

Unlike other platforms, Airbnb does not offer a public API that allows plugins like WP Social Ninja to easily fetch reviews. The standard connection method may not work reliably.

To solve this, we will use a manual workaround with two parts: finding a unique **API Key** and **Secret Key** to fetch your **reviews**, and copying a full request URL to fetch your listing's **name and star rating** ("Business Info"). By adding these to your WordPress site, you give WP Social Ninja the credentials it needs to securely and successfully fetch your data.

::: tip
Only the **API Key** and **Room Reviews Secret Key** are required to display reviews and the review count. The **Business Info** step is recommended — skip it and your reviews will still show, just without the listing's name and star rating.
:::

**Disclaimer**: This method uses Airbnb's internal development tools. Because it is not an official public solution, Airbnb may change these values in the future, which could cause the connection to break. If this happens, you will need to repeat this process to get fresh values.

### **Step 1: Find Your API Key and Secret Key**

In this step, we will use your browser's developer tools to find the required keys from your Airbnb listing page.

- **Open Your Airbnb Listing**
  - Using a desktop browser (like Chrome or Firefox), navigate to the Airbnb listing page (**Room** or **Experience**) that you want to get reviews from.

- **Open Developer Tools**
  - Right-click anywhere on the page and select **Inspect** from the menu. This will open the Developer Tools panel.
  - In the Developer Tools panel, click on the **Network** tab.

- The term you search for in the Network tab's **Filter** box depends on the type of listing and information you need. Use the appropriate term from the list below:

- **For Room Reviews:** Search for **StaysPdpReviewsQuery**.

- **For a Room's Business Info**: Search for **StaysPdpSections**.

- **For Experience/Service Reviews**: Search for **ReviewsModalContentQuery**.

>[!Note]
>To find `ReviewsModalContentQuery`, you must click on the **Show all reviews** button on the Airbnb page; only then will this request appear in the list.

![airbnb review](/guide/public/images/business-reviews/airbnb-configuration-social-reviews-wp-social-ninja/show-all-review.webp)

After typing the correct term, refresh the page and click on the request that appears in the list to open its details.

::: tip

The **Room Reviews** secret key (from `StaysPdpReviewsQuery`) is required for reviews and the review count to work. The **Business Info** request (`StaysPdpSections`, below) is recommended in addition, so your listing's name and star rating display correctly — this matters most if you're adding several listings, since without it they can appear unlabeled.

:::

### **For Room Reviews** (Required)

- In the **Filter** box at the top of the Network tab, type StaysPdpReviewsQuery and press Enter.

- Refresh your Airbnb listing page. You should see a file with the name StaysPdpReviewsQuery appear in the network requests list.

- Click on the StaysPdpReviewsQuery file name to open its details.

**Copy the Required Keys**

You will need to find and copy three pieces of information from this file:

- **The API Key:**
  - In the details panel, click on the **Headers** tab.
  - Scroll down until you find the **x-airbnb-api-key**.
  - Copy the long string of characters next to it. This is your API Key.

![airbnb api 1](/guide/public/images/business-reviews/airbnb-configuration-social-reviews-wp-social-ninja/reviewsquery-1.webp)

**The Secret Key:**
  - Now, click on the **Payload** tab (it might also be called "Request").
  - Navigate through extensions → persistedQuery.
  - You will see a **sha256Hash**. Copy the long string of characters next to it. This is your Secret Key.

![airbnb api 2](/guide/public/images/business-reviews/airbnb-configuration-social-reviews-wp-social-ninja/reviewsquery-2.webp)

### Find the Business Info Payload (Recommended)

Unlike the Reviews keys above, for Business Info you don't need to open the request and dig for one specific field — you'll copy the **entire request URL** instead. Copying the whole request guarantees everything in it always matches, which is what makes this method reliable.

- In the **Filter** box at the top of the Network tab, type **StaysPdpSections** and press Enter.

- Refresh your Airbnb listing page. You should see a request named **StaysPdpSections** appear in the network requests list.

::: warning NEEDS SCREENSHOT
- **What to capture:** The Network tab with `StaysPdpSections` typed in the **Filter** box and the matching request visible in the list below it.
- **Where from:** Browser DevTools → **Network** tab, on an Airbnb room listing page, right after filtering and reloading.
- **Suggested filename:** `business-info-request-list.webp`
:::

- **Right-click** on the **StaysPdpSections** request in the list (no need to open it).

- From the context menu, hover over **Copy**, then click **Copy URL**.

::: warning NEEDS SCREENSHOT
- **What to capture:** The right-click context menu open on the `StaysPdpSections` request row, with **Copy → Copy URL** visible/highlighted.
- **Where from:** Same Network tab — right-click directly on the `StaysPdpSections` row itself (not inside its details panel).
- **Suggested filename:** `business-info-copy-url.webp`
:::

That copied URL is your Business Info payload — you'll paste the whole thing in Step 2.

::: tip
Because the payload is copied as one complete request, it never gets out of sync — and the same payload works for **every listing** on your site. You only need to capture it once.
:::

### **Step 2: Add the Keys to Your WordPress Site**

To make these keys work, you need to add a small code snippet to your WordPress site. The safest and easiest way to do this is by using a **Code Snippets** plugin. We recommend [FluentSnippets](https://fluentsnippets.com/).

#### **Create a New Snippet**

Go to **FluentSnippets → Add New Snippet**.

- Give your snippet a title, like "Airbnb API Keys for WP Social Ninja".

- **Paste the Code**

Copy the code block below and paste it into the "Code" area of your new snippet.

**Add Your Values**

- Replace `paste_the_key_here` in the first two filters with the **API Key** and **Room Reviews Secret Key** you copied in Step 1.

- Replace `paste_the_copied_url_here` in the Business Info filter with the **full URL** you copied in the Business Info step above.

- If you're also fetching Experience/Service reviews, replace the last filter's `paste_the_key_here` with that Secret Key too.

```php
add_filter('wpsocialreviews/airbnb_api_key', function(){
    return 'paste_the_key_here';
});

// for room reviews
add_filter('wpsocialreviews/airbnb_rooms_api_secret_key', function(){
    return 'paste_the_key_here';
});

// for room business info (name & star rating) — paste the whole copied URL
add_filter('wpsocialreviews/airbnb_rooms_business_info_payload', function(){
    return 'paste_the_copied_url_here';
});

// for experiences or services
add_filter('wpsocialreviews/airbnb_experiences_api_secret_key', function(){
    return 'paste_the_key_here';
});
```

::: tip **Important: Two Values Are Required, One Is Recommended**

To fetch reviews (and the review count), you **must** provide:

- **The Main API Key:** This is the master key for the connection.

- **The Room Reviews Key:** This key fetches the customer reviews.

Additionally **recommended**:

- **The Business Info Payload:** Without this, reviews still display, but the listing's name and star rating won't — this matters most if you're adding several listings, since they can otherwise look identical.

:::

Click the **Save Snippets and Activate** button at the top of the page.

## **Airbnb Configuration**

To add **Airbnb Reviews** on your site, it is obvious that you need somehow to connect with the Airbnb server to fetch the reviews from their repositories; however, it is not a difficult task for the non-techies as we have created the easiest way to aggregate reviews.

To add Airbnb Reviews to your site, first, click on Airbnb.

![airbnb platform 1](/guide/public/images/business-reviews/airbnb-configuration-social-reviews-wp-social-ninja/airbnb-config-1.webp)

Now paste your room, experience or business URL here.

![airbnb platform 2](/guide/public/images/business-reviews/airbnb-configuration-social-reviews-wp-social-ninja/airbnb-config-2.webp)

You can find the URL in the address bar of your Airbnb room, experience, or business page, just like in the screenshot below.

![airbnb platform 3](/guide/public/images/business-reviews/airbnb-configuration-social-reviews-wp-social-ninja/room-url.webp)

Paste the URL into the field and hit **Save**. Once connected, you’ll see your Airbnb account linked with Social Ninja. Next, click **Create a Template** to start displaying your Airbnb reviews.

![airbnb platform 4](/guide/public/images/business-reviews/airbnb-configuration-social-reviews-wp-social-ninja/airbnb-config-3.webp)

Your template is now ready! From here, you can customize it the way you like. For more details, check out this [documentation](./template-style-connection) on template customization.

::: info
You can fetch up to **100 reviews** for each business on your site. If you're using the **free version of WP Social Ninja**, you can fetch a maximum of **5 Airbnb reviews**.
:::

However, downloading reviews sometimes might take some time. If you want, you can delete this account by clicking on the **Cross** icon.

You can even include additional business accounts when clicking the **Add More Business** button. Just enter the business name the same way as before & click the **Save** button.

::: tip
If you save and see a message that reviews were fetched but the business information couldn't be retrieved, your Business Info payload has likely expired — Airbnb periodically rotates these values. Just repeat the [Business Info step](#find-the-business-info-payload-recommended) above to re-copy a fresh request URL. Reviews and the review count aren't affected by this rotation.
:::


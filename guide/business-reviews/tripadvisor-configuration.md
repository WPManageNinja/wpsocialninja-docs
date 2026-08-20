---
title: "Tripadvisor Reviews"
description: "Connect your Tripadvisor listing to WP Social Ninja with an API key, and move an older connection to Tripadvisor's new developer platform."
---

# Tripadvisor Reviews

WP Social Ninja integrates with Tripadvisor so you can collect reviews from your listing and display them anywhere on your website.

Tripadvisor connections use an **API key** together with your listing's **Place ID**. Both come from Tripadvisor, and this guide walks you through getting each one and saving them in WP Social Ninja.

::: warning Tripadvisor is retiring its old developer platform
Tripadvisor is switching off its old Content API on **31 August 2026**. If you connected Tripadvisor before this, your existing key keeps working right up until that date — nothing breaks today and you are not forced to reconnect.

To stay connected after that date, create a new key on the current Tripadvisor developer platform and save it over the old one. WP Social Ninja detects which platform your key belongs to automatically, so there is no setting to change and no need to remove and re-add your business. See [Moving an Older Connection](#moving-an-older-connection) below.
:::

## Get Your Tripadvisor API Key

Log in to your Tripadvisor [developer account](https://www.tripadvisor.com/developers) and sign up for API access. From the navigation bar, select **My API** and then click the **Create API Key** button.

![Creating a Tripadvisor API key](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/Tripadvisor-1-scaled.webp)

To generate your key, Tripadvisor asks for some information about your business.

![Providing business details for the Tripadvisor API key](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/Tripadvisor-2.webp)

Verifying your website is required. Enter your website address and register it under your business so the connection works.

In the API Key restriction section, enter your domain name and click **Save**.

![Restricting the Tripadvisor API key to your domain](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/Tripadvisor-3.webp)

Once the form is complete your API key is generated, along with the domain you registered for it. Click **Copy to Clipboard** to copy the key.

![Copying the generated Tripadvisor API key](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/image.png)

::: tip
Tripadvisor's free plan requires billing details before it will issue a key. Check their current pricing page for what the free allowance covers, since Tripadvisor changes these limits from time to time.
:::

## Get the Place ID

Your **Place ID** is the number that identifies your listing, and you can read it straight out of your Tripadvisor page URL.

Look for the number that comes after **-d** in the URL. In an address like:

`…-g60724-d8725965-Reviews-…`

the Place ID is `8725965`.

::: warning
Take the number after **-d**, not the one after **-g**. The `-g` number identifies the *city*, not your business, and a connection saved with it will not find your reviews.
:::

![Finding the Tripadvisor Place ID in your listing URL](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/Tripadvisor-ID-scaled.webp)

::: info Which businesses can connect
Tripadvisor shares reviews for **hotels, restaurants and attractions**. It does not share reviews for tours or vacation rentals, so those listings cannot be connected.
:::

## Configuring Tripadvisor with WP Social Ninja

Once you have both your API key and your Place ID, go to your WP Social Ninja dashboard and select [Platform](/guide/getting-started/all-platforms-of-wp-social-ninja) from the navigation bar. Find Tripadvisor and click its **Settings** icon.

![Opening the Tripadvisor platform settings](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/tripadvisor-review-1.webp)

The Tripadvisor configuration popup appears.

1. Paste your **API Key** into the API Key field.
2. Paste your **Place ID** into the ID field.
3. Choose the review **language** you want to collect.
4. Click **Save**.

<!-- TODO: Capture this screenshot and save it at /guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/terra-api-key.webp
     Capture the current Tripadvisor connection popup: API Key and ID fields, language picker, and the developer
     link. Note there is no longer a Business URL tab. This replaces tripadvisor-review-2.webp below, which still
     shows the removed tab — swap the image line and delete the stale one once captured.
![Saving the Tripadvisor API key and Place ID](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/terra-api-key.webp)
-->

![Saving the Tripadvisor API key and Place ID](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/tripadvisor-review-2.webp)

Your business appears under **Your Connected Business Accounts** once the key is verified, and WP Social Ninja starts pulling in reviews.

## How Your Reviews Build Up

Tripadvisor's free plan sends the **3 most recent reviews** on each sync, rather than your whole review history at once.

That is not a limit on how many reviews you can display. Every sync adds any new reviews it finds and keeps everything already saved on your site, so your collection grows over time. Tripadvisor's free plan also allows 1,000 items in total before charges apply.

## Sync Frequency

Tripadvisor counts every sync against your plan's allowance, so WP Social Ninja limits how often it will check for new reviews.

The shortest interval available for Tripadvisor is **1 Week**. More frequent options are offered for other platforms but are hidden here, because anything more frequent would burn through your Tripadvisor allowance quickly.

You can change this under **Settings → Reviews Settings**, and you can always pull new reviews immediately with the manual sync button on the platform screen.

::: tip
If you connected Tripadvisor a while ago on a daily or three-day schedule, opening and saving the settings screen moves that connection onto the weekly schedule shown in the selector.
:::

## Moving an Older Connection

If you connected Tripadvisor before their platform change, you will see a note above **Your Connected Business Accounts** reminding you about the 31 August 2026 cutoff. Moving across takes one step:

1. Create a new API key on the [Tripadvisor developer platform](https://www.tripadvisor.com/developers).
2. Open your Tripadvisor settings in WP Social Ninja.
3. Paste the new key over the old one and click **Save**.

That is the whole migration. Keep the same Place ID, keep the same connection, and keep every review already saved on your site. WP Social Ninja works out which Tripadvisor platform the new key belongs to on its own.

The reminder disappears once all your Tripadvisor connections are on the new platform.

::: warning
Keys do not transfer between the old and new Tripadvisor platforms. A key from the old developer screen will not work on the new one, and vice versa — you need to create a fresh key rather than reuse your existing one.
:::

## Troubleshooting

**"Invalid API key" after pasting a new key.** Check that the domain restriction on the key matches the site you are saving it on. Tripadvisor rejects keys used from a domain they were not registered for.

**No reviews arriving.** Confirm your Place ID is the number after **-d** and not after **-g**, and that your listing is a hotel, restaurant or attraction.

**"Too many requests".** You have hit Tripadvisor's rate limit. WP Social Ninja pauses calls for a short while and resumes on its own — no action needed. If it keeps happening, lengthen your sync frequency.

## Displaying Your Reviews

With Tripadvisor connected, [create a review template](/guide/business-reviews/create-template) to choose which reviews appear and how they look, then place it on any page with a shortcode or block.

You can also let visitors search and filter your reviews themselves — see [Visitor Search, Sort & Filter](/guide/business-reviews/visitor-search-sort-filter).

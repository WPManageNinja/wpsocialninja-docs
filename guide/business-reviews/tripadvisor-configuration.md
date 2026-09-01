---
title: "Tripadvisor Reviews"
description: "Create a Tripadvisor developer account, pick the free Discover plan, generate your API key, and connect your listing to WP Social Ninja."
---

# Tripadvisor Reviews

WP Social Ninja integrates with Tripadvisor so you can collect reviews from your listing and display them anywhere on your website.

Tripadvisor connections use an **API key** together with your listing's **Place ID**. Both come from Tripadvisor, and this guide walks you through getting each one and saving them in WP Social Ninja.

Tripadvisor's current developer platform is called **Terra**. Getting a key takes three steps, and all three are free:

1. [Open your developer account](#step-1-open-your-tripadvisor-developer-account)
2. [Choose the free Discover plan](#step-2-choose-the-free-discover-plan)
3. [Create your API key](#step-3-create-your-api-key)

::: warning Tripadvisor has retired its old Content API
The legacy Tripadvisor Content API was scheduled to switch off on **31 August 2026**. If you connected Tripadvisor before Terra existed, your old key is at or past its cutoff and should be replaced now.

Enterprise customers using the **Partner API** and **Data Feeds** have a later date of **30 October 2026**.

To reconnect, create a new key on Terra and save it over the old one. WP Social Ninja detects which platform your key belongs to automatically, so there is no setting to change and no need to remove and re-add your business. See [Moving an Older Connection](#moving-an-older-connection) below.
:::

## What You Get on the Free Plan

Tripadvisor's free tier is called **Discover**, and it is enough to run a full review section on your website — no paid plan needed.

| What it means for your reviews | Free Discover plan |
| --- | --- |
| **Reviews delivered per sync** | The **3 most recent** |
| **Reviews you can display on your site** | **No limit** — they build up with every sync |
| Star rating and ranking | Included |
| Cost | Free — 1,000 syncs per month included |

The **3 reviews** figure is not a cap on your website. It is how many Tripadvisor hands over each time WP Social Ninja checks in, and every review that arrives is saved permanently — so your collection keeps growing. See [How Your Reviews Build Up](#how-your-reviews-build-up).

::: warning These limits are set by Tripadvisor
Tripadvisor controls these plans and can change them at any time. WP Social Ninja only displays what your plan returns — we cannot increase how many reviews Tripadvisor sends. Check [Tripadvisor's plan page](https://www.tripadvisor.com/developers) for current terms.
:::

## Step 1: Open Your Tripadvisor Developer Account

Go to the [Tripadvisor developer site](https://www.tripadvisor.com/developers) and sign in with your Tripadvisor account, or create one if you do not have it yet.

Once you are signed in, select **My API** from the navigation bar at the top right.

![The Tripadvisor for Business Terra API page with My API highlighted in the top navigation](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/terra-my-api.webp)

## Step 2: Choose the Free Discover Plan

If you have not selected a plan yet, Tripadvisor shows **No active plan**. Find the **Discover** card the one marked **Free to start** and click **Start now**.

![Tripadvisor plan selection showing the free Discover plan alongside Growth, Scale and Innovate](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/terra-choose-plan.webp)

You land on a checkout page for **Terra Discover**. It lists exactly what the plan includes and the pay-as-you-go rate that applies only after your free 1,000 entities are used up.

![The Terra Discover checkout page showing $0.00 due today](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/terra-discover-checkout.webp)

::: warning Billing details are required
Tripadvisor asks for payment details even though the Discover plan starts at $0. Nothing is charged until you exceed the free monthly allowance, and a normal WP Social Ninja setup stays well inside it.
:::

## Step 3: Create Your API Key

After checkout you are taken to the **Overview** screen. Your new Discover plan appears under **My plans** with your remaining free usage.

Under **My API key**, click **+ Create API key**.

![The Tripadvisor Overview screen with the Create API key button](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/terra-create-api-key.webp)

Your key is generated straight away and shown masked. Click **Copy to clipboard** and keep it somewhere safe, you will paste it into WP Social Ninja next.

![The generated Tripadvisor API key with Copy to clipboard and Regenerate API key buttons](/guide/public/images/business-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/terra-copy-api-key.webp)

::: tip
Treat this key like a password do not share it publicly. If it is ever exposed, click **Regenerate API key** on this screen and paste the replacement into WP Social Ninja.
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

Tripadvisor's free Discover plan sends the **3 most recent reviews** on each sync, rather than your whole review history at once.

That is not a limit on how many reviews you can display. Every sync adds any new reviews it finds and keeps everything already saved on your site, so your collection grows over time. A listing that receives reviews regularly will build up a healthy collection within a few sync cycles.

The same applies to photos: the free plan returns the **5 latest photos** per listing on each sync.

## Sync Frequency

Tripadvisor counts every sync against your plan's allowance, so WP Social Ninja limits how often it will check for new reviews.

The shortest interval available for Tripadvisor is **1 Week**. More frequent options are offered for other platforms but are hidden here, because anything more frequent would burn through your Tripadvisor allowance quickly.

You can change this under **Settings → Reviews Settings**, and you can always pull new reviews immediately with the manual sync button on the platform screen.

::: tip
If you connected Tripadvisor a while ago on a daily or three-day schedule, opening and saving the settings screen moves that connection onto the weekly schedule shown in the selector.
:::

## Moving an Older Connection

If you connected Tripadvisor before their platform change, you will see a note above **Your Connected Business Accounts** about the retired Content API. Moving across takes one step:

1. Create a new API key on Terra by following [Steps 1–3](#step-1-open-your-tripadvisor-developer-account) above.
2. Open your Tripadvisor settings in WP Social Ninja.
3. Paste the new key over the old one and click **Save**.

That is the whole migration. Keep the same Place ID, keep the same connection, and keep every review already saved on your site. WP Social Ninja works out which Tripadvisor platform the new key belongs to on its own.

The reminder disappears once all your Tripadvisor connections are on the new platform.

::: warning
Keys do not transfer between the old and new Tripadvisor platforms. A key from the old developer screen will not work on Terra, and vice versa — you need to create a fresh key rather than reuse your existing one.
:::

## Troubleshooting

**"Invalid API key" after pasting a new key.** Make sure you copied the whole key from the **My API key** box on Tripadvisor's Overview screen, and that you are using a Terra key rather than one from the retired Content API dashboard.

**No reviews arriving.** Confirm your Place ID is the number after **-d** and not after **-g**, and that your listing is a hotel, restaurant or attraction.

**Only three reviews appear after the first sync.** That is expected on the free Discover plan — see [How Your Reviews Build Up](#how-your-reviews-build-up). Your collection grows with each weekly sync.

**"Too many requests".** You have hit Tripadvisor's rate limit. WP Social Ninja pauses calls for a short while and resumes on its own — no action needed. If it keeps happening, lengthen your sync frequency.

**Unexpected charges.** Check **Usage and access** in your Tripadvisor dashboard to see how many entities you have used against your free 1,000. If you are close to the limit, lengthen your sync frequency under **Settings → Reviews Settings**.

## Displaying Your Reviews

With Tripadvisor connected, [create a review template](/guide/business-reviews/create-template) to choose which reviews appear and how they look, then place it on any page with a shortcode or block.

You can also let visitors search and filter your reviews themselves — see [Visitor Search, Sort & Filter](/guide/business-reviews/visitor-search-sort-filter).

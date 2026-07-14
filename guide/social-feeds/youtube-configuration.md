---
title: "YouTube Configuration"
description: "Connect your YouTube channel to WP Social Ninja — quickly with the Connect via Google method, or with a Google API Key for long-term stability — and display your videos on WordPress."
---

# YouTube Configuration

The YouTube Feed feature in WP Social Ninja lets you connect your YouTube channel and display your videos, playlists, and channel details directly on your WordPress website. Once connected, your YouTube content updates automatically, keeping your site fresh and engaging.

There are two ways to connect: the quick **Connect via Google** method, or the **API Key** method (recommended for long-term stability). Both are covered below, and both are secured through WP Social Ninja's [connection bridge](../getting-started/connecting-your-accounts), which keeps your connection reliable and refreshing in the background.

## Configure the YouTube Platform

To get started, you'll first configure the YouTube platform.

From your WordPress dashboard, navigate to **WP Social Ninja → [Platforms](../getting-started/all-platforms-of-wp-social-ninja)**. Click the **Social Feeds** tab, find **YouTube** in the list, and click the **Connect** button.

A pop-up will appear with two connection types:
* **API Key (Recommended)** — Connect via Token
* **OAuth 2.0 (Deprecated Soon)** — Connect via Google

This guide explains both.

![Connecting the YouTube platform in WP Social Ninja](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/access-youtube-feed.webp)

## Connect via Google (Quickest)

This is the fastest way to get connected — just sign in with Google, and WP Social Ninja links your channel automatically.

> [!NOTE]
> In the latest version this option is labeled **"OAuth 2.0 (Deprecated Soon)"**. It still works today, but it will be phased out — so if you want the most future-proof setup, use the **API Key** method further below.

**First,** in the **YouTube Configuration** pop-up, select the **OAuth 2.0 (Deprecated Soon)** tab — labeled **Connect via Google**. Then click the **Sign In And Get Google Access Code** button and approve access. As the pop-up notes, it only takes one click.

![The YouTube Configuration pop-up with the OAuth 2.0 (Connect via Google) tab and Sign In And Get Google Access Code button](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/youtube-configuration-modal.webp)

> [!TIP]
> **No access codes to copy or paste.** Once you sign in and approve, WP Social Ninja receives everything it needs and connects your YouTube channel automatically.

## API Key (Recommended for Stability)

For the most stable, long-term connection, use a free API Key from the Google Cloud Console. It takes a few more steps to set up, but it's the method we recommend keeping in place.

In the **YouTube Configuration** pop-up, select the **API Key (Recommended)** tab — labeled **Connect via Token**. This is where you'll paste your key into the **API Key** field once it's ready. First, let's create that key over in Google.

![The YouTube Configuration pop-up with the API Key (Recommended) tab selected](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/youtube-api-key-tab.webp)

### Get Your API Key from Google

Go to the [Google Cloud Console](https://console.cloud.google.com/) and log in with your Google account. In the top menu, click the **Select a Project** dropdown. When the pop-up appears, click **New Project**.

![Creating a new project in Google Cloud Console](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/google-search-console.webp)

Enter a **Project name** (e.g., "WP Social Ninja") and click **Create**.

![Create Project Name](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/new-project.webp)

Once the project is created, go to **APIs & Services → Credentials** from the main menu.

![Navigating to Credentials in Google Cloud Console](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/api-service.webp)

Now, click the **+ Create Credentials** button at the top, and select the **API key** option.

![Creating a new API Key](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/api-keys.webp)

Enter a name for your API key and click **Create**.

![Create API Key](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/create-api-key.webp)

A pop-up will appear with your new key. Click the **Copy** icon.

![Copying the newly created API Key](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/copy-api-key.webp)

To make the key work, you must enable the **YouTube Data API v3** — otherwise the API Key won't function. Click **API Library** from **APIs & Services**.

![YouTube Data API v3 Library](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/api-library-new.webp)

From the API Library, scroll down and select the **YouTube Data API v3**, then enable it.

![Selecting the YouTube Data API v3 from the API Library](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/youtube-data-api-v3.webp)

### Add the API Key to WP Social Ninja

Return to your WordPress dashboard and open the YouTube configuration pop-up. Select the **API Key (Recommended)** option, **paste** your key into the **YouTube API Key** field, and click **Save**. Your YouTube account is now connected.

![Pasting the API Key into WP Social Ninja settings](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/save-api-key.webp)

You'll see a success message like the one below:

![YouTube connection success message](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/youtube-successful.webp)

> [!TIP]
> For your security, WP Social Ninja now encrypts stored YouTube API keys at rest, so your credentials stay protected.

However you choose to connect, your YouTube content is now ready to display — next, design how it looks with a [YouTube feed template](./youtube-feed-template-general-settings).

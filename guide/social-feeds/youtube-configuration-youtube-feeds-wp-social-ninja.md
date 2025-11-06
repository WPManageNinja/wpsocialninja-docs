---
title: "YouTube Configuration"
description: ""
---

# YouTube Configuration

The YouTube Feed feature in WP Social Ninja allows you to easily connect your YouTube channel and display your videos, playlists, and channel details directly on your WordPress website. Once connected, your YouTube content updates automatically, keeping your site fresh and engaging.

In this guide, you’ll learn how to configure the YouTube platform and connect your channel using either of two methods: the **API Key (recommended for stability)** or **OAuth 2.0 (Connect via Google)**. Follow the steps below to complete the setup and start displaying your YouTube content on your site.

<iframe width="700" height="400" src="https://www.youtube.com/embed/l3zkXJuemak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Configure the YouTube Platform

To get started, you’ll first need to configure the YouTube platform.

From your WordPress dashboard, navigate to **WP Social Ninja → Platforms**. Click the **Social Feeds** tab. Find **YouTube** in the list and click the **Connect** button.

A pop-up will appear with two connection types:
* API Key (Recommended)
* OAuth 2.0 (Connect Via Google)

This guide will explain both methods.

![Connecting the YouTube platform in WP Social Ninja](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/access-youtube-feed.webp)

## Method 1: API Key (Recommended)

This is the most stable and recommended method. It requires you to create a free API Key from the Google Cloud Console.

### Get Your API Key from Google

Go to the [Google Cloud Console](https://console.cloud.google.com/) and log in with your Google account. In the top menu, click the **Select a Project** dropdown. Here, a pop-up appears; click **New Project**.

![Creating a new project in Google Cloud Console](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/google-search-console.webp)

Enter a **Project name** (e.g., "WP Social Ninja") and click **Create**.

![Create Project Name](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/new-project.webp)

Once the project is created, go to **APIs & Services → Credentials** from the main menu.

![Navigating to Credentials in Google Cloud Console](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/api-service.webp)

Now, click the **+ Create Credentials** button at the top, and you will see an **API key** option.

![Creating a new API Key](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/api-keys.webp)

Here, a new pop-up arrives. Enter the name of your API key and click on the **Create** button.

![Create API Key](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/create-api-key.webp)

After that, a new pop-up will appear with your new key. Click the **Copy** icon.

![Copying the newly created API Key](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/copy-api-key.webp)

In order to configure the YouTube Feed, you need to enable the **YouTube Data API v3** button; otherwise, the API Key will not work. Now, click on the **API Library** from the **APIs & Services** to enable the YouTube Data API v3.

![YouTube Data API v3 Library](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/api-library-new.webp)

From the API Library, scroll down and select the **YouTube Data API v3**.

![Selecting the YouTube Data API v3 from the API Library](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/youtube-data-api-v3.webp)

### Add the API Key to WP Social Ninja

Now, return to your WordPress dashboard and open the YouTube configuration pop-up. Select the **API Key (Recommended)** option. **Paste** your key into the **YouTube API Key** field. Click the **Save** button. Your YouTube account is now connected.

![Pasting the API Key into WP Social Ninja settings](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/save-api-key.webp)

You will get a successful message like the screenshot below:

![YouTube connection success message](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/youtube-successful.webp)

## Method 2: OAuth 2.0 (Connect Via Google)

<iframe width="700" height="400" src="https://www.youtube.com/embed/WeYsuWrTnKI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is a fast method that uses a temporary access code.

First, select **OAuth 2.0 (Connect Via Google)** from the pop-up. Click the **Sign In and Get Google Access Code** button.

![Selecting the OAuth 2.0 connection method](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/0auth2.webp)

A new Google pop-up window will appear. Choose the Google Account that manages your YouTube channel.

![Google account selection pop-up](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/choose-google-account.webp)

Next, click the **Continue** button to permit WP Social Ninja.

![Granting Google permissions to WP Social Ninja](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/sign-in-google-accounts.webp)

Google will give you an **Access Code**. **Copy** this code.

![Copying the Google Access Code](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/copy-access-key.webp)

Return to the WP Social Ninja dashboard, paste the code into the **Access Code** field, and click **Save**.

![Pasting the Access Code into WP Social Ninja](/guide/public/images/social-feeds/youtube-configuration-youtube-feeds/save-api-key1.webp)

Now that your YouTube account is connected, that’s it.
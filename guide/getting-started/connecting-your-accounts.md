---
title: "Connecting Your Accounts (Secure Connection Bridge)"
description: "Learn how WP Social Ninja connects to Google, YouTube, Instagram, Facebook, and TikTok through its secure connection bridge — for more reliable connections and automatic token refresh."
---

# Connecting Your Accounts

Keeping your social platforms connected should be something you set up once and forget. That's exactly what WP Social Ninja's **secure connection bridge** is built for.

WP Social Ninja connects to **Google, YouTube, Instagram, Facebook, and TikTok** through one hardened, trusted service instead of a separate connection flow for each platform. The result: more reliable connections, fewer surprise disconnects, and automatic renewals working quietly in the background.

## What is the Connection Bridge?

The connection bridge is a secure service that routes your platform connections through one trusted place, rather than every WordPress site talking to Google, Meta, or TikTok independently.

Here's what that means for you:

- **More reliable connections** – Routing through one hardened service means fewer failed connections and fewer unexpected disconnects.
- **Automatic token refresh** – For supported platforms (Google Reviews, YouTube, and TikTok), WP Social Ninja renews your connection in the background, so you spend less time reconnecting.
- **Protected credentials** – Connections are encrypted, and where a platform uses an API key (like YouTube), that key is now encrypted at rest.

> [!NOTE]
> The connection bridge covers **Google Reviews, YouTube, Instagram, Facebook, and TikTok**. **Twitter/X** connects with your own developer keys and is not part of the bridge — see the [Twitter Configuration](../social-feeds/twitter-configuration) page for that flow.

## How Connecting Works

Most platforms connect with a **single click**. Sign in on the platform's screen, approve access, and you're brought right back to WP Social Ninja — connected, with no code to copy:

- [Google Business Profile Reviews](../business-reviews/google-configuration)
- [Instagram](../social-feeds/instagram-configuration) (Business Basic & Business Advanced)
- [Facebook Feed](../social-feeds/facebook-integration) and [Facebook Reviews](../business-reviews/facebook-configuration)
- [TikTok Feed](../social-feeds/tiktok-feed-configuration)
- [YouTube](../social-feeds/youtube-configuration)

> [!TIP]
> Prefer a more hands-on setup? Some platforms also keep a **manual** connection method for advanced users — a token you generate yourself: Instagram (access token) and Facebook (page token). You'll find these documented in each platform's guide.

## Staying Connected

Once you've connected, WP Social Ninja works to keep you connected:

- **Google Reviews, YouTube, and TikTok** refresh automatically in the background — you generally won't need to reconnect.
- **Facebook and Instagram** may occasionally ask you to reconnect when their access expires. If a feed or review stops updating, simply open that platform and reconnect it.

With your accounts connected and kept fresh by the bridge, you're ready to start pulling in feeds and reviews and showing off your social proof.

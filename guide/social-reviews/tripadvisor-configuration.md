---
title: "Tripadvisor Reviews"
description: ""
---

# Tripadvisor Reviews

WP Social Ninja integrates with TripAdvisor, allowing you to collect and display reviews from the platform to enhance your business's credibility.

It offers two methods for gathering TripAdvisor reviews: using a **Business URL** or through an **API key**. We recommend using the API method, as it allows for a more comprehensive and reliable data transfer. With the API, you can control the frequency and volume of data requests, ensuring a seamless and customizable review collection process.

In this article, we will guide you through the steps to obtain the TripAdvisor API from your TripAdvisor account and how to connect it to WP Social Ninja.

## **Get Tripadvisor Credentials**

To obtain your TripAdvisor credentials, log in to your TripAdvisor [developer account](https://www.tripadvisor.com/developers). From the navigation bar, select **My API** and then click the **Create API Key** button.

![Tripadvisor API Configuration 1](/guide/public/images/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/Tripadvisor-1-scaled.webp)

::: tip

TripAdvisor offers a free API key that allows up to 5,000 requests for local details, photos, or reviews but you have to provide billing details to get this free API. To access additional requests and features, you will need to upgrade to their paid plans. For more information, refer to their [*API documentation*](https://tripadvisor-content-api.readme.io/reference/overview)*.*

:::

To generate your API key, you will need to provide TripAdvisor with some information about your business.

![Tripadvisor API Configuration 2](/guide/public/images/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/Tripadvisor-2.webp)

Verifying your website is necessary for creating the API. Enter your website address and register it under your business to ensure a smooth API transfer.

In the API Key restriction section, input your domain name and click the **Save** button.

![Tripadvisor API Configuration 3](/guide/public/images/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/Tripadvisor-3.webp)

Once you’ve completed the form, your API key will be generated and you will see the domain name you have registered for this API. Just click the **Copy to Clipboard** button to copy the API key.

![Tripadvisor API Configuration 4](/guide/public/images/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/image.png)

## **Get the Place ID**

To set up TripAdvisor with WP Social Ninja, you'll need the **Place ID** from your TripAdvisor business profile. You can find it in the URL of your Business profile.

Look for an ID in the URL that starts with the letter 'd'—this is your Place ID. In this case, the actual Place ID is '752551,' excluding the 'd' prefix. Copy the code from the URL.

![Tripadvisor API Configuration 5](/guide/public/images/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/Tripadvisor-ID-scaled.webp)

## **Configuring Tripadvisor with WP Social Ninja**

After receiving your TripAdvisor credentials, navigate to your WP Social Ninja dashboard and select **Platform** from the navigation bar. Search for TripAdvisor and click on the **Settings** icon button.

![Tripadvisor API Configuration 6](/guide/public/images/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/tripadvisor-review-1.webp)

A TripAdvisor configuration popup will appear. Select Credential Type: **API Key**, then paste your **API Key** and **ID** into the appropriate fields. Finally, click the **Save** button.

![Tripadvisor API Configuration 7](/guide/public/images/social-reviews/tripadvisor-configuration-social-reviews-wp-social-ninja/tripadvisor-review-2.webp)

::: tip

WP Social Ninja will initially show the 5 most recent reviews from TripAdvisor, which will be stored locally on your site. The plugin will regularly check for new reviews and update your feed as they become available.

:::


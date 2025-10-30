---
title: "Booking.com Reviews | Social Reviews | WP Social Ninja"
description: ""
---

# Booking.com Reviews | Social Reviews | WP Social Ninja

WP Social Ninja enables you to showcase reviews directly from your Booking.com business profile, adding credibility to your business and enhancing trust among potential customers. With this feature, you can create customized templates to make your reviews look more appealing and aligned with your website's style.

In this guide, we’ll walk you through the steps to display Booking.com reviews on your website.

::: tip

You’ll need WP Social Ninja Pro to access and display Booking.com reviews on your site.

:::

## **Enable Booking.com Platform**

Navigate to your **WP Social Ninja** dashboard and select **Platform** from the navigation bar. Locate the **Booking Platform** and click on the **Settings** icon to configure it.

![booking review 1](/guide/public/images/social-reviews/booking-com-configuration-social-reviews-wp-social-ninja/Booking-Review-1-scaled.webp)

## **Steps to Configure Booking.com Reviews&nbsp;**

Before fetching reviews from Booking.com using your Business Profile URL, you need to complete three additional steps:

- **Copy the Cookie AWS-WAF-Token Cookie Value from the Booking.com Site**

- **Add the AWS-WAF-Token  Cookie Value to a Snippet**

Below is a step-by-step guide to complete these settings:

## **Copy the Cookie AWS-WAF-Token**

Open **Booking.com** and navigate to the business profile whose reviews you want to display on your website.

Access your browser's **Inspect** mode (usually by right-clicking on the page and selecting "Inspect").

In the Inspect mode, go to the **Application** tab and select **Cookies**.

Search for the **AWS-WAF-Token** in the cookies list then copy the value of the AWS-WAF-Token cookie and save it for later use.

![booking review 4](/guide/public/images/social-reviews/booking-com-configuration-social-reviews-wp-social-ninja/Booking-Review-4-scaled.webp)

## **Add the AWS-WAF-Token in a Snippet**

To use the **AWS-WAF-Token** cookie value you copied earlier, you'll need to add it to your site using a code snippet. This can be done easily with a snippet plugin.

::: tip

We recommend using **[FluentSnippet](https://fluentsnippets.com/)** on your WordPress site for a seamless experience. However, you can use any other snippet plugin of your choice.

:::

Follow these steps to add the code snippet:

- Open **FluentSnippet** and click on the **Create Snippet** button.

- In the code editor field, insert the following code:

`php

add_filter('wpsocialreviews/booking_header_request_cookie_set', function($headers) {

    $headers&#91;'cookie'] = 'aws-waf-token=Cookie value goes here';

    return $headers;

});`</pre>

- Replace <mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-kb-palette-1-color">Cookie value goes here </mark>with the **AWS-WAF-Token** value you copied earlier.

- Save the snippet to apply the changes.

![booking review 5](/guide/public/images/social-reviews/booking-com-configuration-social-reviews-wp-social-ninja/Booking-Review-5-scaled.webp)

## **Business URL from Booking**

Navigate to your business profile on Booking.com and copy the **Business URL** directly from the address bar of your browser.&nbsp;

![booking review 6](/guide/public/images/social-reviews/booking-com-configuration-social-reviews-wp-social-ninja/Booking-Review-6-scaled.webp)

Next, return to your **WP Social Ninja Booking Configuration** and paste the **Booking.com Business Profile URL** you copied earlier. Click on the **Save** button, and you’ll see that your business has been successfully added.

![booking review 2](/guide/public/images/social-reviews/booking-com-configuration-social-reviews-wp-social-ninja/Booking-Review-2-scaled.webp)

If you wish to add another business profile, simply click on the **Add More Business** button and repeat the same steps.

To customize your **Booking.com Reviews Template**, click on the **Create a Template** button and start personalizing your template. Keep in mind, if you don't create a template, your reviews won’t be displayed, as the template won't be created automatically.

![booking review 7](/guide/public/images/social-reviews/booking-com-configuration-social-reviews-wp-social-ninja/Booking-Review-7-scaled.webp)

That's how you can easily fetch your **Booking.com** business profile reviews on your site using **WP Social Ninja**. If you have any further questions or need assistance with this process, feel free to [contact us](https://wpmanageninja.com/support-tickets/). We're here to help!

Also, check out - **[AliExpress Reviews](./aliexpress-configuration-social-reviews-wp-social-ninja)**

---
title: "Facebook Events Access Token"
description: ""
---

# Facebook Events Access Token

With WP Social Ninja, adding your Facebook Page events to your WordPress site is quick and simple. In this guide, we'll walk you through how to connect your Facebook Page with WP Social Ninja and display your events directly on your website.

## **Facebook Event Access Settings**

To access the Facebook Event Access settings in WP Social Ninja, navigate to the **Platform** tab from the top menu, then click the **Settings** icon.

![wpsn 1](/guide/public/images/facebook-feed/facebook-events-access-token/WPSN-1-scaled.webp)

A pop-up for Facebook Configuration will now appear. From the dropdown, select **Connect Event Access Token**. You’ll see that both your **Facebook Page ID** and **Event Access Token** are required to connect your Facebook Events.

![wpsn 2](/guide/public/images/facebook-feed/facebook-events-access-token/WPSN-2-scaled.webp)

Now, we'll walk you through how to connect your **Facebook Page Events** with **WP Social Ninja**. To get started, you'll first need to **create a Facebook App** to collect the required credentials.

## **Facebook App**

To create a Facebook App, visit the [Facebook Developer ](https://developers.facebook.com/)site. Log in to your account and click on the **My Apps** button from the top menu.

::: tip

Note that, You must log in with your personal Facebook profile’s username and password. Businesses cannot register as developers on Facebook; only individuals may do so.

:::

![fb event app 1](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-App-1-scaled.webp)

Now you’ll see the app creation page. Just click on the **Create App** button to get started.

![fb event app 2](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-App-2-scaled.webp)

Give your app a name and enter a contact email. Once you’ve filled those in, click the **Next** button.

![fb event app 3](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-App-3-scaled.webp)

In the **Use Cases** section, select **Others**, then proceed to the next step.

![fb event app 4](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-App-4-scaled.webp)

Next, select **Business** as your **App Type** and click on the **Next** button to proceed to the next page.

![fb event app 5](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-App-5-scaled.webp)

You’ll now see the App details page. Here, you can make any changes if needed, or simply leave the information as it is. Once you're ready, click the **Create App** button to finalize.

A popup will appear asking you to re-enter your Facebook password for security. Type in your password and click the **Submit** button.

![fb event app 6](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-App-6-scaled.webp)

## **Get the Credentials**

Go to your[ Meta App Developer Account ](https://developers.facebook.com/apps/)and click on the App that you have created now.

![fb event extra 1](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-Extra-1-scaled.webp)

Now the App development page will appear. From the left sidebar, go to **App Settings** and select **Basic**. You’ll see your **App ID** and **App Secret** here, copy both to use later.

![fb event extra 2](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-Extra-2-scaled.webp)

Next, go to the [API Explorer page](https://developers.facebook.com/tools/explorer/). First, choose the Meta **App** you created earlier. Then, in the **User or Page** dropdown, select **User Token** and enable the following permissions:

- page_events

- pages_read_engagement

- pages_read_user_content

- pages_show_list

After setting the permissions, click on the **Generate Access Token** button. Once the token is created, copy it and save it for later use.

![fb event extra 3](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-Extra-3-scaled.webp)

## **Long Lived Access Token**

Standard Facebook User Access Tokens expire quickly. To maintain a stable connection for your Facebook Events feed, you should convert your short-lived token into a long-lived one using Facebook's official tool.

Follow these steps to generate your token.

- **Navigate to the Access Token Debugger**

<li>Go to the [Facebook Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) and log in to your Facebook account.

</li>

- **Debug Your Current Token**

<li>Paste your existing **User Access Token** into the input field and click the **Debug** button.

</li>

![access token debugger 1](/guide/public/images/facebook-feed/facebook-events-access-token/Access-Token-Debugger-1-1-scaled.webp)

- **Extend the Token**

<li>On the results page, scroll to the bottom and click the **Extend Access Token** button.

</li>

![access token debugger 2](/guide/public/images/facebook-feed/facebook-events-access-token/Access-Token-Debugger-2-1-scaled.webp)

- **Copy the New Token**

<li>A new, long-lived token will be generated. Copy this new token to use in WP Social Ninja.

</li>

![access token debugger 3](/guide/public/images/facebook-feed/facebook-events-access-token/Access-Token-Debugger-3-1-scaled.webp)

- This is your **Event Access Token**, paste it to the required field of the WP Social Ninja dashboard. And to get the **Page ID**, you need to go to the [**link**](https://wpsocialninja.com/access-token-generator/?id=facebook-feed).

- Now, go to the **Facebook Feed** → click on the **Continue with Facebook** button & then a popup will appear.

- Select Continue as – (your Facebook ID)

## **Configure Facebook Page Event with WP Social Ninja**

Go back to your WP Social Ninja and open the **Facebook Event Access Configuration** settings. Paste the **Page ID and Long Lived Access Token** you copied earlier into the respective fields and click on the **Connect** button.

Next, click on the **Add New Template** button to set up and customize the template as per your preferences.

![fb event app 14](/guide/public/images/facebook-feed/facebook-events-access-token/FB-Event-App-14-scaled.webp)

This is how you can display your Facebook Page Events on your site. If you have any further questions or need assistance with this configuration, please don’t hesitate to contact [us](https://wpmanageninja.com/support-tickets).

---
title: "Optimize Images for Instagram"
description: ""
---

# Optimize Images for Instagram

**Optimize Images **is designed to enhance your Instagram image quality and improve the loading speed of your website by saving locally.&nbsp;

## **Enabling Optimize Images**

You can enable the Optimize Images option from Settings &gt; Feeds Platform &gt; Instagram Settings here you will find out the Optimize Images enable option like the below screenshot.

![Enabling Optimize Images for Instagram feeds](/guide/public/images/instagram-feed/optimize-images-for-instagram-social-feeds-wp-social-ninja/Optimize-Images-Instagram.png)

_Optimize Images_

## **Image Creation Process**

When you post images on your feed, our plugin utilizes an AJAX call to trigger the resizing process on your site's server. These resized images are then saved in three versions: high, medium, and low quality. This ensures that your website's visitors receive images that are both visually impressive and load quickly.

## **Image Storage Location**

The locally saved image files can be found in the "uploads" directory of your WordPress files. They will be organized in a folder '**wp-content/uploads/wp-social-ninja**'.

## **Limits of Stored Images**

Our plugin stores a maximum of 600 posts by default. You have the flexibility to manually change this limit by defining the appropriate constant in your wp-config.php file. For instance:

`WPSOCIALREVIEWS_INSTAGRAM_MAX_RECORDS`

Once this limit is reached, the image file that is displayed on your site the least frequently will be automatically deleted to make way for new images. WP Social Ninja will disable image resizing if there are more than 100 new image files are created within 15 minutes timeframe. This protects your server from potential issues.

## **Images Missing or Showing Error**

Please ensure that your server has "**Imagick**" installed and properly configured. **Imagick **is an image resizing program used by WordPress to handle image loading and manipulation, including images uploaded or linked from external sources, such as Instagram Feed.

If you have any questions or need further assistance, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpsnsite&amp;utm_medium=popup&amp;utm_campaign=spring#/).

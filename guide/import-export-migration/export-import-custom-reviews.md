---
title: "How to Export/Import"
description: ""
---

# How to Export/Import

With WP Social Ninja, you can effortlessly import and export your feeds, templates, reviews, testimonials, notification popup templates, and chat widgets. This makes the process of creating and transferring your content more seamless and efficient.

In this article, we'll guide you through the steps to import and export your contents.

## **Export**

Navigate to the **Tools** section of WP Social Ninja from the left sidebar in WordPress. Here, you will find the **Export** and **Import** options.

First, choose the data you want to export by selecting it from the drop-down menu. You'll have the following options:

- [Reviews](../business-reviews/)

- [Testimonials](../advanced-features/add-testimonials)

- Feed and Reviews [Template](../getting-started/templates-overview)

- [Notification Popups](../advanced-features/notification-popup) Template

- [Chat Widgets](../social-chat/chat-widget-configuration)

After selecting the data, pick the specific template you want to export.

Please note that **Reviews** and **Testimonial** content will be exported in **CSV** format. Similarly, **Feed and Reviews Template**, **Notification Popup Template**, and **Chat Widget** will exported in **JSON** format.

It's important to mention that when exporting the Feed and Reviews option, only the Template Settings of WP Social Ninja will be exported. The reviews themselves cannot be exported because they won't appear on another site during import.

This happens because the other site doesn't have the necessary authorization to display reviews from the platform. Not all platforms require this authorization, but platforms like [Facebook](../business-reviews/facebook-configuration), [Instagram](../social-feeds/instagram-configuration), [Tripadvisor](../business-reviews/tripadvisor-configuration), and [Yelp](../business-reviews/yelp-configuration) do require authorization.

![wpsocialninja export import 1](/guide/public/images/import-export-migration/how-to-export-import-custom-reviews/export-import-1.webp)

## **Import**

To import data into WP Social Ninja, click on the **Import** option from the left sidebar. Then, choose the type of data you want to import from the dropdown menu. Next, click on the **Choose File** button to select the file from your local storage.

Once you've selected the file, click on the **Import** button to upload it.

One thing to keep in mind is that **Reviews and Testimonial** content will be imported in **CSV** format. **Feed and Reviews Template**, **Notification Popup Template**, and **Chat Widget** will be imported in **JSON** format.

For your convenience, a demo CSV file is provided, showing the format of the CSV you're uploading. This helps you understand the correct structure for your import.

![wpsocialninja export import 2](/guide/public/images/import-export-migration/how-to-export-import-custom-reviews/export-import-2.webp)

## Categories in Your CSV

Reviews and testimonials carry their categories in the `category` column, so your organizing work is kept when you move content between sites.

Because a review can belong to several categories, list them in that single cell separated by a **vertical bar**:

```
Home|About
```

Any category in your file that doesn't exist yet is created for you during the import, so you don't need to set them up beforehand.

::: tip
This makes export → edit in a spreadsheet → import the quickest way to organize a large batch of reviews at once. See [Organize Reviews with Categories](/guide/business-reviews/organize-reviews-with-categories) for the full picture.
:::

## Testimonial Videos in Your CSV

If your testimonials have videos, two more columns carry them:

* `video_url` — a link to the video. This can be a YouTube or Vimeo link, or a direct link to a video file.
* `video_poster` — the thumbnail image shown before an uploaded video plays.

Both must be **full web addresses starting with `http://` or `https://`**. A bare domain like `example.com/video.mp4`, or a path like `/uploads/video.mp4`, cannot be used and will be skipped.

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Leave `video_poster` empty for YouTube and Vimeo links — those already carry their own thumbnail.

::: info
If any video cells in your file could not be used, the import tells you afterwards how many were skipped in each column. That way you know whether it was your video links or your thumbnails that need fixing, rather than discovering it later on the page.
:::

::: tip
Download the sample CSV from the **Import** screen. It includes every column with an example value, which is the easiest way to get your spreadsheet's headings right.
:::


---
title: "How to Export/Import"
description: ""
---

# How to Export/Import

With WP Social Ninja, you can effortlessly import and export your feeds, templates, reviews, testimonials, notification popup templates, and chat widgets. This makes the process of creating and transferring your content more seamless and efficient.

To access these features, navigate to **WP Social Ninja → Tools** from your WordPress dashboard.


## Exporting Data

The **Export** tool allows you to save your WP Social Ninja configurations and custom data to your local machine.

1. In the **Tools** section, ensure the **Export** tab is selected.

2. Under **Select Data Type**, use the dropdown menu to choose what you want to export. Your options include:
  
  - Custom Reviews (Deprecated Soon)
  - [Testimonials](../advanced-features/add-testimonials)
  - Feed and Reviews [Template](../getting-started/templates-overview)
  - [Notification Popups](../advanced-features/notification-popup) Template
  - [Chat Widgets](../social-chat/chat-widget-configuration)

3. After choosing a data type (such as Templates), you will be prompted to select the specific item or template you wish to export.

4. Click the **Export** button to download the file.

### Understanding Export Formats and Limitations

 * **CSV Format:** Reviews and Testimonials are exported as .csv (Comma Separated Values) files, containing the actual text, ratings, and reviewer data.

 * **JSON Format:** Templates, Notification Popups, and Chat Widgets are exported as .json files. These files contain configuration settings, layout choices, and styling rules.

 * **Authorization Restrictions:** When exporting **Feed and Reviews Templates**, only the template settings are exported. 
 The live reviews or social posts from platforms like [Facebook](../business-reviews/facebook-configuration), [Instagram](../social-feeds/instagram-configuration), [Tripadvisor](../business-reviews/tripadvisor-configuration), or [Yelp](../business-reviews/yelp-configuration) are not exported. This is because displaying that live data requires active API authorization on the destination site, which a JSON file cannot transfer.



![wpsocialninja export import 1](/guide/public/images/import-export-migration/how-to-export-import-custom-reviews/export-import-1.webp)

## Import

The Import tool allows you to upload previously exported WP Social Ninja data or bulk-upload custom reviews and testimonials.

1. In the **Tools** section, click on the **Import** tab in the sidebar.

2. Under **Select Import** Type, choose the corresponding data type from the dropdown menu.

3. Click the **Choose File** button and select the **.json** or **.csv** file from your local storage.

4. Click the **Import** button to finalize the process.

One thing to keep in mind is that **Reviews and Testimonial** content will be imported in **CSV** format. **Feed and Reviews Template**, **Notification Popup Template**, and **Chat Widget** will be imported in **JSON** format.

> [!TIP]
> To ensure your data is formatted correctly before importing, click the Download Sample CSV button provided on the Import screen. This sample file includes every necessary column heading and example values, preventing errors during upload.

![wpsocialninja export import 2](/guide/public/images/import-export-migration/how-to-export-import-custom-reviews/export-import-2.webp)

## Structuring Your CSV Data

When managing Reviews and Testimonials via a spreadsheet, specific columns dictate how your data is organized upon import.

## Managing Categories in CSV

Reviews and testimonials carry their category tags within the category column.

 * **Single Category:** Enter the category name (e.g., `Home`).

 * **Multiple Categories:** Because a review can belong to several categories, list them in the single cell separated by a **vertical bar** (`|`) (e.g., `Home|About`). *Do not use commas*.

 * **Auto-Creation:** Any category listed in your CSV file that does not yet exist on your WordPress site will be created automatically during the import.

::: tip
Exporting your reviews, [organizing their categories](/guide/business-reviews/organize-reviews-with-categories) within a spreadsheet, and importing the file back is the fastest method for managing a large collection of feedback.
:::

## Testimonial Videos in CSV

If your testimonials include video content, you must use two specific columns. These map to the same **Video** and **Video Thumbnail** fields you'd fill in by hand when [adding a video testimonial](../advanced-features/add-testimonials#adding-a-video-testimonial) through the editor:

 * **`video_url`:** The link to the video. This can be a YouTube link, a Vimeo link, or a direct link to an `.mp4` file.

 * **`video_poster`:** The direct link to a thumbnail image (shown before a self-hosted video plays). Leave this column empty for YouTube and Vimeo links, as they provide their own thumbnails.

#### Strict URL Formatting

Both columns require full web addresses beginning with `http://` or `https://` (e.g., [https://www.youtube.com/watch?v=example](https://www.youtube.com/watch?v=example)). Bare domains (`[example.com/video.mp4](https://example.com/video.mp4)`) or relative paths (`/uploads/video.mp4`) are invalid and will be skipped during import.


> [!Note]
> If any video URLs or poster images are formatted incorrectly, the import tool will notify you after the process is complete, specifying exactly how many entries were skipped in each column so you can correct your spreadsheet.

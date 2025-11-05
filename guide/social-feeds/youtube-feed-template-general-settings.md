# YouTube Feed Template: General Settings

When you create or edit a new YouTube feed template, you will land in the main Template Editor. This is where you control everything about your feed's content and appearance.

The editor is divided into three tabs:

* **General (This Guide):** This tab controls the feed's content. You set the video source, filter the videos, and adjust functional settings like layout, video player behavior, and buttons.
* **Style:** This tab controls the visual design. You can change colors, fonts, and spacing to match your brand.
* **Connection:** This tab manages the API connection for this template. You can use this to re-authenticate your account or connect a new source if needed.

This guide will walk through every option in the **General** tab. So, let’s get started.

![Youtube Template General Settings](/guide/public/images/social-feeds/youtube-feed-template/youtube-template.webp)

> **Use Case:** You can use these settings to create powerful, specific feeds.
> * A vlogger can show their **Channel** feed, use the **Template** settings to create a **Masonry** grid, and use the **Filters** to show only their 5 most recent videos.
> * A musician can create a feed showing only a specific **Playlist** of their new album.
> * A brand can use the **Search** type to create a feed of all videos that mention their product's name.

## General Settings

Here is a breakdown of each section within the **General** tab.

### 1. Source

This is the most important setting. It tells the template what content to fetch from YouTube.

* **Feed Type:** This dropdown lets you choose the kind of content to display.
    * **Channel:** Shows the latest videos from a specific YouTube account.
    * **Playlist:** Shows all videos from a single, specific playlist.
    * **Search:** Shows videos that match a specific keyword.
    * **Specific Videos:** Lets you hand-pick one or more videos by ID.
    * **Live Streams:** Shows upcoming, live, or completed live streams from a channel.
* **Channel ID, Handle or Username:** (Appears if "Channel" is selected). You must enter the channel's Handle, ID, or Username.
    * **Example (Handle):** `https://www.youtube.com/@yourchannel`
    * **Example (ID):** `https://www.youtube.com/channel/UC...`
    * **Example (Username):** `https://www.youtube.com/user/yourname`
* **Total Feed:** Set the maximum number of videos to fetch from YouTube. The maximum is 200. (Note: This is different from the number of videos shown on first load, which is controlled by Pagination).

![Source settings for the YouTube feed](/guide/public/images/social-feeds/youtube-feed-template/source.webp)

### 2. Template

This section controls the visual structure of your feed.

* **Layout Type:** This is the main structure.
    * **Grid:** A clean, multi-column grid where all video boxes are the same height.
    * **Carousel:** A horizontal slider.
    * **Masonry:** A "Pinterest-style" grid where video boxes have variable heights.
    * **Slider:** A layout that shows one video at a time.
    * **Timeline:** A single-column feed.
* **Template:** These are pre-designed visual "skins" (e.g., Vega, Sirius, Polaris, Rigel).
* **Number of Columns:** Set the number of columns for Desktop, Tablet, and Mobile.
* **Columns Gap:** This controls the space (in pixels) between each video.


![Template layout settings for the YouTube feed](/guide/public/images/social-feeds/youtube-feed-template/template.webp)

### 3. Filters

Filters refine your feed to show only what you want.

* **Number of Feeds to Display:** The number of videos a visitor sees when the page first loads.
* **Post Order:** This lets you sort your videos.
    * **Descending:** Shows newest videos first (most common).
    * **Ascending:** Shows the oldest videos first.
    * **Random:** Shuffles the videos.
* **Cache Settings:** Set how often the plugin checks YouTube for new videos (e.g., 6 Hours, 1 Day).

![Filter settings](/guide/public/images/social-feeds/youtube-feed-template/filter.webp)

### 4. Video

This section controls the content inside each video post.

* **Display Player:** Toggles the video thumbnail.
* **Display Video Name:** Toggles the video's title.
* **Display Description:** Toggles the text description.
* **Display Date:** Toggles the publish date.
* **Display Call To Action Button:** Toggles the "Watch Now" button.
* **Display Views:** Toggles the video's view count.
* **Display Like:** Toggles the video's like count.
* **Display Comments:** Toggles the video's comment count.

![Video content display settings](/guide/public/images/social-feeds/youtube-feed-template/video.webp)

#### Play Mode

This setting controls what happens when a visitor clicks a video.

* **Popup:** (Default) The video opens in a pop-up lightbox on your website. This is the best user experience as it keeps visitors on your page.
* **In-line:** The video player loads directly inside the feed's grid.
* **YouTube Player:** The visitor is sent to the official YouTube website.

### 5. Header

This section controls the large banner at the top of your entire feed.

* **Show Header:** This is the master switch to turn the entire header on or off.
* **Display Channel Logo:** Toggles your channel's profile picture.
* **Display Channel Name:** Toggles your channel's name.
* **Display Banner:** Toggles your channel's large banner image.
* **Display Subscriber:** Toggles your channel's subscriber count.
* **Display Subscribe Button:** Toggles a "Subscribe" button in the header.

![Header settings for the YouTube feed](/guide/public/images/social-feeds/youtube-feed-template/header.webp)

### 6. Follow Button

This adds a "Follow" button at the top or bottom of your feed.

* **Button Position:** Choose where the button appears: **Top** or **Bottom**.
* **Button Text:** Customize the text on the button (e.g., "Follow Us on YouTube").

![Subscribe Button settings for the YouTube feed](/guide/public/images/social-feeds/youtube-feed-template/subscribe-button.webp)

### 7. Pagination

Pagination controls what happens when a visitor reaches the end of the first set of videos.

* **Pagination Type:**
    * **None:** The feed will only show the "Number of Feeds to Display." No more videos can be loaded.
    * **Load More:** This adds a button at the bottom of your feed.
* **Videos Per Page:** This number controls how many new videos are loaded each time the "Load More" button is clicked.
* **Button Text:** Change the text for the button (e.g., "Load More Videos").

> **Example:**
> * You set **Number of Feeds to Display** (in Filters) to **8**.
> * You set **Videos Per Page** (in Pagination) to **4**.
> * When your page loads, visitors will see 8 videos.
> * When they click "Load More," 4 new videos will appear (for a total of 12).

![Pagination settings for the YouTube feed](/guide/public/images/social-feeds/youtube-feed-template/pagination.webp)

## Next Steps

Now that you have configured all the General settings, your next step is to make your feed look great.

Click on the **Style** tab to customize the Colors, Fonts, and Spacing of your header, video posts, and buttons.

When you are finished, click the **Save** button.
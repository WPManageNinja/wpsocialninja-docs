---
title: "Change Log"
description: ""
---

# Change Log

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.20.1 ( Date: 25 September, 2025 ) =</button>

- Fixed media upload issue

- Resolved CSS conflict in notifications and badge reviews popup modal

- Fixed Facebook feed “Order by” and keyword/hashtag filtering issues

- Fixed PHP deprecated warnings by reordering optional and required parameters in Reviews Template

- Fixed Facebook reviews, PHP 8.1 compatibility issue caused by automatic conversion of false to array.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.20.0 ( Date: 18 September, 2025 ) =</button>
- Added Judge.me reviews migration import option (Pro)
- Added the fresh and modern "Polaris" Reviews Template. (Pro)
- Added WooCommerce product reviews synchronization with WP Social Ninja, allowing you to manage and display all your reviews directly from Social Ninja. (Pro)
- Added Advanced WooCommerce reviews customization — choose layouts, templates, form styles, and control visibility options directly in WP Social Ninja, without configuring each product’s settings individually. (Pro)
- Added a Social Ninja Reviews Template placement option in WooCommerce product settings. (Pro)
- Added a Reviews Form option in WooCommerce product settings to collect WooCommerce reviews using Fluent Forms, or you can use the WooCommerce default reviews form. (Pro)
- Added a new header template for WooCommerce, fluent forms and custom reviews. (Pro)
- Added option to collect custom reviews using Fluent Forms. (Pro)
- Added Review photo support — collect images along with review text via Fluent Forms. (Pro)
- Added Fluent Forms review collection with approval support for custom and WooCommerce reviews. (Pro)
- Added Fluent Forms Rating Field: You can now add rating fields in Fluent Forms without needing Fluent Forms Pro, if you have Social Ninja Pro.
- Added Responsive Post Count Filter: Use the new "wpsocialreviews/responsive_post_count" filter to customize the number of posts displayed based on the device (desktop, tablet, or mobile).
- Added Fetch More Facebook Feed Attachments: Enable the "wpsocialreviews/facebook_feed_should_fetch_more_attachments" filter to include additional child attachment photos in your Facebook feeds.
- Updated Swiper Library: Upgraded to version 8.4.7 to resolve conflicts with Power Pack ticker.
- Improved Error Handling: Added encryption error detection for Facebook Reviews, Facebook Feed, and Instagram, with clear, user-friendly error messages (includes error code 999 for access token issues).
- Improved Facebook Feed Cache: Optimized cache handling for relative date ranges, making your feeds faster and more reliable. (Pro)
- Improved Tripadvisor API configuration and cleared downloadReviewsUrl for non-business URL credentials for a seamless experience.
- Improved button links and accessibility for Facebook feeds, making them easier to navigate.
- Fixed Airbnb reviews fetching issue &amp; added support for Airbnb v3 (note: experiences and services business name &amp; average rating not supported)
- Fixed accessibility issue with slider pagination (Pro)
- Fixed PHP deprecation issue (get_class() without arguments) for better compatibility with newer PHP versions
- Fixed error display for Facebook Reviews in the admin panel.
- Fixed missing &lt;br&gt; tags in Instagram post captions on the frontend for better formatting.
- Fixed Issue with Business Hours &amp; Timezone Settings for WhatsApp Widget (Pro)
- Fixed input device activation for total posts/reviews in the editor's responsive mode, with better device key selection logic.
- Fixed issues with uploading custom images. (Pro)
- Fixed Chat Widget close button color change issue.
- Fixed Chat Widget Template Config handling for array values, resolving a PHP 8.3 compatibility issue that caused a fatal error.
- Fixed WooCommerce Template rating icon spacing and color issues.
- Fixed Facebook feed album and single album image optimization and display issues. (Pro)
- Fixed: Facebook feed now only shows public posts (subscriber-only posts are hidden).
- Fixed Facebook feed popup left arrow icon issue in the editor.
- Fixed Instagram Feed posts hashtag links with umlauts being incorrectly generated.
- Fixed Inline Instagram videos now pause other videos, preventing multiple from playing at once.
- Fixed YouTube Feed live stream data update and fetch issues. (Pro)
- Fixed YouTube Feed empty header display issue.
- Fixed search functionality in the admin panel for all reviews.
- Fixed syntax error in Reviews Template "Rigel" within the editor. (Pro)
- Fixed sorting logic for feed and review posts to display them in the correct order.
- Fixed reviews template CSS loading in the footer on the WooCommerce product page.
- Resolved PHP maximum execution time exceeded error in the `feedsByRandom` method logic

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.19.1 ( Date: 04 September, 2025 ) =</button>
– Resolved a Twitter/X API credential issue in v1.1.0+ to enhance security and prevent potential misuse.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.19.0 ( Date: 14 July, 2025 ) =</button>
- Added Get Reviews via QR Code Module. (Pro)
- Added verified badge support for review platforms. (Pro)
- Fixed Instagram account feeds max 100 feed limit issue
- Fixed Hashtag filter functionality for Facebook album and single album feeds. (Pro)
- Fixed chat widget CSS selectors and added closing animation to chat box
- Fixed chat widget to correctly reflect the user’s local timezone. (Pro)
- Refactored rating stars and improved AI platform detection on notification popups. (Pro)
- Fixed TikTok feed disconnection issue by improving token management, adding a safety buffer for expiration checks, and enhancing error handling.
- Updated Babel configuration for ES module support: Removed unused script from production version
- Improve Accessibility for reviews and Facebook feed buttons. (Pro)
- Airbnb review integration is temporarily unavailable due to changes in the external API. A notice has been added to the configuration screen.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.18.0 ( Date: 29 May, 2025 ) =</button>
- Introduced an AI-powered summarizer for Reviews templates with customizable display options. (Pro)
- Reviewer Name Format Option – Added setting to allow users to customize how reviewer names are displayed. (Pro)
- Optimized Image Format Setting – Introduced an option to choose between JPG or WebP image formats for better optimization.
- Star Rating Icon – Improved excessive DOM size for rating icons to enhance performance.
- Edit Button Visibility – Resolved visibility issue with the Edit button on reviews templates.
- Feed Popup Layout – Fixed height adjustment issue to ensure consistent layout in the feed popup.
- "Write a Review" Button – Updated element type to prevent template layout breakage. (Pro)
- Review Business Info &amp; Button URL – Fixed issues related to displaying business info and custom "Write a Review" button URL. (Pro)
- Reviews Popup Styling – Fixed issue with styling not updating in the notifications reviews popup.(Pro)
- Fixed the restriction issue affecting optimized image URLs
- Fixed the no default translation string issue in translation settings.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.17.0 ( Date: 06 May, 2025 ) =</button>
- Added SMS chat widget. (Pro)
- Added Microsoft Teams chat widget. (Pro)
- Added Instagram DM chat widget. (Pro)
- Added support for Facebook Single Photo Album via Album ID. (Pro)
- Added support for Facebook Specific Video Playlist via Playlist URL. (Pro)
- Added option to show Fluent Forms or custom URLs in Reviews business info/badge section. (Pro)
- Added support for YouTube feed – users can now collect feeds using channel handle, username, or channel ID.
- WhatsApp Pro is now available in the Free version (other Pro features remain locked).
- Added prefilled support for SMS and WhatsApp widgets (layout types: box and icons). (Pro)
- Added official 3:4 aspect ratio support for Instagram templates.
- Enhanced WeChat widget. (Pro)
- Improved Facebook Events API integration – users can now collect Facebook event feeds. (Pro)
- Improved: User can display likes, comments count and header bio text, fullname for instagram business basic account.
- Resolved issue with multiple Fluent Forms overlapping in the chat widget. (Pro)
- Updated Twitter/X official logo on twitter template.
- Fixed issues with editing and deleting chat widgets.
- Resolved Oxygen Builder escaping issue.
- Fixed manual Instagram connection issue.
- Fixed issue with reviews media URLs when image optimization is enabled.
- Resolved "Load More" issue in reviews (Pro)
- Fixed Instagram account feed video media URL issue.
- Removed Skype from the chat widget due to Microsoft discontinuing support for Skype integration

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.16.2 ( Date: 11 March, 2025 ) =</button>
- Improve data escaping and overall plugin security.
- Restricted direct access to plugin upload directory for better protection.
- Improved Queries performance

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.16.1 ( Date: 19 February, 2025 ) =</button>
- Fixed a critical issue where the sort() function was incorrectly applied to a string instead of an array in the Facebook Helper.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.16.0 ( Date: 18 February, 2025 ) =</button>
- Added support for exporting and importing: Testimonials, Feed and reviews templates, Notification popups &amp; Chat widgets. (Pro)
- Added a full platform data deletion option to enhance user control and ensure compliance with data privacy standards. (Pro)
- Now supports displaying Facebook timeline feeds as a Facebook photo feed. (Pro)
- Added image optimization support for the reviews slider. (Pro)
- Improved WhatsApp pre-filled message functionality for smoother user interaction. (Pro)
– Introduced 4:5 aspect ratio for Instagram feed images.
– Improved Facebook Feed Template responsiveness to ensure optimal display across devices.
- Resolved reviewer image inconsistencies in testimonials and custom reviews. (Pro)
- Fixed CSS conflicts with Elementor Pro’s Swiper component. (Pro)
- Resolved issues with fetching reviews from Booking.com. (Pro)
- Fixed missing Facebook business details display issues. (Pro)
- Remove unnecessary string from reviewer image url (Pro)
- Fixed Booking.com reviews fetch issues. (Pro)
– Fixed an issue causing unknown Facebook API error messages.
– Fixed image resizing issue where only the first feed template was processing images, while other templates were not resizing them correctly. Now, all templates handle image resizing properly.
– Addressed missing Instagram video display problems.
– Fixed YouTube feed image size modifications not applying correctly when using add_filter.
– Updated Twitter/X official logo.
– Fixed Facebook feed alt tag empty issue to improve accessibility.
– Ensured Read More/Read Less truncates HTML content correctly.
– Refactored Avatar &amp; Cover assignments to prevent undefined key issues.
– Fixed Instagram video carousel album thumbnail visibility issues.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.15.1 ( Date: 05 December, 2024 ) =</button>
– PHP Fatal Error caused by missing ‘Optimize Images’ table.
– Issue with the ‘Template Source Empty’ error displaying incorrectly.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.15.0 ( Date: 04 December, 2024 ) =</button>
– Action Required: If you have a personal account connection, please reconnect your account before December 2024 after updating to version 3.15.0 or higher. Learn more
– Added Optimize Images settings option in Settings -&gt; Advanced Settings -&gt; Optimize Reviews Image Settings. This feature automatically stores local copies of Reviews images on your server.
– Added Optimize Images settings option in Settings -&gt; Feed Platforms -&gt; YouTube Settings. This feature automatically stores local copies of YouTube feed images on your server.
– Added YouTube Feed GDPR compliant settings option in Settings -&gt; Advanced Settings.
– Added Optimize Images reset option in Settings -&gt; Feed Platforms -&gt; YouTube Settings.
– Added Optimize Image resolution settings option in Template Editor -&gt; Feed/Settings -&gt; Images Resolution.
– Added an option to configure pre-filled messages for WhatsApp.
– Added an address field option for schema snippets.
– Added the ability to reorder chat widget channels.
– Improved support for collecting language-specific reviews from Tripadvisor and Booking reviews.
– Fixed an issue with Instagram feed accessibility.
– Fixed an issue with Fluent Forms business info display.
– Fixed a TikTok feed filter issue on mobile devices.
– Fixed TikTok popup responsiveness issues.
– Fixed responsive styling for reviews header ratings.
– Fixed the disappearing date styling option for review platforms.
– Fixed empty business info appearing in Google Reviews configuration.
– Fixed a dependency issue with the widget for the wp-block-editor.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.14.2 ( Date: 07 October, 2024 ) =</button>
– Fixed unknown error message display issue
– Fixed reviews rating icon color display issue
– Remove unnecessary animated bg class from free version
– Fixed optimize profile photo invalid url issue
- Fixed instagram feed multiple hashtag issue (Pro)
- Fixed Facebook Feed album photos popup issue (Pro)
- Fixed Facebook album feed popup slider changes issue (Pro)

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.14.1 ( Date: 23 September, 2024 ) =</button>
– Resolved an issue where database tables were not being created for subsites if the wp social ninja was installed after the subsites were created. Tables will now correctly generate for both the main site and all subsites, regardless of installation time.
– Preloader in feed templates not disappearing after storing images locally has been resolved. Preloader now correctly disappears after images are successfully stored.
– Fixed PHP 8.3 compatibility issue, which caused a fatal error due to a null argument being passed to array_keys() in the ShortcodeHandler.php file.
– Corrected the issue with the “Filter Number of Feeds to Display” limit for feeds, ensuring that the specified limit now works as intended.
– Addressed an issue with the feed display limit, ensuring it now functions correctly.
– Fixed post URL popup and redirection issue in Facebook feed template.
- Resolved an issue where the "Posts Order by Most Popular" and "Posts Order by Least Popular" options in Facebook feeds were not functioning correctly. Filters now work as expected, displaying posts based on popularity. (Pro)
- Updated TikTok Feed Template 2 to be GDPR-compliant and optimized for image loading. (Pro)
- Fixed the average rating display to show a maximum of one decimal number. (Pro)

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.14.0 ( Date: 18 September, 2024 ) =</button>
- Introducing Tripadvisor reviews API (Pro)
- Added a field for Facebook feed followers count (in addition to likes count) and fixed the issue with undefined media URLs. (Pro)
– Added Optimize Images settings option in Settings -&gt; Feed Platforms -&gt; Facebook,TikTok Settings. This feature automatically stores local copies of Facebook,TikTok feed images on your server.
– Added Facebook,TikTok Feed GDPR compliant settings option in Settings -&gt; Advanced Settings.
– Added Optimize Images reset option in Settings -&gt; Feed Platforms -&gt; Facebook,TikTok Settings.
– Added Optimize Image resolution settings option in Template Editor -&gt; Feed -&gt; Images Resolution.
– Added a warning notice in the wp social ninja admin area to alert you about critical issues with your Facebook,TikTok Feed and Facebook Reviews.
– Added Email notification alerts for critical Facebook,TikTok Feed and Facebook Reviews issues. You will receive an email notification if there’s an unresolved issue with an Facebook,TikTok feed or Facebook Reviews on your website.
– Fixed the review rating problem so you see the exact rating every time.
– Fixed the Instagram feed animation issue so that images of different sizes and resolutions display perfectly on the screen.
– Fixed the problem of missing Instagram videos – now all videos will be shown properly.
– Improved Instagram image optimization by fixing the issue with multiple avatar downloads and ensuring images load from local storage.
– Fixed the Instagram videos display issue in the free version so videos can now play directly from the template.
- Fixed the issue with Instagram popup images overlapping, which will ensure images and text display correctly without any glitches. (Pro)
- Fixed Airbnb business info issue, which will show details in the header including ratings &amp; number of reviews. (Pro)
- Fixed the spacing issue in the Instagram feed carousels so images are now properly aligned. (Pro)
- Fixed fallback average rating and total rating issue of schema snippet for reviews template. (Pro)
- Fixed review content read more and less excerpt issue. (Pro)
- Fixed the Facebook album layout issue so users won’t see any stretched images. (Pro)
- Fixed and improved the feed slider so images no longer flash. (Pro)

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.13.1 ( Date: 03 April, 2024 ) =</button>
– Resolved Facebook Pages and Instagram account connectivity problems.
– Fixed the string translation issue in the editor.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.13.0 ( Date: 12 March, 2024 ) =</button>
– Added TikTok Feed
– Introduced TikTok Feed Elementor Widget
– Introduced TikTok Feed Oxygen Widget
– Introduced TikTok Feed Beaver Widget
– Fixed chat widget query limit issue
– Chat widget improvements
– Fixed Airbnb reviews fetching issue
– Addressed ${var} deprecation issue in PHP 8.2
– Addressed translation text issue in editor panel

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.12.1 ( Date: 11 December, 2023 ) =</button>
– Hiding the Fluent Form submit button in the Chat Widget when using Fluent Forms as the Channel
– Added chat widget channel labels in chat box template
– Fixed chat widget fluent form overlap issue
– Added a language select option to the chat widget for Multi-language support
– Fixed the scrollbar issue in the feed popup.
– Fixed review load more button html closing tag issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.12.0 ( Date: 27 November, 2023 ) =</button>
– Improved overall accessibility across the plugin.
– Added WP date option switcher for Facebook feed.
– Added support for selecting any post type pages in the chat widget.
– Integrated WP Social Ninja with WooCommerce, enabling users to select a template from WC product settings to display reviews in the WooCommerce reviews tab.
– Added a brand-new template for Facebook feed.
– Added support for carousel images, comments, and reactions within the Facebook feed popup box.
– Add gallery image support for Facebook feed.
– Introduced a filter option (Display posts with) for Facebook feed.
– Introduced slider gap option.
– Fixed issues related to WooCommerce reviewer avatar and business info display.
– Improved Shoppable Instagram Feed user experience (UX).
– Enhanced feeds popup arrows for better navigation and responsiveness.
– Addressed Google My Business (GMB) locations limit issue.
– Resolved Facebook pages limit issue.
– Add reviews badge template link open in new tab option
– Resolved Booking.com reviews issue.
– Fixed template custom CSS load issue in the header.
– Fixed trustpilot external link empty issue
– Fixed Instagram hashtag limit issue
– Fixed reviews business info image broken url issue
– Fixed Fluent Forms deprecated issue
– Fixed Fluent Forms deprecated issue
– Exclude all unlisted videos from the YouTube feed.
– Resolved Reviews are automatically removed when they are deleted from Facebook or Google.
– Addressed Google Business Profile (GBP) locations limit issue.
– Resolved Facebook pages limit issue.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.11.0 ( Date: 26 September, 2023 ) =</button>
– Added support for Twitter API version 2.
– Added WooCommerce Reviews
– Added support for the Bulgarian date format in Booking.com integration.
– Added an error message for import reviews
– Increased the limit for Google Reviews locations to 200.
– We have updated the Google My Business logo and renamed the platform from Google My Business to Google Business Profile.
– Improve code structure in the Pro version for better performance
– Introduced Managers settings options, allowing the addition of other managers with specific permissions.
– Resolved the custom reviews issue with the count of reviews.
– Fixed an issue related to saving Instagram images when new images arrive.
– Resolved the issue of saving Instagram images of the same size when downloaded via cURL.
– Fixed the Instagram header cache creation and API error generation issue.
– Fixed an issue related to the type of arguments in base64_decode.
– Fixed the problem of connected Instagram accounts not being deleted properly.
– Fixed a PHP-required parameter error.
– Fixed an issue where unnecessary style attributes were being printed.
– Fixed the missing href tag in the chat widget.
– Fixed a PHP notice in the Elementor widget class.
– Fixed a style configuration issue on duplicate templates.
– Fixed the Instagram popup image carousel rendering issue.
– Fixed the SEO issue related to the "a" tag in reviews and notification templates.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.10.1 ( Date: 26 July, 2023 ) =</button>
– Fixed compatible issue with oxygen page builder

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.10.0 ( Date: 26 July, 2023 ) =</button>
– Added Optimize Images settings option in Settings -&gt; Feed Platforms -&gt; Instagram Settings. This feature automatically stores local copies of Instagram feed images on your server.
– Added Instagram Feed GDPR compliant settings option in Settings -&gt; Advanced Settings.
– Added Optimize Images reset option in Settings -&gt; Feed Platforms -&gt; Instagram Settings.
– Added Optimize Image resolution settings option in Template Editor -&gt; Post -&gt; Images Resolution.
– Added a warning notice in the wp social ninja admin area to alert you about critical issues with your Instagram Feed.
– Added Email notification alerts for critical Instagram Feed issues. You will receive an email notification if there’s an unresolved issue with an Instagram feed on your website.
– Fixed issue with editing button text in the shoppable Instagram Feed.
– Fixed an issue with fetching the number of videos in the YouTube Feed.
– Fixed multiple Google My Business (GMB) accounts auto sync issues.
– Fixed the extra slash issue in the rest route for WPML plugin.

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.9.4 ( Date: 25 May, 2023 ) =</button>
– Fix Instagram API error: Tried accessing nonexisting field (comments_count) on node type (Media)

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.9.3 ( Date: 21 April, 2023 ) =</button>
– Fix Instagram accounts connection auto disconnect issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.9.2 ( Date: 18 April, 2023 ) =</button>
– Fix Instagram feeds not found issue
– Fix Instagram albums media display issue
– Fix Only admin can see error messages
– Fix Compatible with breeze plugins cache

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.9.0 ( Date: December 29, 2022 ) =</button>

- Added Facebook Feed access token manually connect option

- Added Facebook Reviews access token manually connect option

- Added support for PHP 8.1

- Added external URLs hide option in reviews settings

- Added date option, title &amp; author spacing option in the testimonial module

- Fixed Google My Bussiness access token expired issue

- Fixed Google My Bussiness accounts limit issue

- Fixed CRON JOB issue

- Fixed the YouTube feed popup scrolling issue

- Fixed PHP mb_strpos function undefined issue

- Fixed autoptimizeCache method undefined issue

- Added Facebook Event Feed (Pro)

- Added Facebook Album Feed (Pro)

- Added total rating and reviews count for fluent forms, custom reviews (Pro)

- Added custom URL option for reviews badge and notification popups (Pro)

- Added support for PHP 8.1 (Pro)

- Added external URLs hide option in reviews settings (Pro)

- Added date option, title &amp; author spacing option in the testimonial module (Pro)

- Improved Tripadvisor API (Pro)

- Fixed reviews business info empty issue (Pro)

- Fixed the Instagram Item box CSS issue (Pro)

- Fixed Yelp Php error (Pro)

- Fixed Booking.com date incorrect issue (Pro)

- Fixed masonry layout column break issue (Pro)

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.8.0 ( Date: November 16, 2022 ) =</button>
– Added Instagram shoppable feed module
– Added responsive slider option
– Added YouTube Feed custom banner upload option
– Added Twitter Item Box style option
– Added filter hook for Facebook feed API data limit
– Instagram, Facebook, and Twitter feed compatible with siteground cache
– Twitter feed compatible with caching plugins
– Improve Facebook and instagram profile header in the editor
– Fix web dev errors for the chat widget
– Fix the permalink issue on the Facebook feed

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.7.1 ( Date: 11 October, 2022 ) =</button>
– Migrate Google my business APP
– Compatible with Godaddy Cache, WP-Optimize Cache, WP Fastest Cache, Autoptimize Cache plugin
– Added on-hover tooltip text option for chat widget icons layout
– Added reviews title for amazon, tripadvisor, trustpilot, aliexpress, booking dot com
– Improve platforms page UI
– Improve route reload issue in settings
– Remove Instagram empty media URL feeds from the feed object
– Fix oxygen page builder wpsn templates CSS loading in the footer issue
– Fix business info issue
– Fix the responsive bar selected device and scroll issue
– Fix the Facebook feed incorrect media type issue
– Fix Tripadvisor reviews Unicode text support issue
– Fix Tripadvisor total reviews count
– Fix booking dot com date incorrect issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.7.0 ( Date: 24 August, 2022 ) =</button>
- Add Template Style Module for all platform
- Add a responsive query option for all platform
- Add a responsive column breakpoint option for all platform
- Add Show/hide reviews by specific words option
- Add hide date option for reviews
- Add collect testimonials using Fluent Forms
- Add hide facebook feed shared posts features
- Add booking.com 1-10 starts filter option
- Add google locations and facebook pages clear option
- Improve Chat widget compatible with Litespeed cache
- Improve IG, FB feed compatible with wp rocket plugin
- Improve API Integrations
- Fix Youtube Feed - live streams videos incorrect date display issue
- Fix include/exclude feeds count issue
- Fix booking.com average rating issue
- Fix reviews business info issue
- Fix Google reviews locations return false issue
- Fix Facebook feed image undefined issue
- Fix review empty URL issue
- Fix YT and IG popup open issue
- Fix Compatible issue with elementor pro
- Refactored Editor Panel VueJS Components for better performance
- Refactored App Controller and Models
- Internal improvements

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.6.1 ( Date: June 1, 2022 ) =</button>
– Fix business info auto delete issue
– Fix reviews cache key delete issue
– Improve YouTube feed include, exclude filter

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.6.0 ( Date: May 30, 2022 ) =</button>
– Add Testimonial Module
– Add Custom reviews Import &amp; Export feature
– Add manually auto-sync option
– Add reviews sorting option in the admin panel
– Improve Airbnb reviews API
– Fix Facebook and Instagram feed line breaks issues for different language
– Fix GMB duplicate reviews issue
– Fix the number of feeds issue
– Fix IG video thumbnail display issue in IOS device
– Fix the Booking.com platform name alignment issue
– Fix write a review button display issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.5.7 ( Date: April 22, 2022 ) =</button>
– Fix the slider issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.5.6 ( Date: April 20, 2022 ) =</button>
– Remove Copyrighted media assets
– Updated Assets and Readme file change

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.5.5 ( Date: April 20, 2022 ) =</button>
– Fix the google locations limit issue
– Fix the Redis object cache compatibility issue
– Fix the phone number chat widget open in the new tab issue
– Fix chat widget email and phone number plain text issue
– Fix the Twitter header display issue in the template editor panel
– Fix elementor reviews widget reviewer name styling issue
– Add read more/less styling option for elementor reviews widget

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.5.4 ( Date: March 30, 2022 ) =</button>
– Add the translate option in the settings panel
– Add filter hook for reviews platform icon
– Add class name in all html elements
– Improve notification popup settings panel
– Improve global settings panel design
– Improve the Instagram feed to be compatible with the Litespeed cache
– Improve hide chat widget from elementor, oxygen, beaver builder editor panel
– Update the TripAdvisor icon
– Remove GMB deprecated API endpoints
– Fix the chat widget close button in only icons layout
– Fix the Facebook header number format issue
– Fix Twitter hashtag URL 404 not found issue
– Fix slider issue in Oxygen page builder
– Fix fluent forms chat widget info message
– Fix ‘ago’ translate issue
– Fix reviews template web accessibility issue
– Fix Elementor 3.6.x compatibility issue
– Fix http issue in GMB and write a review URL

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.5.3 ( Date: February 03, 2022 ) =</button>
– Fix critical error issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.5.2 ( Date: February 02, 2022 ) =</button>
– Add header title option for Fluent Forms channel in Chat widgets
– Fix the js error in the oxygen page builder issue
– Fix the Facebook Feed curl error issue
– Fix the Facebook Feed page profile picture image quality issue
– Fix Facebook Feed Masonry Layout overlapping issue in Firefox browser
– Fix Tripadvisor invalid date issue
– Fix the Tripadvisor header rating issue
– Fix custom review and fluent forms review merge issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.5.1 ( Date: January 25, 2022 ) =</button>
– Fix database issue
– Improve localize script compatible for wp 5.9
– Improve small CSS

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.5.0 ( Date: January 24, 2022 ) =</button>
– Add Facebook Feed
– Add Facebook Feed Elementor Widget
– Add Facebook Feed Oxygen Widget
– Add Facebook Feed Beaver Widget
– Fix other platform reviews not showing when Fluent Forms reviews are added
– Fix swiper slider conflict with elementor 3.5.0
– Fix the YouTube auto-play issue in the chrome browser
– Fix the fluent form chat widget icon issue
– Fix reviews popup template scrollbar issue
– Improve Instagram template caption font size on the mobile device
– Improve GMB reviews limit is 100
– Remove important tags from all button CSS

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.2.2 ( Date: December 08, 2021 ) =</button>
– Improve Image Upload Field
– Fix the reviews date issue
– Fix chat widget fluent form icon responsive CSS issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.2.1 ( Date: December 06, 2021 ) =</button>
– Add Fluent Forms Modal in Chat Widget
– Improve Fluent Form chat widget style
– Fix the Facebook reviews page limit issue
– Fix Facebook Reviews Create Template issue
– Fix PHP Error on plugin installation
– Fix the date translate issue
– Fix reviews template scrollbar issue
– Fix GMB translated by google text issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.2.0 ( Date: December 02, 2021 ) =</button>
– Add Beaver page builder native widget
– Add Fluent Forms integration in the chat widget
– Add Fluent Forms reviews manually approve settings option
– Add Badge layout custom title option
– Add Notification streams custom title option
– Add Load More button custom text option
– Add Reviews header custom text option
– Improve badge template 2 style
– Improve feeds Hide Specific Posts input field validation
– Improve assets loading in beaver page builder
– Fix GMB translated by google text issue
– Fix IG empty media URL issue
– Fix multiple platform support in notification streams
– Fix human readable time translate issue
– Fix the booking.com date format issue
– Fix the TripAdvisor data fetch issue
– Fix the character encoding issue
– Fix html rel attributes

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.1.1 ( Date: November 09, 2021 ) =</button>
– Add reviewer URL map field for Fluent Forms integration
– Improve Oxygen page builder native widget assets loading
– Fix Oxygen Reviews Widget write a review button CSS issue
– Fix Notification streams date hide option
– Fix Instagram business accounts multiple accounts select issue
– Fix the reviews filter issue in the editor all reviews
– Fix Airbnb modal issue
– Fix the YouTube image loading issue
– Fix the chat widget popup delay issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.1.0 ( Date: November 08, 2021 ) =</button>
– Add Oxygen page builder native widget
– Add reviews notification streams
– Add reviews badge template
– Add Google My Business groups support
– Add inline video playmode for IG
– Add lazy loading attribute for feeds images
– Add YouTube-related videos from the same channel
– Add display the chat from the click of a custom button
– Add chat hide options on desktop/mobile
– Add chat exclude pages option
– Add chat popup box hide when the chat box is offline
– Add chat close button color option
– Add chat open in same page popup setting
– Add click esc key to hide chat popup box
– Improve Amazon reviews data fetching issue
– Improve IG business accounts connection UX
– Improve the IG hashtag feed limit
– Fix gravatar image elements that do not have explicit width and height issue
– Fix IG multiple business accounts connection issues
– Fix IG manually connect an account issue
– Fix chat CSS overwrite theme CSS issue
– Fix the YouTube feed whitespace issue
– Fix double slash in assets URL
– Fix the swiper autoplay function error issue
– Fix Gutenberg editor console error messages
– Fix the lightspeed caching issue
– Fix the cron job issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.0.4 ( Date: October 11, 2021 ) =</button>
– Add option for GMB translated by google text
– Add chat template enable/disable option
– Add platform label option for custom and fluent forms
– Add more styling options in wpsn elementor widgets
– Fix load plugin text domain issue
– Fix TripAdvisor attraction reviews fetching issue
– Fix the Twitter card overlapping issue
– Fix the base plugin installation issue
– Fix chat widget channel save issue
– Fix chat widget emoji save issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.0.3 ( Date: October 05, 2021 ) =</button>
– Add Social Ninja 4 Elementor Widget
– Add Tooltip on hover in the filter by business
– Add chat popup delay option
– Add image upload field for fluent forms integration
– Add text trim option for reviews
– Improve Airbnb data fetching
– improve TripAdvisor write a review button URL
– Improve overall CSS
– Refactor Airbnb business info
– Fix YouTube inline/popup video play mode issue
– Fix YouTube video random order video play issue
– Fix chat widget emoji, Unicode and html br tag issue
– Fix the google my business auto sync issue
– Fix Airbnb auto sync for business info
– UTF-8 support in ig popup content
– Fix translate ready text
– Fix the Instagram popup video autoplay issue
– Fix the reviews slider on the hover autoplay pause issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.0.2 ( Date: September 29, 2021 ) =</button>
– Add reviews schema snippet settings option
– Add reviews content type option to show excerpt/full content etc.
– Add a full-screen chat editor
– Improve reviews fetching message with n number of reviews
– Improve Instagram popup box responsive CSS
– Improve template data format
– Improve reviews date format option with default WordPress date format
– Improve Airbnb configuration modal UX
– Fix reviews snippet issue
– Fix chat widgets channel configuration save issue
– Fix chat widget URL issue for single channel
– Fix Airbnb and booking.com average rating issue
– Fix Airbnb filters by business name issue
– Fix Booking.com reviews text issue
– Fix Google total rating and average rating issue
– Fix multiple platforms'' average rating &amp; total rating issue
– Fix facebook reviews item broken URL issue
– Fix conflict with a happy-addons plugin
– Fix some responsive CSS issues
– Fix swiper carousel conflict with elementor pro

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.0.1 ( Date: September 24, 2021 ) =</button>
– Fix reviews read more/less button issue
– Fix TripAdvisor business average rating issue
– Fix TripAdvisor hotel reviews fetch issue
– Fix the booking.com business info rating icon issue
– Fix booking.com invalid date issue
– Fix the amazon sub-domain reviews fetch issue
– Add twitter actions popup/open in tab option
– Fix the Twitter popup image/video crop issue
– Fix the Twitter hashtag cron job issue
– Fix reviews header responsive issue
– Fix reviews template CSS issue
– Compatible with WordPress multisite
– Fix the wp rocket plugin caching issue
– Improve chat widgets
– Fix the chat widget priority issue
– Fix the chat widget WhatsApp issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 3.0.0 ( Date: September 22, 2021 ) =</button>
– Improves Configuration Modal UI/UX
– Support multiple business/places reviews
– Improve Airbnb error validation
– Add Fullscreen editor panel option
– Pagination select tab issue on the editor panel
– Add Filter by Business Name option
– Add all-in-one chat widgets
– Improve caching system
– Improve cron job data update
– Improve assets loading

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 2.0.2 ( Date: August 31, 2021 ) =</button>
– Adds terms and conditions pages URL

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 2.0.1 ( Date: August 21, 2021 ) =</button>
– Replace Slick JS with Swiper JS
– Refactor frontend JS
– Improve reviews template layout style
– Improve reviews platforms configuration process
– Fix cron event activate issue on plugin activation
– Fix reviews load more button hide issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 2.0.0 ( Date: March 16, 2021 ) =</button>
– Adds Rest API
– Optimized code for faster rendering
– Improves UI/UX
– Improves backend query
– Improve global settings panel UX
– Fix the Inline YouTube Player issue
– Fixed various bugs and improved overall performance

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.3.2 ( Date: March 22, 2021 ) =</button>
– Added: YouTube OAuth 2.0
– Added: Instagram private account “get refresh token” generate button on configuration modal
– Added: Reviews date format options
– Improved: Generate Instagram Personal account refresh token after 50 days
– Improved: More details are provided for IG API errors
– Improved: Display only valid platform for Add New Template on All templates
– Improved: All platforms, support page UI, UX
– Improved: Added nonc security for admin Ajax request
– Fixed: Airbnb fetching reviews failed issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.3.1 ( Date: February 17, 2021 ) =</button>
– Added: Reviews Filters ( Order by )
– Fixed: Reviews Pagination Issue
– Fixed: jQuery.differed exception error issue
– Fixed: Chat.php file PHP header already sent the issue
– Fixed: Assets loading on the specific page
– Fixed: Assets loading for sidebar widget
– Fixed: Twitter Load more issues

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.3.0 ( Date: February 13, 2021 ) =</button>
– Added: Instagram Feed
– Added: WP Social Ninja sidebar widget
– Added: Twitter Filters Option
– Fixed: Twitter media repeat issue
– Fixed: YouTube Popup Extra Gap Issue
– Fixed: Messenger assets loading issue
– Improved: YouTube Number Of Columns
– Improved: Platform configuration modal UX
– Improved: Editor Panel UX

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.2.5 ( Date: October 29, 2020 ) =</button>
– Added – YouTube Feed
– Fixed – Google Auto Syncing Error issue
– Fixed – Airbnb data fetching issue
– Fixed – Airbnb empty URL Message
– Fixed – Twitter Username display issue
– Fixed – Twitter template theme compatibility issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.2.4 ( Date: July 29, 2020 ) =</button>

- Added – Twitter Element Display/Hide Settings Option

- Added – Twitter Retweeted Status on tweet

- Added – Twitter video tweet

- Added – Twitter gif tweet

- Added – Twitter youtube/vimeo/soundcloud tweet

- Improve – Twitter displays website original URLs on tweet

- Improve – Twitter Load More Button Design

- Improve – Twitter date format

- Improve – Twitter API Fetch UX

- Fixed – Twitter tweet link issues

- Fixed – Twitter quoted tweet issue

- Fixed – Twitter retweeted tweet issue

- Fixed – Twitter status id issue

- Fixed – Twitter action count number format

- Fixed – Twitter retweeted, quoted tweet action count issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.2.3 ( Date: July 06, 2020 ) =</button>
– Fixed: Messenger offline message CSS issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.2.2 ( Date: July 06, 2020 ) =</button>
– Fixed: Google access code field message
– Fixed: Messenger greeting text color, align issue
– Fixed: Messenger always typing issue
– Improved: Plugin name
– Improved: Shortcode name

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.2.1 ( Date: June 27, 2020 ) =</button>

- New – Added Airbnb review platform

- New – Added Google reviews auto sync option

- New – Added Messenger header background, title, caption styling option

- New – Added Messenger will open on the same window

- New – Added Tinymce editor on greeting message

- New – Fixed: Google my business configuration documentation link

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.2.0 ( Date: May 12, 2020 ) =</button>
New – Added Google My Business API
New – Fetch unlimited numbers of reviews from googling my business
New – Added Ajax Load More Button on reviews template
New – Added configuration clear button
New – Twitter Feeds Ajax Load More Button
New – Added chat template select option
New – Added 1 new chat template
New – Added chat button text change option
New – Added chat button icon select option
New – Fixed chat icon and prompt display issue on the editor

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.1.1 ( Date: February 07, 2020 ) =</button>
New – Twitter Feeds Real-Time Syncing
New – Twitter advanced settings option
Improved – Twitter configuration modal UI/UX
Improved – Reviews placeholder image
Improved – CSS file enqueue on the header
Fixed – Feed cache timeout issue
Fixed – All Templates edit/delete/duplicate issue

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.1.0 ( Date: January 28, 2020 ) =</button>
New – Twitter Feeds
New – Twitter OAuth login system
New – Twitter live editor
New – Facebook Messenger Chat
New – Facebook Messenger Auto Page Connection Option
New – Facebook Messenger Chat live editor
Improved – Shortcode generating
Improved – All Templates Data

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.0.1 ( Date: January 08, 2020 ) =</button>
New – Added Rigel and Procyon Template
New – Added a few filters and action hooks for developers.
New – Google Structured Data Format
New – SEO Friendly
Improved – Read More URL
Improved – Configuration Modal UI and Validation
Fixed: Front-end rating filter by rating value
Fixed: Remove all admin notices from wp social reviews pages

<button class="kt-blocks-accordion-header kt-acccordion-button-label-show" type="button">= 1.0.0 ( Date: January 01, 2020 ) =</button>
– initial the first release

---
title: "Let Visitors Search, Sort & Filter Reviews"
description: "Add a search box and sort and rating dropdowns above your review feed so visitors can find the reviews that matter to them."
---

# Let Visitors Search, Sort & Filter Reviews

Normally you decide the order your reviews appear in, and every visitor sees that same order. That works well for a short feed, but once you have collected dozens or hundreds of reviews, a visitor looking for something specific has to scroll and hope.

This feature adds a small toolbar directly above your reviews with a **search box**, a **sort dropdown**, and a **rating dropdown**. Visitors can then narrow the feed themselves searching for a product they are considering, jumping straight to your 5-star reviews, or reading the oldest ones first.

> [!Note]
> The visitor toolbar is available in **WP Social Ninja Pro**. The switch appears in the free version with a crown icon, but cannot be turned on without a Pro licence.


## Enable Let Visitors Search, Sort & Filter

The toolbar is off by default, and you turn it on per template — so you can offer it on your main reviews page while keeping a homepage slider clean and simple.

1. From your WordPress dashboard, go to **WP Social Ninja → Templates**.
2. Open the review template you want to add the toolbar to.
3. On the **General** tab, scroll to the **Filters** section.
4. Turn on **Let Visitors Search, Sort & Filter**.
5. Click **Save**.

The editor shows you a preview of the bar as it will appear on your site. The preview is there to show placement and styling the controls in it are not clickable.

![The Let Visitors Search](/guide/public/images/business-reviews/visitor-search-sort-filter/editor-toggle-1.webp)


## What Your Visitors See

The toolbar sits above your reviews and holds up to three controls.


### Search Box

Visitors type a word or phrase and press Enter to narrow the feed to matching reviews.

Search looks at:

- The **review text**
- The **review title**, when your template displays it
- The **reviewer's name**, but only when your Name Format is set to show full names

If your template hides all three no review text, no title, and no full names there is nothing left to search, so the search box is left out rather than shown as a control that finds nothing.

![The frontend review feed with the visitor toolbar ](/guide/public/images/business-reviews/visitor-search-sort-filter/user-see-2.webp)

### Sort Dropdown

Lets visitors reorder the feed:

- **Newest first**
- **Oldest first**
- **Highest rated**
- **Lowest rated**

If your template's own Order is set to **Random**, an extra **Featured** option appears at the top so visitors can return to the order you chose.

### Rating Dropdown

Lets visitors show reviews of one specific star rating, plus an **All ratings** option to clear the choice.

> [!Note]
> Choosing **4 Stars** shows reviews rated exactly four stars — not "four and above". This is deliberate: a visitor picking a rating usually wants to read that rating specifically.


## How It Works With Your Own Filters

The toolbar lets visitors narrow what you have already chosen to show. It never widens it.

Your **Filters by Minimum Rating** setting still applies. If you set your template to 4 stars and above, the rating dropdown offers only **4 Stars** and **5 Stars**, a visitor cannot reach the 2-star reviews you excluded. Likewise, reviews you removed with **Filter by Include/Exclude** or your word filters stay hidden no matter what a visitor searches for.

If your minimum rating leaves only a single option, the rating dropdown is hidden, since it and **All ratings** would return the same reviews.

For a feed scoped to one product, sorting or filtering keeps that product's scope visitors never see another product's reviews by changing the sort order.

## Where the Toolbar Can Appear

The toolbar needs a feed of review cards it can rebuild, so it is offered on:

- **Grid**, **Masonry** and **Slider** layouts
- **Badge** and **Notification Popup** templates, but only when their display mode is set to **Popup**

It is not offered on:

- **Booking.com** feeds, because Booking.com uses a 1–10 rating scale that a 1–5 star dropdown cannot describe
- Badge or notification templates that are not in popup mode, since there is no feed to browse
- Feeds showing an AI-generated review summary

When a template does not support the toolbar, the switch simply does not appear in the editor.


> [!Note]
> Turning on the review title and using the full-name format gives visitors more to search against, which makes the search box noticeably more useful.




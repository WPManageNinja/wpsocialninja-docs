---
title: "Organize Reviews with Categories"
description: "Group your reviews and testimonials into categories, tag many at once, and show only the ones you want in a template."
---


# Organize Reviews with Categories

Categories are labels you attach to your reviews so you can find and display them in groups. You might tag reviews by the page you want them on (**Home**, **About**), by what they talk about (**Support**, **Delivery**), or by product line whatever suits your site.

Once your reviews are categorized, you can build a template that shows only one category, so each page of your website displays the reviews that actually belong there.

A review can belong to **more than one** category at the same time. A review that works well on both your home page and your about page can simply be tagged with both.

Categories work the same way for [Testimonials](../advanced-features/add-testimonials) as they do for reviews, and both share the same set of categories.

## Add Categories to a Single Review

When you add or edit a review, you'll find the **Category** field in the form.

1. Go to **WP Social Ninja → Reviews** from your WordPress dashboard.
2. Click the **three-dot (⋮)** menu on the review you want to categorize, then select **Edit**.

![Review options menu with Edit highlighted](/guide/public/images/business-reviews/organize-reviews/access-review-template-1.webp)

3. In the **Edit Review** window, click the **Review Category** field and pick any categories you'd like from the list.
4. To make a brand-new category, type its name and press **Enter**.
5. Click **Update** to save your changes. (When you're adding a brand-new review, this button reads **Save**.)

![Review Category field in the Edit Review window](/guide/public/images/business-reviews/organize-reviews/add-category-2.webp)

Your categories then appear as small tags in the **Categories** column of the reviews table. To remove one, click the **×** on the tag this only unassigns it from that review, and the category itself stays available for others.

![Category tags in the reviews table](/guide/public/images/business-reviews/organize-reviews/preview-3.webp)

## Tag Many Reviews at Once

If you're organizing an existing collection of reviews, tagging them one at a time is slow. Use the bulk action instead.

1. Tick the checkbox next to each review you want to tag. Tick the box in the table header to select everything on the page.
2. Choose **Assign Category** from the **Bulk Action** dropdown.
3. Click **Apply**.

![Assign Category in the Bulk Action dropdown](/guide/public/images/business-reviews/organize-reviews/apply-3.webp)

4. In the **Assign Category** window that opens, either keep **Existing category** selected and choose one from the **Category** dropdown, or switch to **New category** and type a name to create it on the spot.

![Assign Category window with Existing category selected](/guide/public/images/business-reviews/organize-reviews/existing-category-4.webp)

5. Click **Assign Category** to add it to every selected review.

The same window can also take a category away. Select your reviews, choose the category, and click **Remove Category** instead. This only unassigns it from the reviews you selected, it doesn't delete the category. 

You'll find these same options on your individual custom source pages and on the **Testimonials** screen, so you can organize each collection without leaving it.

![Assign Category window with New category selected](/guide/public/images/business-reviews/organize-reviews/assign-category-5.webp)

## Rename and Delete Categories

Over time you may end up with a typo, or a category you no longer use. Click the **Manage Categories** button above the reviews table to tidy them up.

The window lists every category you've created, each with a **pencil** (edit) and a **trash** (delete) icon next to it.

- To fix a name, click the **pencil** icon, type the new name, and save. Every review keeps its tag, so nothing needs re-tagging.
- To remove a category entirely, click the **trash** icon and confirm.


> [!Note]
> Deleting a category removes it from every review that uses it, across your whole site, and this can't be undone. The reviews themselves are never deleted only the tag. If you just want to untag a few reviews, use **Remove Category** from the bulk action instead.

![Manage Categories window with edit and delete icons](/guide/public/images/business-reviews/organize-reviews/manage-category-6.webp)


### Who Can Manage Categories

Because categories are shared between reviews and testimonials, renaming or deleting one changes both screens at once. For that reason, the **Manage Categories** button only appears for people who can manage **both** reviews and testimonials.

A [manager](/guide/management-settings/manager) with permission for only one of the two can still tag and untag on their own screen, they just cannot rename or delete a category that the other screen also relies on.

## Show Only One Category in a Template

This is where categories pay off. When you build or edit a review template, open the **Filter** settings and use **Filter by Category** to choose which categories that template should display.

For example, tag your strongest reviews as **Home** and set your home page template to filter by that category. The template will then show only those reviews, and any review you tag **Home** later will appear automatically.

You can read more about building templates in [Create Templates](./create-template). **Filter by Category** is a Pro feature, as are adding and editing custom reviews and testimonials. You'll need WP Social Ninja Pro to use categories to their full extent.

## Categories in CSV Files

Categories travel with your reviews when you [export and import](../import-export-migration/export-import-custom-reviews) them, which is the fastest way to organize a large collection — export your reviews, fill in the categories in a spreadsheet, and import the file back.

Your CSV has a `category` column. Because a review can hold several categories, list them in that one cell separated by a **vertical bar**:

```
Home|About
```

A review with a single category just needs the one name, with no bar. Any category in your file that doesn't exist yet is created for you during the import, so you don't have to set them up first. You can download a sample CSV from the **Import** screen to see the format.

> [!Note]
> Use the vertical bar `|` rather than a comma. A comma would be read as part of the category name, so `Home, About` would create one category actually called "Home, About".



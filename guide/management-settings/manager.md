---
title: "Manager"
description: ""
---

# Manager Settings (Granting User Permissions)

This guide will show you how to use WP Social Ninja's powerful **Manager** settings.

By default, only the website **Administrator** can see and access the WP Social Ninja plugin. This is for security. However, you might want a staff member, a store manager, or a blog editor to be able to create or manage your social feeds without giving them full admin access to your entire website.

The Manager feature allows you to give specific permissions to specific users on your site, giving you full control over who can do what.

> **Use Case:** You have an "Editor" who manages your website's blog. You want them to be able to create new X (Twitter) feed templates, but you don't want them to be able to change your plugin's global settings or connect new accounts.
>
> With this feature, you can add them as a Manager, enter their email, and check only the "Manage Templates" box. Now, that user can log in and create templates, but they won't even see the "Platforms" or "Settings" pages.

## How to Add a New Manager

Follow these simple steps to add a new manager and set their permissions.

### Step 1: Go to Manager Settings

First, go to your WordPress dashboard. In the left-hand menu, click on **WP Social Ninja**, and then select the **Settings** sub-menu.

In the Settings sidebar, expand **General Settings** and click **Managers**. This will take you to the main "Managers" page.

### Step 2: Click "New Manager"

To add a new person, click the **+ New Manager** button located in the top-right corner of the page.

![The empty Managers page with the + New Manager button highlighted](/guide/public/images/management-settings/manager-wp-social-ninja/managers-1.webp)

### Step 3: Enter the Manager's Email

A pop-up window titled **"Add New Manager"** will appear.

In the **User Email** field, enter the email address of the person you want to add.

> **Important Note:** The email address you enter **must** be registered as a user on your WordPress website (e.g., as an "Editor," "Author," or "Subscriber"). You cannot add an email for someone who does not have an existing user account on your site.

### Step 4: Assign Specific Permissions

Once you enter their email, a list of **Permissions** will appear in the pop-up. This is where you decide exactly what this manager is allowed to do.

Click the checkbox next to each permission you want to grant.

You can choose any combination. For example, you can give a user permission to "Manage Templates" but not "Manage Platforms" or "Manage Settings."

#### What Each Permission Grants

* **Full Access:** Everything below. Use sparingly.
* **Manage Platforms:** Connect, disconnect and sync your social and review accounts.
* **Manage Reviews:** View, edit, approve and delete reviews.
* **Manage Testimonials:** View, edit and delete testimonials.
* **Manage Templates:** Create and edit feed and review templates.
* **Manage Notification Popup:** Create and edit notification popups.
* **Manage Chat Widgets:** Create and edit social chat widgets.
* **Manage QR Codes:** Create QR codes and open the QR code section of Advanced Settings.
* **Manage Feeds Platforms Settings:** Change the global settings for your social feeds.
* **Manage Reviews Platforms Settings:** Change the global settings for your review platforms.
* **Manage Shoppable Settings:** Change your shoppable feed settings.
* **Manage Translation Settings:** Edit the plugin's front-end wording.
* **Manage License Settings:** View and change your licence key.
* **Manage Advanced Settings:** Change advanced options, including the option to delete all plugin data.

::: info Each permission gives access only to its assigned screen

Each permission allows access only to the screen it is assigned to. For example, **Manage Translation Settings** gives access to the Translation screen only. It does not provide access to the License Key, Advanced Settings, or other platform settings.

The **Settings** sidebar also shows only the screens available to the user based on their permissions.
:::

![The Add New Manager pop-up with the User Email field and the two-column Permissions checklist](/guide/public/images/management-settings/manager-wp-social-ninja/managers-2.webp)


::: warning
**Manage Advanced Settings** includes the option that deletes all plugin data. Grant it only to people you would trust with that.
:::

::: tip
Reviews and Testimonials have separate permissions. If a user needs access to both, or needs to manage the shared [Categories](/guide/business-reviews/organize-reviews-with-categories), make sure you grant both permissions.
:::

### Step 5: Confirm and Add the Manager

After you have selected the permissions, click the **Confirm** button.

The pop-up will close, and you will see your new manager has been added to the **Managers List** on the main "Manager" page.

## Edit or Delete an Existing Manager

Once a manager is added, you can easily change their permissions or remove them at any time.

Each manager's row shows their granted permissions as small tags, with a **+N** tag if there are more than fit on the row.

1.  Go to **WP Social Ninja → Settings**, expand **General Settings**, and click **Managers**.
2.  Find the manager you want to edit or delete in the **Managers** list.
3.  On the right side of their row, click the **three-dot menu (...)** button.
4.  A small dropdown menu will appear with two options: **Edit Manager** and **Delete Manager**.
    * If you click **"Edit Manager"**: The pop-up will re-open, allowing you to add or remove permissions by checking/unchecking the boxes. Click **Confirm** to save your changes.
    * If you click **"Delete Manager"**: The manager will be instantly removed from the list, and they will no longer have any special access to the WP Social Ninja plugin.

![A manager's row with the three-dot menu open, showing Edit Manager and Delete Manager](/guide/public/images/management-settings/manager-wp-social-ninja/managers-3.webp)
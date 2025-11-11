---
title: "How to Add Fluent Forms Reviews with WP Social Ninja"
description: ""
---

# How to Add Fluent Forms Reviews with WP Social Ninja

You can collect and display reviews directly from your website visitors using Fluent Forms. By integrating Fluent Forms with WP Social Ninja, you can automatically fetch form submissions and showcase them as social reviews.

::: tip

Displaying reviews from Fluent Forms is a premium feature and requires **WP Social Ninja Pro**.

:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/u8hd6Wkui4E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Integration with Fluent Forms_

Let’s check how **WP Social Ninja** will uplift your business by collecting Fluent Forms Reviews on your website.

## Enable Fluent Forms Integration

First, you need to enable the integration from the Fluent Forms dashboard.

- First, go to **Integrations** from the **Fluent Forms Navbar**.

- Search for **WP Social Ninja** through the search bar or scroll down to find the **WP Social Ninja** module from the list.

- Toggle the switch to **Enable** the module.

This action connects Fluent Forms with WP Social Ninja, allowing them to share data.

![enable wp social ninja 1](/guide/public/images/social-reviews/fluent-forms-review/enable-WP-Social-Ninja-1-scaled.webp)

_Enable WP Social Ninja_

### Configure the WP Social Ninja Feed in Your Form

Next, you need to configure the specific form you want to use for collecting reviews. Go to your Fluent Forms dashboard. You can either **Add a New Form** or edit an existing one.

Ensure your form includes the necessary input fields, such as **Name**, **Email Address**, **Text**, and a **Ratings** field.

::: tip **Note:** The Ratings field in Social Ninja is now available within Fluent Forms.

:::

![fluentforms input field](/guide/public/images/social-reviews/fluent-forms-review/FluentForms-Input-field-scaled.webp)

_Created a Form_

Once your form is ready, go to the **Settings & Integrations** section, navigate to the **Configuration Integrations** tab. Click the **Add New Integration** button, and select the **WPSocial Ninja Integration** feed from the dropdown list.

![configure integration 03](/guide/public/images/social-reviews/fluent-forms-review/Configure-Integration-03-scaled.webp)

_Add New Integration_

### Add New WP Social Ninja Integration Feed

After you select the WP Social Ninja integration, a configuration panel will appear.

In this step, you must **map** your form's input fields to the corresponding fields that WP Social Ninja uses to display reviews. This tells the plugin which form entry corresponds to the reviewer's name, rating, comment, and so on.

Here is a breakdown of the fields you need to configure:

- **Name:** Provide a name for this specific integration feed. This is for your internal reference, for example, "Customer Review Form Feed."

- **Integration Source:** From the dropdown menu, select the source of your reviews. In this case, you would choose **Fluent Forms**.

- **Ratings:** This is a required field. From the dropdown menu, select the field in your Fluent Form that collects star ratings from users. Make sure to choose the shortcode of social ninja ratings **{inputs.wpsr_rating_elem}** from the dropdown.

- **Reviewer Name:** This is a required field. Select the form field where users enter their full name.

- **Reviewer Email:** Select the field where users provide their email address. This is typically not displayed publicly, but can be useful for your records.

- **Comment:** This is a required field. Select the form field where users write their detailed review or feedback. Choose the shortcode from the dropdown option **{inputs.input_text}**.

- **Reviewer Image:** If your form allows users to upload a profile picture or avatar (using a file upload field), you can map that field here to display the image alongside their review. Choose the shortcode from the dropdown option **{inputs.image-upload}**.

- **Reviewer URL:** Use this to map a field where users can provide a link to their website or social media profile. This can be made clickable in the review template. Choose the shortcode from the dropdown option **{labels.url}**.

- **ReviewTitle:** If your form has a field for a review headline or title (e.g., "Summary of your experience"), map it here. Choose the shortcode from the dropdown option **{inputs.input_text_1}**.

- **Category:** If you use categories to organize your reviews (e.g., "Product Feedback," "Customer Service"), you can map a form field (like a dropdown or radio button) to this option to automatically categorize incoming submissions.

- **Conditional Logic:** Enable this option to set specific rules for when a submission should be sent to WP Social Ninja. For example, you can create a rule to only send submissions that have a rating of 4 stars or higher.

After you have mapped all the necessary fields, click the **Save Feed** button to finalize the integration setup.

![Add new WP social ninja integration feed](/guide/public/images/social-reviews/fluent-forms-review/add-new-wp-social-ninja-integration-feed.webp)

_Integration Feed_

The form has been integrated successfully. You can modify or remove the feed by selecting the **Settings** or **Delete** icon.

![edit or delete wp social feed 05](/guide/public/images/social-reviews/fluent-forms-review/Edit-or-delete-WP-Social-Feed-05-scaled.webp)

After that, click the **Save Form** button. Then you can **copy** the Form's **shortcode** and paste it into any **page/post**.

![review form 06](/guide/public/images/social-reviews/fluent-forms-review/Review-Form-06.webp)

### Create a Fluent Forms Review Template

After setting up your form, create a template in WP Social Ninja to display the submitted reviews. Go to your **WP Social Ninja** dashboard and click on **All Templates**. Click the **Add New Template** button and choose **Add Review Template**.

![Add Review Template](/guide/public/images/social-reviews/fluent-forms-review/add-review-template-07-scaled.webp)

_Add Review Template_

In the template editor, click on the **Source** configuration tab. Click the **Add the Platform** button and select **Fluent Forms** from the list of review platforms. Click the **Save Template** button.

Now, any reviews submitted through your configured form will automatically be fetched and displayed using this template.

![Select Fluent Forms Template](/guide/public/images/social-reviews/fluent-forms-review/select-fluent-form-template-08-scaled.webp)

_Select Fluent Forms Template_

### Manually Approve Reviews (Optional)

If you prefer to approve each review submitted through Fluent Forms, navigate to the **Settings** section of **WP Social Ninja**, choose **Review Platforms** from the left menu, and select **Fluent Form Settings**.

Enable **Review/Testimonial must be manually approved**, and then by clicking the **Save Settings** button.

![fluent form settings 09](/guide/public/images/social-reviews/fluent-forms-review/Fluent-Form-Settings-09-scaled.webp)

_Fluent Forms Settings_

After enabling this, all new submissions from Fluent Forms will appear in the **Reviews** tab. From there, you can individually **Approve** or **Disapprove** each review before it goes live.

![approve review ](/guide/public/images/social-reviews/fluent-forms-review/approve-review-10-scaled.webp)

From here, you can **Approve** or **Unapprove** the specific reviews. Let's **Approve** the five-star reviews and **Disapprove** the rest. Now let's have a look at how it looks on the frontend.

![Frontend Review](/guide/public/images/social-reviews/fluent-forms-review/frontend-review.png)

_Frontend Review_

As you can see, you've successfully controlled the reviews from your dashboard. Also, check out - **[How to add Custom Reviews](./add-custom-reviews)**

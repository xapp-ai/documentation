---
title: Installation on WordPress
sidebar_label: Wordpress
---

If you have a website hosted on WordPress, you can be up and running in minutes leveraging our WordPress plugin.

## Prerequisites

Before proceeding, ensure that you have:

- Administrative access to your WordPress website.
- WordPress version 4.6 or higher installed.

## Installation

### Method 1: Installing via WordPress Admin Panel

1. **Access WordPress Admin**: Log in to your WordPress admin dashboard.

2. **Navigate to Plugins**: On the admin sidebar, click on `Plugins > Add New`.

3. **Search for OC Studio Integration**: In the search field, type `OC Studio Integration` and press Enter.

4. **Install the Plugin**: Locate `OC Studio Integration` in the search results and click on `Install Now`.

5. **Activate the Plugin**: After installation, click on `Activate` to enable the plugin on your WordPress site.

### Method 2: Manual Installation via FTP

1. **Download the Plugin**: Visit [OC Studio Integration Plugin Page](https://wordpress.org/plugins/oc-studio-integration/) and download the latest version of the plugin.

2. **Unzip the Plugin**: Extract the downloaded `.zip` file to a folder on your computer.

3. **Upload via FTP**: Using an FTP client, upload the extracted plugin folder to the `/wp-content/plugins/` directory on your WordPress server.

4. **Activate the Plugin**: Log in to your WordPress admin dashboard, navigate to `Plugins`, and find `OC Studio Integration` in the list. Click `Activate`.

## Configure the WordPress Plugin

We will need to configure the plugin with the special keys for your chat and search (optional) widgets.

Within the WordPress Admin panel, navigate to the new OC Studio Settings page found under the Tools settings.

<div className="centered-image-container">
<img src="/img/channel/wordpress/wordpress-tools-oc-studio-settings.png" alt="Plugin Configuration"/>
</div>

Find the keys within studio, and paste them into your plugin configuration page.

- [How to Find the Chat Widget Key](/help/channels/chat-widget#finding-code-snippet--key)
- [How to Find the Intelligent Search Key](/help/channels/intelligent-search#finding-code-snippet--key)

A completed plugin configuration will look like the follow:

<div className="centered-image-container">
<img src="/img/channel/wordpress/wordpress-configuration.png" alt="Widget Key"/>
</div>

The chat widget will not appear, by default, in the lower right hand corner of every page on your website.

## Setting Up a Search Button

In order for the search widget to be trigger, you will need to setup at least one button with the `xapp-search-button` class setting.

### Menu Item

The most straight forward way to add a search bar button is by a menu item.

1.  In your WordPress Admin panel, go to Appearance, then Menus.
2.  Select the menu you want to edit
3.  Under "Add menu items, expand "Custom Links"

    <div className="centered-image-container">
    <img src="/img/channel/wordpress/wordpress-adding-custom-link-to-menu.png" alt="Custom Link"/>
    </div>

4.  The URL does not matter as it will not be followed but is required, for the Link Text you can put "Search" or "🔍".
5.  Click "Add to Menu" and you will see it at the bottom of the menu you are editing.
6.  Scroll to the top of the page and click "Screen Options", then within that menu select "CSS Classes"

    <div className="centered-image-container">
    <img src="/img/channel/wordpress/wordpress-turn-on-css.png" alt="Turn on CSS"/>
    </div>

7.  Scroll back down to your newly added menu item and expand menu to edit. In the field "CSS Classes (optional)" add "xapp-search-button". This is how the search code will find the button. Note: You can also remove the URL at this point if you want. It was only required to add the menu item.

    <div className="centered-image-container">
    <img src="/img/channel/wordpress/wordpress-search-button-config.png" alt="Search Menu Item Config"/>
    </div>

8.  Save and then verify by clicking on the new menu button on your home page. A search widget will appear when you click.

## Troubleshooting

If you encounter issues during installation, check the following:

- Ensure WordPress is up-to-date.
- Confirm that you have administrative privileges.
- Check for plugin compatibility with your WordPress version.
- For manual installations, verify that the plugin files were uploaded correctly.

For additional WordPress support, visit the plugin's [OC Studio Integration Support Forum](https://wordpress.org/support/plugin/oc-studio-integration/).

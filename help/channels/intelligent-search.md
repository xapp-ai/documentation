---
title: Intelligent Search
sidebar_label: Search
---

:::important

Intelligent Search requires the XAPP AI Complete plan or higher.

:::

The intelligent search channel provide search capabilities for a website which includes your traditional keyword relevancy style search, FAQ search, content driven generative AI answers and natural language powered suggested answers.

## Installation

For intelligent search, we support WordPress and custom websites.

- [WordPress Installation Guide](/help/install/wordpress)
- [Video - Installing Search with WordPress](https://www.youtube.com/watch?v=tTIcADxIGMU)

### Finding Code Snippet & Key

For the WordPress installation you will need the key found on your search's settings page and by clicking the puzzle piece in the header menu.

<div className="centered-image-container">
<img src="/img/channel/search/search-installation-key.png" alt="Search Key"/>
</div>

You can also use the script snippet to copy and paste on to your site.

```html
<script
  id="xapp-search-js"
  src="https://search.xapp.ai/xapp-search-bar.js?key=YOUR_SEARCH_KEY"
></script>
```

### Triggering Search with a Button Press

By default, the search bar requires a button press to make it appear. For example, at the top of this document there is a "🔍Search" button that when you press it pops up the search bar.

<div className="centered-image-container">
<img src="/img/channel/search/search-button.png" alt="Search Button"/>
</div>

The search bar will look for all elements (`<div>` or `<button/>`) on your website with the class `xapp-search-button`. You can add this class to multiple elements, they will all trigger the search bar pop up. Adding this class does not modify the style of the button but you can feel free to add your own class in your stylesheet with this class name.

For example a button:

```html
<button class="xapp-search-button">Search</button>
```

or within a list:

```html
<li class="menu-item my-menu xapp-search-button">
  <a class="menu-link">Search</a>
</li>
```

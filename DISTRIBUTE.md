# HubSpot Pricing Widget Distribution Guide

This guide explains how to build, distribute, and embed the pricing calculator widget on HubSpot landing pages.

## Prerequisites

- GitHub account with a public repository
- Access to HubSpot page editor

## Step 1: Build the Widget

Build the widget files locally:

```bash
npm install
npm run build:widget
```

This creates two files in the `dist` directory:
- `hubspot-pricing-widget.iife.js` - The JavaScript bundle
- `hubspot-pricing-widget.css` - The styles

## Step 2: Commit and Push to GitHub

1. Make sure your repository is public on GitHub
2. Commit the built files:

```bash
git add dist/
git commit -m "Build pricing widget for distribution"
git push origin main
```

## Step 3: Get jsDelivr URLs

Your files will be available via jsDelivr at these URLs:

```
https://cdn.jsdelivr.net/gh/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME@main/dist/hubspot-pricing-widget.iife.js
https://cdn.jsdelivr.net/gh/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME@main/dist/hubspot-pricing-widget.css
```

Replace:
- `YOUR-GITHUB-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with your repository name

### Using a Specific Version (Recommended)

For production, use a specific commit or tag instead of `main`:

```
https://cdn.jsdelivr.net/gh/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME@COMMIT-HASH/dist/hubspot-pricing-widget.iife.js
```

## Step 4: Add to HubSpot Page

1. In HubSpot, navigate to your landing page editor
2. Add a **Custom HTML module** where you want the calculator
3. Paste this code into the module:

```html
<!-- HubSpot Pricing Calculator Widget -->
<div id="hubspot-pricing-calculator"></div>

<!-- Load widget styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME@main/dist/hubspot-pricing-widget.css">

<!-- Load widget JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME@main/dist/hubspot-pricing-widget.iife.js"></script>

<!-- Initialize the widget -->
<script>
  // Wait for the widget to load
  if (window.HubSpotPricingWidget) {
    window.HubSpotPricingWidget.init('hubspot-pricing-calculator');
  } else {
    // Fallback if script hasn't loaded yet
    window.addEventListener('load', function() {
      if (window.HubSpotPricingWidget) {
        window.HubSpotPricingWidget.init('hubspot-pricing-calculator');
      }
    });
  }
</script>
```

4. Update the URLs with your actual GitHub username and repository name
5. Save and publish your HubSpot page

## Step 5: Verify

1. Preview your HubSpot page
2. Check that the pricing calculator appears and functions correctly
3. Test all interactive features (team size selection, location toggle, etc.)

## Updating the Widget

When you need to update the widget:

1. Make your changes to the source code
2. Build the widget: `npm run build:widget`
3. Commit and push to GitHub
4. The changes will be automatically available via jsDelivr (may take a few minutes to propagate)

### Cache Busting

To force an update immediately, use a specific commit hash:

1. Get the latest commit hash: `git rev-parse HEAD`
2. Update your HubSpot embed code with the new hash:
   ```
   https://cdn.jsdelivr.net/gh/USERNAME/REPO@NEW-COMMIT-HASH/dist/...
   ```

## Troubleshooting

### Widget not appearing
- Check browser console for errors
- Verify the jsDelivr URLs are correct
- Ensure your GitHub repository is public

### Styling issues
- Make sure the CSS file is loading (check Network tab)
- Check for CSS conflicts with HubSpot's styles
- The widget uses Tailwind CSS with scoped styles

### JavaScript errors
- Verify the script URLs are correct
- Check that the initialization code runs after the script loads
- Look for console errors that might indicate missing dependencies

## Advanced Options

### Multiple Widgets on Same Page

To add multiple calculators, use unique IDs:

```html
<div id="calculator-1"></div>
<div id="calculator-2"></div>

<script>
  window.HubSpotPricingWidget.init('calculator-1');
  window.HubSpotPricingWidget.init('calculator-2');
</script>
```

### Custom Styling

Override widget styles by adding custom CSS after the widget CSS link:

```html
<style>
  #hubspot-pricing-calculator {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
```

## Support

For issues or questions:
- Check the browser console for errors
- Verify all URLs are correct
- Ensure your GitHub repo is public
- Test the widget locally first with `npm run dev`
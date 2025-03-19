# BibleProject Web Challenge Overview

- Create a page that displays a BibleProject video series
- Spend no more than 6 hours on the challenge

## Design Requirements

- Style the page to match `index.png` as close as possible without access to the Figma file
- Make the page responsive
- Load a YouTube embed in the right section of the banner when a video tile is clicked

## Technical Requirements

- Use the provided template as a starting point
  - [Vite](https://vitejs.dev/) is included to support JSX and preview the page
  - No third-party packages should be installed
  - CSS should run in modern browsers without using any additional features provided by Vite or PostCSS
- Fetch the contents of `public/api/data.json` to render the page
- Allow the page to accept a URL query parameter called `debug` that will cause the video tile interaction to randomly fail and handle the error gracefully

## Stretch Goals

- Add at least one CSS enhancement (animation, effect, etc.)
- Create a simple theme using CSS custom properties
- Add any additional improvements or optimizations that you feel make the experience better


## Skylar Notes
Things I changed
================
1] Added a little more space between cards because it felt crowded with the text in there
2] Didn't use the "color" on the videoCategory as the bottom border of the banner (I think that might have been expected), the color didn't look good
3] I added autoplay, but because of browser/Google restrictions it's not obvious or easy to autoplay it without it being muted (so it starts muted).  It also doesn't show the unmute on mobile, would need to be fixed
4] I used hooks to play the video, felt like the best way to load it in since the components were in different parts of the app
5] I changed the color of the text on the banner to better show on the background image
6] Added some animation to the video loading in and the Youtube video loading in
7] You can click the "BibleProject" and have it change font styles (just for show, not useful)



Things I would change if I had more time / less restrictions
============================================================
1] Loading the video on it's own screen instead of in the banner
2] Better more stylish tooltips on the video description
3] Potentially use Toast for message popups
4] Log errors to a central logging service
5] Get an icon from Font Awesome or somewhere for the video link (didn't want to add any libraries), I just used a screenshot from the design
6] Set a title for the page based either on the video series or the video you clicked on
7] Loaded in JSON with hooks
8] A little more tweaking for all browser sizes (on really really small it doesn't look right and really really big it doesn't look right).
9] Added some testing with React Testing Library (didn't want to violate the no-library rules)
10] Do a light / dark look with a theme selector?
11] Add more error handling around fetch
12] Skeleton loading placeholders
